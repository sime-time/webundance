import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
	compatibilityDate: "2024-11-01",
	devtools: { enabled: true },
	css: ["~/assets/css/main.css"],
	modules: [
		"@nuxt/ui",
		"@nuxt/eslint",
		"motion-v/nuxt",
		"@nuxt/scripts",
	],
	vite: {
		plugins: [tailwindcss()],
	},
	eslint: {
		config: {
			standalone: false,
		},
	},
	ui: {
		colorMode: false,
	},
	fonts: {
		defaults: {
			weights: [400, 600, 700],
		},
	},
	app: {
		head: {
			title: "Webundance",
			htmlAttrs: {
				lang: "en",
			},
		},
	},
});
