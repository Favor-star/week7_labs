## 1.What makes a page a good candidate for getStaticProps versus getServerSideProps?

Here are some of the key factors that makes a page a good candidate for `getStaticProps`:

- **Static Content**: The page content does not change frequently or is not user-specific. This includes blog posts, documentation, product listings, etc.
- **Performance**: The page can be pre-rendered at build time, which improves performance and reduces server load.
- **SEO Benefits**: Pre-rendered pages are better for SEO since they can be indexed by search engines more effectively.
- **Data Fetching**: The data required for the page can be fetched at build time, allowing for faster page loads and a better user experience.

Here are some of the key factors that makes a page a good candidate for `getServerSideProps`:

- **Dynamic Content**: The page content changes frequently or is user-specific, such as user profiles, dashboards, or real-time data.
- **Authentication**: The page requires user authentication or personalized data that cannot be pre-rendered at build time.
- **Real-time Data**: The page needs to fetch data that is updated frequently or needs to be fetched on each request, such as stock prices, weather updates, or live feeds.
- **SEO Considerations**: While server-side rendering can also be beneficial for SEO, it may not be as effective as static generation for pages that do not change often.

## 2. How does ISR differ from traditional SSG?

Incremental Static Regeneration (ISR) allows you to update static pages after the site has been built, without needing to rebuild the entire site. This is different from traditional Static Site Generation (SSG), where pages are generated at build time and remain static until the next build.

## 3. What happens during fallback states?

During fallback states, when a page is requested that has not been generated yet, Next.js will serve a fallback version of the page while it generates the actual page in the background. This allows users to see a loading state or a placeholder while the new page is being built. Once the page is generated, it will be cached and served for subsequent requests. This happens when using `getStaticPaths` with the `fallback` option set to `true` or `'blocking'`. 

- If the `fallback` option is set to `true`, the user will see a loading state until the page is generated.

- If it is set to `'blocking'`, the user will wait for the page to be generated before it is served.

- On other hand, if the `fallback` option is set to `false`, Next.js will return a 404 error for any paths that have not been generated yet, or have been included in paths to be prerendered initially.
