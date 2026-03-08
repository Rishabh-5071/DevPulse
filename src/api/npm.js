// npm Registry API — free, no auth needed

export async function fetchNpmDownloads(packages) {
    const results = await Promise.all(
        packages.map(async (pkg) => {
            try {
                const res = await fetch(
                    `https://api.npmjs.org/downloads/point/last-week/${encodeURIComponent(pkg)}`
                );
                if (!res.ok) return { package: pkg, downloads: 0 };
                const data = await res.json();
                return { package: data.package, downloads: data.downloads };
            } catch {
                return { package: pkg, downloads: 0 };
            }
        })
    );
    return results;
}

// Pre‐configured framework matchups
export const FRAMEWORK_MATCHUPS = [
    {
        title: 'Frontend Frameworks',
        packages: [
            { name: 'react', label: 'React', color: '#61dafb' },
            { name: 'vue', label: 'Vue', color: '#41b883' },
            { name: '@angular/core', label: 'Angular', color: '#dd0031' },
            { name: 'svelte', label: 'Svelte', color: '#ff3e00' },
        ],
    },
    {
        title: 'Meta Frameworks',
        packages: [
            { name: 'next', label: 'Next.js', color: '#ffffff' },
            { name: 'nuxt', label: 'Nuxt', color: '#00dc82' },
            { name: '@sveltejs/kit', label: 'SvelteKit', color: '#ff3e00' },
            { name: '@remix-run/react', label: 'Remix', color: '#3992ff' },
        ],
    },
    {
        title: 'Runtimes',
        packages: [
            { name: 'typescript', label: 'TypeScript', color: '#3178c6' },
            { name: 'esbuild', label: 'esbuild', color: '#ffcf00' },
            { name: 'vite', label: 'Vite', color: '#646cff' },
            { name: 'webpack', label: 'Webpack', color: '#8dd6f9' },
        ],
    },
    {
        title: 'CSS / UI',
        packages: [
            { name: 'tailwindcss', label: 'Tailwind', color: '#06b6d4' },
            { name: 'bootstrap', label: 'Bootstrap', color: '#7952b3' },
            { name: '@mui/material', label: 'MUI', color: '#007fff' },
            { name: 'styled-components', label: 'Styled', color: '#db7093' },
        ],
    },
];
