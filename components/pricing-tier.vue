<script setup lang="ts">
defineProps<{
	icon: string;
	title: string;
	description: string;
	price: string;
	recurring: string;
	buttonText: string;
	highlighted: boolean;
	features: string[];
}>();
</script>

<template>
	<UCard>
		<div class="flex flex-col gap-6 p-1">
			<div class="flex flex-col items-start">
				<UIcon :name="icon" class="text-primary text-3xl mb-2" />
				<h2 class="font-semibold text-xl">
					{{ title }}
				</h2>
				<p class="text-neutral-500">
					{{ description }}
				</p>
			</div>

			<p class="flex flex-col gap-2">
				<span class="text-5xl font-semibold">${{ price }}</span>
				<span class="text-base text-neutral-500">{{ recurring }}</span>
			</p>

			<!-- Button here -->
			<UButton
				:to="highlighted ? '/book-call' : '/contact'"
				size="xl"
				class="justify-center font-semibold"
				:variant="highlighted ? 'solid' : 'soft'"
			>
				{{ buttonText }}
			</UButton>

			<ul class="flex flex-col gap-2">
				<li v-for="(feature, index) in features" :key="index" class="flex items-center gap-2 text-lg">
					<UIcon name="akar-icons:circle-check-fill" class="text-primary" />
					<span>{{ feature }}</span>
				</li>
			</ul>
		</div>
	</UCard>
</template>
