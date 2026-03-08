import React from 'react';
import { Skull, TrendingDown } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import PanelWrapper from './PanelWrapper';
import { LAYOFF_EVENTS, LAYOFF_MONTHLY, getTotalLayoffs } from '../data/layoffs';

function CustomTooltip({ active, payload, label }) {
    if (!active || !payload?.length) return null;
    return (
        <div style={{
            background: 'rgba(10,10,15,0.95)',
            border: '1px solid rgba(255,7,58,0.3)',
            padding: '8px 12px',
            borderRadius: '4px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
        }}>
            <div style={{ color: 'var(--text-secondary)' }}>{label}</div>
            <div style={{ color: 'var(--color-danger)', fontWeight: 700 }}>
                {payload[0].value.toLocaleString()} jobs
            </div>
        </div>
    );
}

export default function LayoffTracker() {
    const sorted = [...LAYOFF_EVENTS].sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
        <PanelWrapper title="Layoff Tracker" icon={Skull} badge="static">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <TrendingDown size={14} style={{ color: 'var(--color-danger)' }} />
                <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: 'var(--color-danger)',
                }}>
                    {getTotalLayoffs().toLocaleString()} total tracked layoffs
                </span>
            </div>

            <div className="layoff-chart">
                <ResponsiveContainer width="100%" height={120}>
                    <AreaChart data={LAYOFF_MONTHLY}>
                        <defs>
                            <linearGradient id="layoffGrad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#ff073a" stopOpacity={0.3} />
                                <stop offset="100%" stopColor="#ff073a" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis
                            dataKey="month"
                            tick={{ fontSize: 9, fill: '#555570', fontFamily: 'JetBrains Mono' }}
                            axisLine={false}
                            tickLine={false}
                        />
                        <YAxis hide />
                        <Tooltip content={<CustomTooltip />} />
                        <Area
                            type="monotone"
                            dataKey="total"
                            stroke="#ff073a"
                            fill="url(#layoffGrad)"
                            strokeWidth={2}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

            <div className="layoff-list">
                {sorted.slice(0, 8).map((event, i) => (
                    <div key={i} className="layoff-item fade-in" style={{ animationDelay: `${i * 60}ms` }}>
                        <div className="layoff-company">
                            <span className="layoff-name">{event.company}</span>
                            <span className="layoff-date">{event.date} · {event.sector}</span>
                        </div>
                        <div>
                            <span className="layoff-count">-{event.count.toLocaleString()}</span>
                            {event.percent && (
                                <span className="layoff-percent">({event.percent}%)</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </PanelWrapper>
    );
}
