// Curated real tech layoff data — replace with live API when available
export const LAYOFF_EVENTS = [
    { company: 'Microsoft', count: 1900, percent: 8, date: '2025-01-28', sector: 'Gaming' },
    { company: 'Google', count: 1000, percent: null, date: '2025-01-23', sector: 'Cloud / Devices' },
    { company: 'Amazon', count: 2100, percent: null, date: '2025-02-12', sector: 'Comms / Retail' },
    { company: 'Meta', count: 3600, percent: null, date: '2025-01-15', sector: 'Reality Labs / Infra' },
    { company: 'Salesforce', count: 700, percent: 1, date: '2025-01-30', sector: 'Cloud CRM' },
    { company: 'SAP', count: 8000, percent: 7, date: '2025-01-25', sector: 'Enterprise' },
    { company: 'Intel', count: 15000, percent: 15, date: '2024-08-01', sector: 'Semiconductors' },
    { company: 'Cisco', count: 5500, percent: 7, date: '2024-09-12', sector: 'Networking' },
    { company: 'Dell', count: 12500, percent: 10, date: '2024-02-05', sector: 'Hardware' },
    { company: 'Tesla', count: 14000, percent: 10, date: '2024-04-15', sector: 'EV / Energy' },
    { company: 'Snap', count: 500, percent: 10, date: '2025-02-05', sector: 'Social Media' },
    { company: 'Unity', count: 1800, percent: 25, date: '2024-01-08', sector: 'Gaming Engine' },
];

// Monthly totals for chart
export const LAYOFF_MONTHLY = [
    { month: 'Mar 24', total: 12800 },
    { month: 'Apr 24', total: 15400 },
    { month: 'May 24', total: 9200 },
    { month: 'Jun 24', total: 7600 },
    { month: 'Jul 24', total: 8300 },
    { month: 'Aug 24', total: 18000 },
    { month: 'Sep 24', total: 11500 },
    { month: 'Oct 24', total: 6800 },
    { month: 'Nov 24', total: 5200 },
    { month: 'Dec 24', total: 4100 },
    { month: 'Jan 25', total: 14200 },
    { month: 'Feb 25', total: 8700 },
];

export function getTotalLayoffs() {
    return LAYOFF_EVENTS.reduce((sum, e) => sum + e.count, 0);
}
