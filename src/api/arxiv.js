// arXiv API — free, no auth needed
// Returns Atom XML; we parse it manually

export async function fetchLatestAIPapers(count = 10) {
    const query = encodeURIComponent('cat:cs.AI OR cat:cs.LG OR cat:cs.CL');
    const targetUrl = `https://export.arxiv.org/api/query?search_query=${query}&start=0&max_results=${count}&sortBy=submittedDate&sortOrder=descending`;
    const url = `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(targetUrl)}`;

    const res = await fetch(url);
    if (!res.ok) throw new Error(`arXiv API error: ${res.status}`);

    const text = await res.text();
    return parseArxivXml(text);
}

function parseArxivXml(xml) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(xml, 'text/xml');
    const entries = doc.getElementsByTagName('entry');

    return Array.from(entries).map((entry) => {
        const id = entry.getElementsByTagName('id')[0]?.textContent || '';
        const title = entry.getElementsByTagName('title')[0]?.textContent?.replace(/\s+/g, ' ').trim() || '';
        const summary = entry.getElementsByTagName('summary')[0]?.textContent?.replace(/\s+/g, ' ').trim() || '';
        const published = entry.getElementsByTagName('published')[0]?.textContent || '';

        const authors = Array.from(entry.getElementsByTagName('author')).map(
            (a) => a.getElementsByTagName('name')[0]?.textContent || ''
        );

        const categories = Array.from(entry.getElementsByTagName('category')).map(
            (c) => c.getAttribute('term')
        );

        // Convert arxiv abs URL to PDF URL
        const pdfUrl = id.replace('/abs/', '/pdf/');

        return {
            id,
            title,
            summary,
            published: published.split('T')[0],
            authors,
            categories,
            url: id,
            pdfUrl,
        };
    });
}
