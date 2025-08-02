<script setup lang="ts">
import { UCard } from "#components";
import { motion } from "motion-v";

defineProps<{
	icon: string;
	title: string;
	list?: string[];
	description?: string;
}>();
const MotionCard = motion.create(UCard);
</script>

<template>
	<MotionCard
		:initial="{ opacity: 0, x: 40 }"
		:while-in-view="{ opacity: 1, x: 0 }"
		:viewport="{ once: true, amount: 0.7 }"
		:transition="{ duration: 0.8, ease: 'easeOut' }"
		class="shadow-md bg-white h-full"
	>
		<div class="flex flex-col items-start gap-1 justify-between">
			<div class="flex items-center gap-3 ">
				<UBadge color="success" size="xl" variant="soft" class="text-4xl py-2">
					<UIcon :name="icon" />
				</UBadge>

				<h2 class="text-xl font-semibold tracking-tight text-start">
					{{ title }}
				</h2>
			</div>

			<div v-if="description">
				<p>{{ description }}</p>
			</div>

			<div v-if="list">
				<ul class="space-y-2 mt-4 mb-2 text-start">
					<li v-for="(item, index) in list" :key="index">
						<div class="flex items-start">
							<UIcon name="i-lucide-dot" class="text-2xl" />
							<span>{{ item }}</span>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</MotionCard>
</template>
