import React, { useCallback } from 'react';
import { Brain, ExternalLink } from 'lucide-react';
import PanelWrapper from './PanelWrapper';
import { fetchLatestAIPapers } from '../api/arxiv';
import { usePolling } from '../hooks/usePolling';

export default function AIPapers() {
    const fetchFn = useCallback(() => fetchLatestAIPapers(10), []);
    const { data: papers, loading, error } = usePolling(fetchFn, 600000);

    return (
        <PanelWrapper title="AI Papers" icon={Brain} badge="live">
            {loading && <div className="loading">Fetching papers</div>}
            {error && <div className="error-msg">⚠ {error}</div>}
            {papers && (
                <div className="papers-list">
                    {papers.map((paper, i) => (
                        <a
                            key={paper.id}
                            href={paper.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="paper-card fade-in"
                            style={{ animationDelay: `${i * 50}ms`, textDecoration: 'none' }}
                        >
                            <div className="paper-title">{paper.title}</div>
                            <div className="paper-authors">
                                {paper.authors.slice(0, 3).join(', ')}
                                {paper.authors.length > 3 && ` +${paper.authors.length - 3}`}
                            </div>
                            <div className="paper-abstract">{paper.summary}</div>
                            <div className="paper-date">
                                {paper.published}
                                <span style={{ marginLeft: 8, color: 'var(--neon-purple)', opacity: 0.6 }}>
                                    {paper.categories.slice(0, 3).join(' · ')}
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            )}
        </PanelWrapper>
    );
}
