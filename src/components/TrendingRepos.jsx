import React, { useState, useCallback } from 'react';
import { GitBranch, Star, GitFork } from 'lucide-react';
import PanelWrapper from './PanelWrapper';
import { fetchTrendingRepos, LANG_COLORS } from '../api/github';
import { usePolling } from '../hooks/usePolling';

export default function TrendingRepos() {
    const [period, setPeriod] = useState('weekly');

    const fetchFn = useCallback(() => fetchTrendingRepos(period), [period]);
    const { data: repos, loading, error } = usePolling(fetchFn, 300000, [period]);

    const tabs = (
        <div className="tabs">
            {['daily', 'weekly', 'monthly'].map((p) => (
                <button
                    key={p}
                    className={`tab ${period === p ? 'active' : ''}`}
                    onClick={() => setPeriod(p)}
                >
                    {p}
                </button>
            ))}
        </div>
    );

    return (
        <PanelWrapper title="Trending Repos" icon={GitBranch} badge="live" tabs={tabs}>
            {loading && <div className="loading">Fetching repos</div>}
            {error && <div className="error-msg">⚠ {error}</div>}
            {repos && (
                <div className="repo-list">
                    {repos.map((repo, i) => (
                        <a
                            key={repo.id}
                            href={repo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="repo-card fade-in"
                            style={{ animationDelay: `${i * 50}ms`, textDecoration: 'none' }}
                        >
                            <div className="repo-card-header">
                                <span className="repo-name">{repo.name}</span>
                                <span className="repo-stars">
                                    <Star size={12} />
                                    {repo.stars.toLocaleString()}
                                </span>
                            </div>
                            {repo.description && (
                                <span className="repo-desc">{repo.description}</span>
                            )}
                            <div className="repo-meta">
                                {repo.language && (
                                    <span className="repo-lang">
                                        <span
                                            className="lang-dot"
                                            style={{ background: LANG_COLORS[repo.language] || '#666' }}
                                        />
                                        {repo.language}
                                    </span>
                                )}
                                <span className="repo-forks">
                                    <GitFork size={10} /> {repo.forks.toLocaleString()}
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            )}
        </PanelWrapper>
    );
}
