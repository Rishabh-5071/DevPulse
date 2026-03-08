import React, { useCallback } from 'react';
import { Flame, MessageSquare, ArrowUpRight } from 'lucide-react';
import PanelWrapper from './PanelWrapper';
import { fetchTopStories, timeAgo } from '../api/hackernews';
import { usePolling } from '../hooks/usePolling';

export default function HackerNewsFeed() {
    const fetchFn = useCallback(() => fetchTopStories(15), []);
    const { data: stories, loading, error } = usePolling(fetchFn, 120000);

    return (
        <PanelWrapper title="HackerNews" icon={Flame} badge="live">
            {loading && <div className="loading">Loading stories</div>}
            {error && <div className="error-msg">⚠ {error}</div>}
            {stories && (
                <div className="hn-list">
                    {stories.map((story, i) => (
                        <a
                            key={story.id}
                            href={story.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hn-item fade-in"
                            style={{ animationDelay: `${i * 40}ms`, textDecoration: 'none' }}
                        >
                            <span className="hn-rank">{story.rank}.</span>
                            <div className="hn-content">
                                <div className="hn-title">{story.title}</div>
                                <div className="hn-meta">
                                    <span className="hn-score">▲ {story.score}</span>
                                    <span>{story.by}</span>
                                    <span>
                                        <MessageSquare size={9} style={{ verticalAlign: 'middle' }} /> {story.descendants}
                                    </span>
                                    <span>{timeAgo(story.time)}</span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            )}
        </PanelWrapper>
    );
}
