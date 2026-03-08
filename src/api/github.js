// GitHub API — no authentication needed (60 req/hr)

export async function fetchTrendingRepos(since = 'daily') {
    const dateMap = {
        daily: 1,
        weekly: 7,
        monthly: 30,
    };

    const days = dateMap[since] || 7;
    const date = new Date();
    date.setDate(date.getDate() - days);
    const dateStr = date.toISOString().split('T')[0];

    const url = `https://api.github.com/search/repositories?q=created:>${dateStr}&sort=stars&order=desc&per_page=12`;

    const res = await fetch(url, {
        headers: { 'Accept': 'application/vnd.github.v3+json' },
    });

    if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);

    const data = await res.json();
    return data.items.map(repo => ({
        id: repo.id,
        name: repo.full_name,
        description: repo.description,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        language: repo.language,
        url: repo.html_url,
        owner: {
            login: repo.owner.login,
            avatar: repo.owner.avatar_url,
        },
    }));
}

// Language colors for dots
export const LANG_COLORS = {
    JavaScript: '#f1e05a',
    TypeScript: '#3178c6',
    Python: '#3572A5',
    Rust: '#dea584',
    Go: '#00ADD8',
    Java: '#b07219',
    'C++': '#f34b7d',
    C: '#555555',
    Ruby: '#701516',
    PHP: '#4F5D95',
    Swift: '#F05138',
    Kotlin: '#A97BFF',
    Dart: '#00B4AB',
    Zig: '#ec915c',
    'C#': '#178600',
    Lua: '#000080',
    Shell: '#89e051',
    HTML: '#e34c26',
    CSS: '#563d7c',
    Vue: '#41b883',
    Svelte: '#ff3e00',
    Jupyter: '#DA5B0B',
    null: '#666',
};
