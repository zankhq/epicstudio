import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import NetlifyCMS from "astro-netlify-cms";
import astroI18next from "astro-i18next";
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
	site: "https://zank.studio",
	vite: {
		define: {
			__DATE__: `'${new Date().toISOString()}'`,
		},
	},
	integrations: [
		tailwind(),
		mdx(),
		sitemap(),
		NetlifyCMS({
			config: {
				backend: {
					name: "github",
					repo: "zanhq/astro-starter",
					branch: "main",
					base_url: "https://zank.studio",
					auth_endpoint: "/api/auth",
				},
				media_folder: "public/images",
				public_folder: "/images",
				collections: [
					// Content collections
					{
						name: "posts",
						label: "Portfolio",
						folder: "src/content/portfolio",
						create: true,
						delete: true,
						fields: [],
					},
				],
			},
			disableIdentityWidgetInjection: true,
		}),
		astroI18next(),
		alpinejs(),
	],
});
