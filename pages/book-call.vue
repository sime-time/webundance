<script setup lang="ts">
const options = {
	url: "https://calendly.com/1simeondunn/30min",
	pageSettings: {
		primaryColor: "10b981",
	},
};
</script>

<template>
	<main class="h-screen">
		<CalendlyInlineWidget v-bind="options" style="height: 100vh" />
	</main>
</template>
