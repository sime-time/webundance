<script setup lang="ts">
import CalCom from "~/components/cal-com.vue";

const calLink = "simeondunn/intro";

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
		<CalCom :cal-link="calLink" brand-color="#10b981" style="height: 100vh" />
	</main>
</template>
