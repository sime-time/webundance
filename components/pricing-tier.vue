<script setup lang="ts">
defineProps<{
	icon: string;
	title: string;
	description: string;
	price: string;
	recurring: string;
	highlighted: boolean;
	features: string[];
}>();
</script>

<template>
	<UCard>
		<UIcon :name="icon" />
		<h2>{{ title }}</h2>
		<p>{{ description }}</p>

		<p>
			<span>${{ price }}</span>
			<span>{{ recurring }}</span>
		</p>

		<!-- Button here -->
		<slot />

		<h3>Features:</h3>
		<ul v-for="(feature, index) in features" :key="index">
			<li>{{ feature }}</li>
		</ul>
	</UCard>
</template>
