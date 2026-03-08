import React from 'react';

const TICKER_ITEMS = [
    { text: 'OpenAI raises $40B in largest private AI funding round', highlight: 'OpenAI' },
    { text: 'React 19 stable release hits npm with server components', highlight: 'React 19' },
    { text: 'Anthropic launches Claude 4 with extended thinking', highlight: 'Claude 4' },
    { text: 'Intel announces 15,000 layoffs in restructuring', highlight: 'Intel' },
    { text: 'Rust enters top 10 in TIOBE index', highlight: 'Rust' },
    { text: 'xAI raises $6B to challenge OpenAI dominance', highlight: 'xAI' },
    { text: 'Cursor AI coding editor crosses 1M daily active users', highlight: 'Cursor' },
    { text: 'GitHub Copilot now supports multi-file editing', highlight: 'Copilot' },
    { text: 'Stripe raises $6.5B at record fintech valuation', highlight: 'Stripe' },
    { text: 'DeepSeek open-sources R1 reasoning model', highlight: 'DeepSeek' },
    { text: 'Tailwind CSS v4 released with new Oxide engine', highlight: 'Tailwind' },
    { text: 'Nvidia market cap surpasses $3T milestone', highlight: 'Nvidia' },
    { text: 'Bun 1.2 launches with S3 support and built-in Postgres', highlight: 'Bun 1.2' },
    { text: 'Meta releases Llama 4 family of models', highlight: 'Llama 4' },
    { text: 'Vercel ships Next.js 15 with Turbopack stable', highlight: 'Next.js 15' },
];

export default function TickerBar() {
    // Double the items for seamless loop
    const items = [...TICKER_ITEMS, ...TICKER_ITEMS];

    return (
        <div className="ticker-bar dashboard-ticker">
            <div className="ticker-track">
                {items.map((item, i) => (
                    <span key={i} className="ticker-item">
                        <span className="ticker-dot" />
                        <span>
                            <span className="ticker-highlight">{item.highlight}</span>
                            {' — '}
                            {item.text.replace(item.highlight, '').replace(' — ', '')}
                        </span>
                    </span>
                ))}
            </div>
        </div>
    );
}
