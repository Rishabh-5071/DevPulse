const targetUrl = 'https://export.arxiv.org/api/query?search_query=cat:cs.AI&start=0&max_results=2';
const url = `https://api.codetabs.com/v1/proxy?quest=${targetUrl}`;

fetch(url)
    .then(r => r.text())
    .then(t => console.log(t.substring(0, 500)))
    .catch(console.error);
