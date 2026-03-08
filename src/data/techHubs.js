// Global tech hub coordinates for the 3D globe
export const TECH_HUBS = [
    { city: 'San Francisco', lat: 37.7749, lng: -122.4194, size: 1.0, devCount: '320K', color: '#00d4ff' },
    { city: 'New York', lat: 40.7128, lng: -74.0060, size: 0.8, devCount: '280K', color: '#00d4ff' },
    { city: 'London', lat: 51.5074, lng: -0.1278, size: 0.85, devCount: '290K', color: '#00ff41' },
    { city: 'Berlin', lat: 52.5200, lng: 13.4050, size: 0.6, devCount: '180K', color: '#00ff41' },
    { city: 'Bangalore', lat: 12.9716, lng: 77.5946, size: 0.95, devCount: '310K', color: '#ff6600' },
    { city: 'Tokyo', lat: 35.6762, lng: 139.6503, size: 0.7, devCount: '210K', color: '#a855f7' },
    { city: 'Shanghai', lat: 31.2304, lng: 121.4737, size: 0.75, devCount: '240K', color: '#ff073a' },
    { city: 'Beijing', lat: 39.9042, lng: 116.4074, size: 0.7, devCount: '220K', color: '#ff073a' },
    { city: 'Toronto', lat: 43.6532, lng: -79.3832, size: 0.55, devCount: '150K', color: '#00d4ff' },
    { city: 'São Paulo', lat: -23.5505, lng: -46.6333, size: 0.6, devCount: '170K', color: '#ffbe0b' },
    { city: 'Tel Aviv', lat: 32.0853, lng: 34.7818, size: 0.5, devCount: '130K', color: '#00ff41' },
    { city: 'Singapore', lat: 1.3521, lng: 103.8198, size: 0.55, devCount: '140K', color: '#a855f7' },
    { city: 'Seoul', lat: 37.5665, lng: 126.9780, size: 0.65, devCount: '190K', color: '#a855f7' },
    { city: 'Paris', lat: 48.8566, lng: 2.3522, size: 0.6, devCount: '175K', color: '#00ff41' },
    { city: 'Sydney', lat: -33.8688, lng: 151.2093, size: 0.45, devCount: '110K', color: '#ffbe0b' },
    { city: 'Austin', lat: 30.2672, lng: -97.7431, size: 0.5, devCount: '120K', color: '#00d4ff' },
    { city: 'Seattle', lat: 47.6062, lng: -122.3321, size: 0.7, devCount: '200K', color: '#00d4ff' },
    { city: 'Shenzhen', lat: 22.5431, lng: 114.0579, size: 0.65, devCount: '195K', color: '#ff073a' },
    { city: 'Amsterdam', lat: 52.3676, lng: 4.9041, size: 0.45, devCount: '105K', color: '#00ff41' },
    { city: 'Dublin', lat: 53.3498, lng: -6.2603, size: 0.4, devCount: '90K', color: '#00ff41' },
];

// Arcs connecting major tech corridors
export const TECH_ARCS = [
    { startLat: 37.7749, startLng: -122.4194, endLat: 12.9716, endLng: 77.5946, color: '#00d4ff' },
    { startLat: 37.7749, startLng: -122.4194, endLat: 51.5074, endLng: -0.1278, color: '#00ff41' },
    { startLat: 37.7749, startLng: -122.4194, endLat: 35.6762, endLng: 139.6503, color: '#a855f7' },
    { startLat: 51.5074, startLng: -0.1278, endLat: 12.9716, endLng: 77.5946, color: '#ff6600' },
    { startLat: 40.7128, startLng: -74.0060, endLat: 51.5074, endLng: -0.1278, color: '#00ff41' },
    { startLat: 31.2304, startLng: 121.4737, endLat: 37.7749, endLng: -122.4194, color: '#ff073a' },
    { startLat: 12.9716, startLng: 77.5946, endLat: 1.3521, endLng: 103.8198, color: '#ff6600' },
    { startLat: 47.6062, startLng: -122.3321, endLat: 52.5200, endLng: 13.4050, color: '#00d4ff' },
    { startLat: 52.5200, startLng: 13.4050, endLat: 48.8566, endLng: 2.3522, color: '#00ff41' },
    { startLat: 43.6532, startLng: -79.3832, endLat: 40.7128, endLng: -74.0060, color: '#00d4ff' },
    { startLat: 35.6762, startLng: 139.6503, endLat: 37.5665, endLng: 126.9780, color: '#a855f7' },
    { startLat: 1.3521, startLng: 103.8198, endLat: -33.8688, endLng: 151.2093, color: '#ffbe0b' },
    { startLat: 31.2304, startLng: 121.4737, endLat: 22.5431, endLng: 114.0579, color: '#ff073a' },
    { startLat: -23.5505, startLng: -46.6333, endLat: 40.7128, endLng: -74.0060, color: '#ffbe0b' },
    { startLat: 32.0853, startLng: 34.7818, endLat: 51.5074, endLng: -0.1278, color: '#00ff41' },
    { startLat: 53.3498, startLng: -6.2603, endLat: 37.7749, endLng: -122.4194, color: '#00d4ff' }
];
