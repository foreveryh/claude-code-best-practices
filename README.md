# deeptoai

This is a Next.js application generated with
[Create Fumadocs](https://github.com/fuma-nama/fumadocs).

Run development server:

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open http://localhost:3000 with your browser to see the result.

## Explore

In the project, you can see:

- `lib/source.ts`: Code for content source adapter, [`loader()`](https://fumadocs.dev/docs/headless/source-api) provides the interface to access your content.
- `app/layout.config.tsx`: Shared options for layouts, optional but preferred to keep.

| Route                     | Description                                            |
| ------------------------- | ------------------------------------------------------ |
| `app/(home)`              | The route group for your landing page and other pages. |
| `app/docs`                | The documentation layout and pages.                    |
| `app/api/search/route.ts` | The Route Handler for search.                          |

## Content Management

This project includes a comprehensive content management system:

### Scripts

- `npm run changelog add` - Add new content publication to changelog
- `npm run changelog stats` - View changelog statistics
- `npm run recent-posts add <path> <lang>` - Add article to recent posts
- `npm run recent-posts list` - List current recent posts
- `npm run update-indexes` - Update content indexes

### Content Production Workflow

1. **Content Acquisition**: Download content using Jina Reader API
2. **Resource Processing**: Localize images and assets
3. **Content Optimization**: Clean and format content
4. **Multi-language Support**: Create EN/ZH versions
5. **Publishing**: Update changelog and indexes

See `CHANGELOG.md` for publication history and `CHANGELOG_TEMPLATE.md` for entry format.

### Fumadocs MDX

A `source.config.ts` config file has been included, you can customise different options like frontmatter schema.

Read the [Introduction](https://fumadocs.dev/docs/mdx) for further details.

## Learn More

To learn more about Next.js and Fumadocs, take a look at the following
resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js
  features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Fumadocs](https://fumadocs.vercel.app) - learn about Fumadocs
