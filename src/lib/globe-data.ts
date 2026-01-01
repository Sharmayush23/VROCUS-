// Globe data and configuration for the interactive Three.js globe

export interface GlobePoint {
    id: string;
    lat: number;
    lng: number;
    size: number;
    color: string;
    label?: string;
}

// Sample data points representing global presence/tech hubs
export const globePoints: GlobePoint[] = [
    // North America
    { id: 'sf', lat: 37.7749, lng: -122.4194, size: 0.8, color: '#60a5fa', label: 'San Francisco' },
    { id: 'ny', lat: 40.7128, lng: -74.0060, size: 0.7, color: '#60a5fa', label: 'New York' },
    { id: 'tor', lat: 43.6532, lng: -79.3832, size: 0.5, color: '#60a5fa', label: 'Toronto' },

    // Europe
    { id: 'lon', lat: 51.5074, lng: -0.1278, size: 0.9, color: '#818cf8', label: 'London' },
    { id: 'par', lat: 48.8566, lng: 2.3522, size: 0.7, color: '#818cf8', label: 'Paris' },
    { id: 'ber', lat: 52.5200, lng: 13.4050, size: 0.6, color: '#818cf8', label: 'Berlin' },
    { id: 'ams', lat: 52.3676, lng: 4.9041, size: 0.5, color: '#818cf8', label: 'Amsterdam' },

    // Asia
    { id: 'tok', lat: 35.6762, lng: 139.6503, size: 1.0, color: '#f59e0b', label: 'Tokyo' },
    { id: 'sg', lat: 1.3521, lng: 103.8198, size: 0.8, color: '#f59e0b', label: 'Singapore' },
    { id: 'hk', lat: 22.3193, lng: 114.1694, size: 0.7, color: '#f59e0b', label: 'Hong Kong' },
    { id: 'seo', lat: 37.5665, lng: 126.9780, size: 0.7, color: '#f59e0b', label: 'Seoul' },
    { id: 'ban', lat: 12.9716, lng: 77.5946, size: 0.6, color: '#f59e0b', label: 'Bangalore' },
    { id: 'mum', lat: 19.0760, lng: 72.8777, size: 0.6, color: '#f59e0b', label: 'Mumbai' },

    // Australia
    { id: 'syd', lat: -33.8688, lng: 151.2093, size: 0.6, color: '#a78bfa', label: 'Sydney' },
    { id: 'mel', lat: -37.8136, lng: 144.9631, size: 0.5, color: '#a78bfa', label: 'Melbourne' },

    // South America
    { id: 'sao', lat: -23.5505, lng: -46.6333, size: 0.5, color: '#34d399', label: 'São Paulo' },
    { id: 'bue', lat: -34.6037, lng: -58.3816, size: 0.4, color: '#34d399', label: 'Buenos Aires' },

    // Middle East & Africa
    { id: 'dub', lat: 25.2048, lng: 55.2708, size: 0.6, color: '#fb923c', label: 'Dubai' },
    { id: 'cap', lat: -33.9249, lng: 18.4241, size: 0.4, color: '#fb923c', label: 'Cape Town' },
];

// Convert lat/lng to 3D cartesian coordinates
export function latLngToVector3(lat: number, lng: number, radius: number) {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);

    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const y = radius * Math.cos(phi);
    const z = radius * Math.sin(phi) * Math.sin(theta);

    return { x, y, z };
}

// Globe configuration
export const globeConfig = {
    radius: 2.5,
    atmosphereRadius: 2.7,
    pointScale: 0.05,
    rotationSpeed: 0.001,

    // Colors
    globeColor: '#0a1929',
    atmosphereColor: '#4f46e5',

    // Animation
    autoRotate: true,
    autoRotateSpeed: 0.5,
};
