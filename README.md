# Simple blog on svelte kit

It's frontend part of my simple blog was written on svelte kit framework.

## Clone project

If you have git on your computer, you can clone my projects by that:

```bash
git clone https://github.com/mikaaaa117/simple-blog-sveltekit.git
```

## Notice
It's a fullstack application and without server It will not work fine by default. You need to replace request links in `src/routes/+page.ts` and `src/routes/[id]/+page.ts`

## Developing

Once you've cloned the project, You need to install dependencies with `npm install` (or `pnpm install` or `yarn`), then start a development server:

```bash
# Install dependencies
npm install

# Start the server and open the app in a new browser tab
npm run dev --open
```

## Building

To create a production version of app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.
