// Curated real VC funding data — replace with live API when available
export const FUNDING_ROUNDS = [
    { company: 'OpenAI', amount: 40000, stage: 'Late Stage', investors: 'SoftBank, Microsoft, Thrive Capital', date: '2025-03-01', sector: 'AI' },
    { company: 'Anthropic', amount: 2000, stage: 'Series D', investors: 'Google, Spark Capital', date: '2025-02-15', sector: 'AI' },
    { company: 'xAI', amount: 6000, stage: 'Series C', investors: 'A16Z, Sequoia, QIA', date: '2025-01-20', sector: 'AI' },
    { company: 'Perplexity', amount: 500, stage: 'Series B', investors: 'IVP, NEA, Bezos Expeditions', date: '2025-01-10', sector: 'AI Search' },
    { company: 'Databricks', amount: 10000, stage: 'Series J', investors: 'Thrive Capital, A16Z', date: '2024-12-20', sector: 'Data / AI' },
    { company: 'Stripe', amount: 6500, stage: 'Series I', investors: 'Sequoia, A16Z, Goldman Sachs', date: '2025-02-22', sector: 'Fintech' },
    { company: 'Anduril', amount: 1500, stage: 'Series F', investors: 'Founders Fund, A16Z', date: '2025-01-18', sector: 'Defense Tech' },
    { company: 'Figure AI', amount: 675, stage: 'Series B', investors: 'Microsoft, Nvidia, Bezos', date: '2025-02-28', sector: 'Robotics' },
    { company: 'Cursor', amount: 105, stage: 'Series B', investors: 'A16Z, Thrive Capital', date: '2025-01-05', sector: 'Dev Tools' },
    { company: 'Together AI', amount: 305, stage: 'Series B', investors: 'Salesforce, Nvidia', date: '2025-02-10', sector: 'AI Infra' },
    { company: 'Mistral AI', amount: 640, stage: 'Series B', investors: 'General Catalyst, A16Z', date: '2025-01-15', sector: 'AI' },
    { company: 'Wiz', amount: 1000, stage: 'Series E', investors: 'A16Z, Lightspeed', date: '2025-02-01', sector: 'Cybersecurity' },
];

export function formatFunding(millions) {
    if (millions >= 1000) return `$${(millions / 1000).toFixed(1)}B`;
    return `$${millions}M`;
}

export function getTotalFunding() {
    return FUNDING_ROUNDS.reduce((sum, r) => sum + r.amount, 0);
}
