import React, { useRef, useEffect, useState } from 'react';
import { Globe as GlobeIcon } from 'lucide-react';
import PanelWrapper from './PanelWrapper';
import { TECH_HUBS, TECH_ARCS } from '../data/techHubs';

export default function DevGlobe() {
    const globeRef = useRef(null);
    const containerRef = useRef(null);
    const [GlobeComponent, setGlobeComponent] = useState(null);
    const [dimensions, setDimensions] = useState({ width: 400, height: 400 });

    // Dynamically import react-globe.gl for better loading
    useEffect(() => {
        import('react-globe.gl')
            .then((mod) => setGlobeComponent(() => mod.default))
            .catch(() => {
                // Fallback if globe fails to load
                setGlobeComponent(null);
            });
    }, []);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const observer = new ResizeObserver((entries) => {
            for (const entry of entries) {
                const { width } = entry.contentRect;
                setDimensions({ width, height: Math.min(width, 500) });
            }
        });

        observer.observe(container);
        return () => observer.disconnect();
    }, []);

    // Auto-rotate
    useEffect(() => {
        if (!GlobeComponent) return;

        const timer = setTimeout(() => {
            if (!globeRef.current) return;
            const controls = globeRef.current.controls();
            if (controls) {
                controls.autoRotate = true;
                controls.autoRotateSpeed = 0.8;
                controls.enableZoom = true;
                controls.minDistance = 200;
                controls.maxDistance = 600;
            }

            // Set initial POV
            globeRef.current.pointOfView({ lat: 20, lng: 0, altitude: 2.5 });
        }, 100);

        return () => clearTimeout(timer);
    }, [GlobeComponent]);

    const pointsData = TECH_HUBS.map((hub) => ({
        lat: hub.lat,
        lng: hub.lng,
        size: hub.size * 0.5,
        color: hub.color,
        label: `${hub.city}: ${hub.devCount} devs`,
    }));

    const arcsData = TECH_ARCS.map((arc) => ({
        startLat: arc.startLat,
        startLng: arc.startLng,
        endLat: arc.endLat,
        endLng: arc.endLng,
        color: [arc.color + 'aa', arc.color + '44'],
        altitude: 0.1 + Math.random() * 0.3,
        initialGap: Math.random() * 2,
    }));

    const ringsData = pointsData.map((d) => ({
        ...d,
        maxRadius: d.size * 5 + 1,
        propagationSpeed: 1 + Math.random(),
        repeatPeriod: 1000 + Math.random() * 2000,
    }));

    return (
        <PanelWrapper title="Global Dev Activity" icon={GlobeIcon} badge="live">
            <div ref={containerRef} className="globe-container">
                {GlobeComponent ? (
                    <GlobeComponent
                        ref={globeRef}
                        width={dimensions.width}
                        height={dimensions.height}
                        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                        backgroundImageUrl=""
                        backgroundColor="rgba(0,0,0,0)"
                        atmosphereColor="#00d4ff"
                        atmosphereAltitude={0.15}
                        pointsData={pointsData}
                        pointLat="lat"
                        pointLng="lng"
                        pointRadius="size"
                        pointColor="color"
                        pointAltitude={0.01}
                        pointsMerge={false}
                        pointLabel="label"
                        arcsData={arcsData}
                        arcStartLat="startLat"
                        arcStartLng="startLng"
                        arcEndLat="endLat"
                        arcEndLng="endLng"
                        arcColor="color"
                        arcAltitude="altitude"
                        arcDashLength={0.4}
                        arcDashGap={0.2}
                        arcDashInitialGap="initialGap"
                        arcDashAnimateTime={2000}
                        arcStroke={0.6}
                        ringsData={ringsData}
                        ringLat="lat"
                        ringLng="lng"
                        ringColor={(d) => (t) => `${d.color}${Math.round((1 - t) * 255).toString(16).padStart(2, '0')}`}
                        ringMaxRadius="maxRadius"
                        ringPropagationSpeed="propagationSpeed"
                        ringRepeatPeriod="repeatPeriod"
                    />
                ) : (
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%',
                        minHeight: 300,
                        flexDirection: 'column',
                        gap: 16,
                    }}>
                        <GlobeIcon size={48} style={{ color: 'var(--neon-cyan)', opacity: 0.3 }} />
                        <span className="loading">Initializing globe</span>
                    </div>
                )}

                <div className="globe-overlay">
                    <div className="globe-stat">
                        <div className="globe-stat-value">20</div>
                        Tech Hubs
                    </div>
                    <div className="globe-stat">
                        <div className="globe-stat-value">3.8M+</div>
                        Active Devs
                    </div>
                    <div className="globe-stat">
                        <div className="globe-stat-value">8</div>
                        Corridors
                    </div>
                </div>
            </div>
        </PanelWrapper>
    );
}
