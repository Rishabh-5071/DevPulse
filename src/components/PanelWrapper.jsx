import React from 'react';

export default function PanelWrapper({ title, icon: Icon, badge = 'live', children, tabs, className = '' }) {
    return (
        <div className={`panel ${className}`}>
            <div className="panel-header">
                <div className="panel-header-left">
                    {Icon && <Icon size={14} className="panel-icon" />}
                    <span className="panel-title">{title}</span>
                </div>
                <span className={`panel-badge ${badge === 'live' ? 'badge-live' : 'badge-static'}`}>
                    {badge === 'live' ? '● LIVE' : badge}
                </span>
            </div>
            {tabs}
            <div className="panel-body">
                {children}
            </div>
        </div>
    );
}
