// HackerNews Firebase API — free, no auth, no rate limit

const HN_BASE = 'https://hacker-news.firebaseio.com/v0';

export async function fetchTopStories(count = 15) {
    const res = await fetch(`${HN_BASE}/topstories.json`);
    if (!res.ok) throw new Error('HN API error');

    const ids = await res.json();
    const topIds = ids.slice(0, count);

    const stories = await Promise.all(
        topIds.map(async (id) => {
            const storyRes = await fetch(`${HN_BASE}/item/${id}.json`);
            if (!storyRes.ok) return null;
            return storyRes.json();
        })
    );

    return stories
        .filter(Boolean)
        .map((story, index) => ({
            id: story.id,
            rank: index + 1,
            title: story.title,
            url: story.url || `https://news.ycombinator.com/item?id=${story.id}`,
            score: story.score,
            by: story.by,
            time: story.time,
            descendants: story.descendants || 0,
            hnUrl: `https://news.ycombinator.com/item?id=${story.id}`,
        }));
}

export function timeAgo(unixTime) {
    const seconds = Math.floor(Date.now() / 1000 - unixTime);
    if (seconds < 60) return `${seconds}s ago`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    return `${days}d ago`;
}
