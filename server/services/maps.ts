const PLACES_SEARCH_TEXT_URL = 'https://places.googleapis.com/v1/places:searchText';
const ROUTES_COMPUTE_URL = 'https://routes.googleapis.com/directions/v2:computeRoutes';

function getGoogleMapsApiKey(): string | null {
  const key = process.env.GOOGLE_MAPS_API_KEY?.trim();
  if (!key || key === 'YOUR_GOOGLE_MAPS_API_KEY') {
    return null;
  }
  return key;
}

export function isGoogleMapsConfigured(): boolean {
  return getGoogleMapsApiKey() !== null;
}

export interface NearbyGovOffice {
  id: string;
  name: string;
  address: string;
  location: { latitude: number; longitude: number } | null;
  phone: string | null;
  openNow: boolean | null;
  googleMapsUri: string | null;
  directionsUri: string | null;
}

export async function findNearbyGovOffices(params: {
  query: string;
  state?: string;
  district?: string;
  lat?: number;
  lng?: number;
  radiusMeters?: number;
  languageCode?: string;
}): Promise<{ offices: NearbyGovOffice[]; searchQuery: string }> {
  const apiKey = getGoogleMapsApiKey();
  if (!apiKey) {
    throw new Error('GOOGLE_MAPS_API_KEY is not configured on the server.');
  }

  const locationSuffix = [params.district, params.state, 'India'].filter(Boolean).join(', ');
  const textQuery =
    params.lat !== undefined && params.lng !== undefined
      ? `${params.query} government office`
      : `${params.query} government office near ${locationSuffix}`;

  const body: Record<string, unknown> = {
    textQuery,
    languageCode: params.languageCode || 'en',
    regionCode: 'IN',
    maxResultCount: 8,
  };

  if (
    typeof params.lat === 'number' &&
    typeof params.lng === 'number' &&
    Number.isFinite(params.lat) &&
    Number.isFinite(params.lng)
  ) {
    body.locationBias = {
      circle: {
        center: { latitude: params.lat, longitude: params.lng },
        radius: Math.min(Math.max(params.radiusMeters || 15000, 1000), 50000),
      },
    };
  }

  // Modern Places API (New) with strict FieldMask
  const response = await fetch(PLACES_SEARCH_TEXT_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': apiKey,
      'X-Goog-FieldMask':
        'places.id,places.displayName,places.formattedAddress,places.location,places.nationalPhoneNumber,places.regularOpeningHours.openNow,places.googleMapsUri,places.googleMapsLinks.directionsUri',
    },
    body: JSON.stringify(body),
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const errMsg = data?.error?.message || `HTTP ${response.status}`;
    throw new Error(`Google Places API (New) error: ${errMsg}`);
  }

  const places = Array.isArray(data.places) ? data.places : [];
  const offices: NearbyGovOffice[] = places.map((p: any) => ({
    id: p.id || '',
    name: p.displayName?.text || 'Government Office',
    address: p.formattedAddress || '',
    location: p.location
      ? { latitude: p.location.latitude, longitude: p.location.longitude }
      : null,
    phone: p.nationalPhoneNumber || null,
    openNow:
      typeof p.regularOpeningHours?.openNow === 'boolean'
        ? p.regularOpeningHours.openNow
        : null,
    googleMapsUri: p.googleMapsUri || null,
    directionsUri: p.googleMapsLinks?.directionsUri || p.googleMapsUri || null,
  }));

  return { offices, searchQuery: textQuery };
}

export interface RouteStep {
  instruction: string;
  distanceMeters: number;
  duration: string;
}

export interface DirectionsResult {
  distanceMeters: number;
  distanceText: string;
  durationSeconds: number;
  durationText: string;
  travelMode: string;
  steps: RouteStep[];
}

function parseDurationSeconds(durationStr?: string): number {
  if (!durationStr) return 0;
  const match = String(durationStr).match(/^(\d+(?:\.\d+)?)s$/);
  return match ? Math.round(parseFloat(match[1])) : 0;
}

function formatDuration(seconds: number): string {
  if (seconds < 60) return `${seconds} sec`;
  const mins = Math.round(seconds / 60);
  if (mins < 60) return `${mins} min`;
  const hours = Math.floor(mins / 60);
  const remMins = mins % 60;
  return remMins > 0 ? `${hours} hr ${remMins} min` : `${hours} hr`;
}

function formatDistance(meters: number): string {
  if (meters < 1000) return `${meters} m`;
  return `${(meters / 1000).toFixed(1)} km`;
}

export async function computeDirections(params: {
  originLat?: number;
  originLng?: number;
  originAddress?: string;
  destinationLat?: number;
  destinationLng?: number;
  destinationPlaceId?: string;
  destinationAddress?: string;
  travelMode?: 'DRIVE' | 'WALK' | 'TRANSIT' | 'TWO_WHEELER';
  languageCode?: string;
}): Promise<DirectionsResult> {
  const apiKey = getGoogleMapsApiKey();
  if (!apiKey) {
    throw new Error('GOOGLE_MAPS_API_KEY is not configured on the server.');
  }

  let origin: Record<string, unknown>;
  if (typeof params.originLat === 'number' && typeof params.originLng === 'number') {
    origin = { location: { latLng: { latitude: params.originLat, longitude: params.originLng } } };
  } else if (params.originAddress?.trim()) {
    origin = { address: params.originAddress.trim() };
  } else {
    throw new Error('Origin location (coordinates or address) is required.');
  }

  let destination: Record<string, unknown>;
  if (params.destinationPlaceId?.trim()) {
    destination = { placeId: params.destinationPlaceId.trim() };
  } else if (typeof params.destinationLat === 'number' && typeof params.destinationLng === 'number') {
    destination = {
      location: { latLng: { latitude: params.destinationLat, longitude: params.destinationLng } },
    };
  } else if (params.destinationAddress?.trim()) {
    destination = { address: params.destinationAddress.trim() };
  } else {
    throw new Error('Destination location (placeId, coordinates, or address) is required.');
  }

  const travelMode = params.travelMode || 'DRIVE';
  const body: Record<string, unknown> = {
    origin,
    destination,
    travelMode,
    languageCode: params.languageCode || 'en',
    regionCode: 'IN',
  };

  if (travelMode === 'DRIVE' || travelMode === 'TWO_WHEELER') {
    body.routingPreference = 'TRAFFIC_AWARE';
  }

  // Modern Routes API with strict FieldMask
  const response = await fetch(ROUTES_COMPUTE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': apiKey,
      'X-Goog-FieldMask':
        'routes.duration,routes.distanceMeters,routes.legs.steps.navigationInstruction,routes.legs.steps.distanceMeters,routes.legs.steps.staticDuration',
    },
    body: JSON.stringify(body),
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const errMsg = data?.error?.message || `HTTP ${response.status}`;
    throw new Error(`Google Routes API error: ${errMsg}`);
  }

  const route = Array.isArray(data.routes) ? data.routes[0] : null;
  if (!route) {
    throw new Error('No route found between the specified locations.');
  }

  const distanceMeters = Number(route.distanceMeters || 0);
  const durationSeconds = parseDurationSeconds(route.duration);
  const rawSteps = Array.isArray(route.legs?.[0]?.steps) ? route.legs[0].steps : [];

  const steps: RouteStep[] = rawSteps
    .filter((s: any) => s?.navigationInstruction?.instructions)
    .map((s: any) => ({
      instruction: s.navigationInstruction.instructions,
      distanceMeters: Number(s.distanceMeters || 0),
      duration: formatDuration(parseDurationSeconds(s.staticDuration)),
    }));

  return {
    distanceMeters,
    distanceText: formatDistance(distanceMeters),
    durationSeconds,
    durationText: formatDuration(durationSeconds),
    travelMode,
    steps,
  };
}
