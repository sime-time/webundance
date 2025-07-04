<script setup lang="ts">
const options = {
	url: "https://calendly.com/1simeondunn/30min",
	pageSettings: {
		primaryColor: "10b981",
	},
};

useSeoMeta({
	title: "Webundance | Book a Call",
	ogTitle: "Book a Call",
	description: "Free website consultation for Indiana businesses",
	ogDescription: "Free website consultation",
	ogImage: "/images/logo.svg",
});
</script>

<template>
	<main class="h-screen">
		<CalendlyInlineWidget v-bind="options" style="height: 100vh" />
	</main>
</template>
