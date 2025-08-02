<script setup lang="ts">
import { motion } from "motion-v";

defineProps<{
	id: number;
	title: string;
	description: string;
	icon: string;
}>();
</script>

<template>
	<motion.div
		:initial="{ opacity: 0, y: 40 }"
		:while-in-view="{ opacity: 1, y: 0 }"
		:viewport="{ once: true, amount: 0.8 }"
		:transition="{ duration: 0.8, ease: 'easeOut' }"
		class="flex flex-col items-center gap-3 px-8 md:px-0"
	>
		<div class="rounded-full size-20 border-4 border-primary bg-transparent">
			<UIcon :name="icon" class="text-5xl text-primary relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
		</div>
		<h2 class="text-2xl md:text-3xl font-semibold">
			{{ id }}. {{ title }}
		</h2>
		<p class="text-xl text-center">
			{{ description }}
		</p>
	</motion.div>
</template>
