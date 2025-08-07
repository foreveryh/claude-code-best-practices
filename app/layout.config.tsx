import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Killer Code Logo"
        >
          <circle cx={12} cy={12} r={12} fill="currentColor" />
        </svg>
        Killer Code
      </>
    ),
  },
  // see https://fumadocs.dev/docs/ui/navigation/links
  links: [
    {
      text: 'Best Practices',
      url: '/docs',
    },
    {
      text: 'Cookbook',
      url: 'https://github.com/foreveryh/claude-code-cookbook',
      external: true,
    },
    {
      text: 'Official Docs',
      url: 'https://claude.ai/code',
      external: true,
    },
    {
      text: 'Build with Claude',
      url: 'https://www.anthropic.com/learn/build-with-claude',
      external: true,
    },
    {
      text: 'Author',
      url: 'https://x.com/Stephen4171127',
      external: true,
    },
  ],
};
