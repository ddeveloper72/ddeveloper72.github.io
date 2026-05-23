import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
    site: 'https://ddeveloper72.github.io',
    integrations: [mdx()],
    markdown: {
        shikiConfig: {
            theme: 'github-light',
            wrap: true
        },
        rehypePlugins: [
            [
                rehypeExternalLinks,
                {
                    target: '_blank',
                    rel: ['noopener', 'noreferrer']
                }
            ]
        ]
    }
});
