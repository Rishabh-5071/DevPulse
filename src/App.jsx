import React from 'react';
import HeaderBar from './components/HeaderBar';
import TrendingRepos from './components/TrendingRepos';
import FrameworkWars from './components/FrameworkWars';
import LayoffTracker from './components/LayoffTracker';
import VCFunding from './components/VCFunding';
import AIPapers from './components/AIPapers';
import HackerNewsFeed from './components/HackerNewsFeed';
import DevGlobe from './components/DevGlobe';
import TickerBar from './components/TickerBar';
import { formatFunding, getTotalFunding } from './data/funding';

export default function App() {
    // Aggregate stats for the header
    const stats = {
        repos: 12,
        papers: 10,
        funding: formatFunding(getTotalFunding()),
        hnStories: 15,
    };

    return (
        <div className="dashboard">
            {/* Header */}
            <HeaderBar stats={stats} />

            {/* Left Column */}
            <div className="dashboard-left">
                <TrendingRepos />
                <FrameworkWars />
            </div>

            {/* Center — Globe */}
            <div className="dashboard-center">
                <DevGlobe />
                <HackerNewsFeed />
            </div>

            {/* Right Column */}
            <div className="dashboard-right">
                <AIPapers />
            </div>

            {/* Bottom Row */}
            <div className="dashboard-bottom">
                <LayoffTracker />
                <VCFunding />
            </div>

            {/* Ticker */}
            <TickerBar />
        </div>
    );
}
