import React, { useState, useEffect } from 'react';
import { Activity, Zap, Radio, Clock, TrendingUp } from 'lucide-react';

export default function HeaderBar({ stats }) {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const utc = time.toUTCString().slice(17, 25);
    const local = time.toLocaleTimeString('en-US', { hour12: false });
    const dateStr = time.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

    // Tech health level based on signals
    const healthLevel = 2; // Nominal

    const healthLabels = {
        1: 'OPTIMAL',
        2: 'NOMINAL',
        3: 'ELEVATED',
        4: 'CRITICAL',
    };

    return (
        <div className="header-bar dashboard-header">
            <div className="header-brand">
                <div>
                    <div className="header-logo">◈ DEVPULSE</div>
                    <div className="header-version">v1.0.0 — TECH INTEL DASHBOARD</div>
                </div>
            </div>

            <div className="header-center">
                <div className={`tech-health level-${healthLevel}`}>
                    <Zap size={12} />
                    TECHCON {healthLevel} — {healthLabels[healthLevel]}
                </div>

                <div className="header-stat">
                    <span className="header-stat-value">{stats.repos?.toLocaleString() || '—'}</span>
                    <span className="header-stat-label">Repos Tracked</span>
                </div>

                <div className="header-stat">
                    <span className="header-stat-value">{stats.papers || '—'}</span>
                    <span className="header-stat-label">Papers Today</span>
                </div>

                <div className="header-stat">
                    <span className="header-stat-value">{stats.funding || '—'}</span>
                    <span className="header-stat-label">Funding This Week</span>
                </div>

                <div className="header-stat">
                    <span className="header-stat-value">{stats.hnStories || '—'}</span>
                    <span className="header-stat-label">HN Stories</span>
                </div>
            </div>

            <div className="header-right">
                <div className="header-clock">
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{dateStr}</div>
                    <div>{local} <span style={{ color: 'var(--text-muted)', fontSize: '0.7rem' }}>LOCAL</span></div>
                    <div style={{ fontSize: '0.7rem' }}>{utc} <span style={{ color: 'var(--text-muted)' }}>UTC</span></div>
                </div>
                <div className="live-indicator">
                    <span className="live-dot"></span>
                    <span style={{ color: 'var(--color-danger)' }}>LIVE</span>
                </div>
            </div>
        </div>
    );
}
