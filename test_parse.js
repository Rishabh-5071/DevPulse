const fs = require('fs');
const { JSDOM } = require('jsdom');

async function test() {
    // How it is currently:
    const query = encodeURIComponent('cat:cs.AI OR cat:cs.LG OR cat:cs.CL');
    const targetUrl = `https://export.arxiv.org/api/query?search_query=${query}&start=0&max_results=10&sortBy=submittedDate&sortOrder=descending`;
    const badUrl = `https://api.codetabs.com/v1/proxy?quest=${targetUrl}`;
    const goodUrl = `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(targetUrl)}`;

    console.log("Fetching BAD...");
    try {
        const r1 = await fetch(badUrl);
        const text1 = await r1.text();
        console.log("BAD length:", text1.length, "Starts:", text1.substring(0, 100).replace(/\n/g, ' '));

        const r2 = await fetch(goodUrl);
        const text2 = await r2.text();
        console.log("GOOD length:", text2.length, "Starts:", text2.substring(0, 100).replace(/\n/g, ' '));

        const dom = new JSDOM('');
        const parser = new dom.window.DOMParser();
        const doc = parser.parseFromString(text2, 'text/xml');
        console.log("Parsed good entries:", doc.getElementsByTagName('entry').length);
        console.log("Parsed bad entries :", parser.parseFromString(text1, 'text/xml').getElementsByTagName('entry').length);
    } catch (e) {
        console.error(e);
    }
}
test();
