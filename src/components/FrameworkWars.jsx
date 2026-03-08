import React, { useState, useCallback } from 'react';
import { Swords, Trophy } from 'lucide-react';
import PanelWrapper from './PanelWrapper';
import { fetchNpmDownloads, FRAMEWORK_MATCHUPS } from '../api/npm';
import { usePolling } from '../hooks/usePolling';

function formatDownloads(num) {
    if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(1)}M`;
    if (num >= 1_000) return `${(num / 1_000).toFixed(0)}K`;
    return num.toString();
}

export default function FrameworkWars() {
    const [categoryIdx, setCategoryIdx] = useState(0);
    const matchup = FRAMEWORK_MATCHUPS[categoryIdx];

    const fetchFn = useCallback(
        () => fetchNpmDownloads(matchup.packages.map((p) => p.name)),
        [categoryIdx]
    );

    const { data: downloads, loading, error } = usePolling(fetchFn, 600000, [categoryIdx]);

    const maxDownload = downloads
        ? Math.max(...downloads.map((d) => d.downloads), 1)
        : 1;

    // Find winner
    const winner = downloads
        ? downloads.reduce((prev, curr) => (curr.downloads > prev.downloads ? curr : prev))
        : null;

    const tabs = (
        <div className="tabs">
            {FRAMEWORK_MATCHUPS.map((m, i) => (
                <button
                    key={m.title}
                    className={`tab ${categoryIdx === i ? 'active' : ''}`}
                    onClick={() => setCategoryIdx(i)}
                >
                    {m.title}
                </button>
            ))}
        </div>
    );

    return (
        <PanelWrapper title="Framework Wars" icon={Swords} badge="live" tabs={tabs}>
            {loading && <div className="loading">Loading stats</div>}
            {error && <div className="error-msg">⚠ {error}</div>}
            {downloads && (
                <div className="fw-matchup fade-in">
                    <div className="fw-matchup-title">
                        Weekly npm Downloads
                        {winner && (
                            <span className="fw-winner" style={{ marginLeft: 12 }}>
                                <Trophy size={10} />
                                {matchup.packages.find((p) => p.name === winner.package)?.label || winner.package} wins
                            </span>
                        )}
                    </div>
                    {matchup.packages.map((pkg) => {
                        const dl = downloads.find((d) => d.package === pkg.name);
                        const count = dl?.downloads || 0;
                        const pct = (count / maxDownload) * 100;
                        const isWinner = winner && winner.package === pkg.name;
                        return (
                            <div key={pkg.name} className="fw-bar-row">
                                <span className="fw-name" style={{ color: isWinner ? pkg.color : undefined }}>
                                    {pkg.label}
                                </span>
                                <div className="fw-bar-track">
                                    <div
                                        className="fw-bar-fill"
                                        style={{
                                            width: `${pct}%`,
                                            background: `linear-gradient(90deg, ${pkg.color}33, ${pkg.color}aa)`,
                                            color: pkg.color,
                                        }}
                                    />
                                </div>
                                <span className="fw-downloads">{formatDownloads(count)}/wk</span>
                            </div>
                        );
                    })}
                </div>
            )}
        </PanelWrapper>
    );
}
