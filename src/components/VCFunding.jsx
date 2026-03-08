import React from 'react';
import { DollarSign, TrendingUp } from 'lucide-react';
import PanelWrapper from './PanelWrapper';
import { FUNDING_ROUNDS, formatFunding, getTotalFunding } from '../data/funding';

export default function VCFunding() {
    const sorted = [...FUNDING_ROUNDS].sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
        <PanelWrapper title="VC Funding Rounds" icon={DollarSign} badge="static">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <TrendingUp size={14} style={{ color: 'var(--color-money)' }} />
                <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: 'var(--color-money)',
                }}>
                    {formatFunding(getTotalFunding())} total tracked funding
                </span>
            </div>

            <div className="funding-list">
                {sorted.map((round, i) => (
                    <div key={i} className="funding-item fade-in" style={{ animationDelay: `${i * 60}ms` }}>
                        <div className="funding-company">
                            <span className="funding-name">{round.company}</span>
                            <span className="funding-investors">{round.investors}</span>
                        </div>
                        <div className="funding-right">
                            <span className="funding-amount">{formatFunding(round.amount)}</span>
                            <span className="funding-stage">{round.stage}</span>
                        </div>
                    </div>
                ))}
            </div>
        </PanelWrapper>
    );
}
