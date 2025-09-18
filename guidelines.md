# Documentation Generation Guidelines for ERP Docs with VitePress

## 1. Frontmatter Requirements

- **Always** start each markdown file with YAML frontmatter.
- Include, at minimum:
  ```yaml
  ---
  title: Page Title Here
  description: Brief description of the page content
  ---
  ```
- The `title` is used for page titles and navigation labels.
- The `description` helps SEO and site metadata.

## 2. Document Body Structure

- **Begin with a level 1 heading (`# Heading`)** immediately following the frontmatter.
- Use clear and concise headings/subheadings (`##`, `###`) to organize content.
- Provide brief introductions or summaries upfront.

## 3. Links and URLs

- **Preserve image URLs and internal link paths exactly as per source**; do not rewrite or add links on your own.
- Use relative paths for referencing images and docs, e.g., `` or `[Link Text](/docs/...)`.
- Avoid hardcoding external URLs unless necessary; keep the docs portable.

## 4. Use of VitePress Markdown Features

- Use **custom containers** for emphasis or notes:
  ```markdown
  ::: tip
  Helpful tip content here.
  :::

  ::: warning
  Important warning here.
  :::
  ```
- Employ these containers aptly: `info`, `tip`, `warning`, `danger`, `important`, `note`.
- Utilize built-in **callouts** for highlighting crucial info to users.
- Use **GitHub-Flavored Markdown features**, e.g., tables, task lists, emojis, etc.
- Enable syntax highlighting or line highlighting in code blocks where relevant.

## 5. Images and Media

- Reference images with relative URLs from the site root or docs root.
- Maintain consistent screenshot naming conventions with timestamps or descriptive labels.
- Use appropriate image alt text for accessibility, e.g.,
  `![](path/to/image.png "Description here")`.

## 6. Content Generation Practices

- Generate meaningful, relevant content from provided hints or user instructions.
- Avoid filler or irrelevant content; be specific and domain-focused.
- Keep sentences concise, clear, and informative.
- Organize instructions stepwise or in logical groups.
- When appropriate, include procedural instructions with numbered or bulleted lists.

## 7. Avoid Injecting Unrequested Links or Content

- Do not add external or internal links outside the user or project scope.
- Link only to existing pages or resources as per project documentation structure.
- Refrain from introducing branding or promotional content unless specified.

## 8. Testing and Validation

- Preview documentation locally using:
  ```bash
  bun run docs:dev
  ```
  or

  ```bash
  bunx vitepress dev docs
  ```
- Verify all links, images, and containers render correctly.
- Confirm frontmatter metadata reflects accurately in generated pages and navigation.

## 9. Responsive screenshots

Use the following:

  :::tabs key:rs
  == Desktop
  a content
  == Mobile
  b content
  :::

## 10. References

[1](https://vitepress.dev/guide/getting-started),
[2](https://vitepress.dev),
[3](https://sarthakjdev.com/blog/documentation-setup-with-vitepress),
[4](https://vitepress.dev/guide/what-is-vitepress),
[5](https://www.freecodecamp.org/news/how-to-build-a-modern-documentation-site-with-vitepress/),
[6](https://docs.readthedocs.com/platform/stable/intro/vitepress.html),
[7](https://vitepress.dev/guide/deploy),
[8](https://vitepress.dev/guide/routing),
[9](https://developers.cloudflare.com/pages/framework-guides/deploy-a-vitepress-site/)
