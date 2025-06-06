<script setup lang="ts">
import { UCard } from "#components";
import { motion } from "motion-v";

defineProps<{
	icon: string;
	description: string;
}>();

const MotionCard = motion.create(UCard);
</script>

<template>
	<MotionCard
		:initial="{ opacity: 0, x: 40 }"
		:while-in-view="{ opacity: 1, x: 0 }"
		:viewport="{ once: true, amount: 0.7 }"
		:transition="{ duration: 0.8, ease: 'easeOut' }"
		class="shadow-md "
	>
		<div class="flex items-center gap-4 text-start">
			<UBadge color="error" variant="soft" class="rounded-xl p-2 bg-error-100">
				<UIcon :name="icon" class="text-4xl text-error" />
			</UBadge>
			<p class="text-xl font-semibold">
				{{ description }}
			</p>
		</div>
	</MotionCard>
</template>
