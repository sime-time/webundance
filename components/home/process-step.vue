<script setup lang="ts">
defineProps<{
	id: number;
	title: string;
	description: string;
	icon: string;
}>();
</script>

<template>
	<div class="flex flex-col items-center gap-3 px-10 md:px-0">
		<div class="rounded-full size-20 border-4 border-primary bg-neutral-50">
			<UIcon :name="icon" class="text-5xl text-primary relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
		</div>
		<h3 class="text-2xl md:text-3xl font-semibold">
			{{ id }}. {{ title }}
		</h3>
		<p class="text-xl text-center">
			{{ description }}
		</p>
	</div>
</template>
