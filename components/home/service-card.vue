<script setup lang="ts">
import { UCard } from "#components";
import { motion } from "motion-v";

const MotionCard = motion.create(UCard);

const list = [
	{ label: "Built to convert", icon: "i-lucide-target" },
	{ label: "SEO-optimized", icon: "i-lucide-search" },
	{ label: "Blazing fast", icon: "i-lucide-zap" },
	{ label: "Secure and reliable", icon: "i-lucide-shield-check" },
	{ label: "Easy to update", icon: "i-lucide-edit" },
	{ label: "Mobile-first design", icon: "i-lucide-smartphone" },
	{ label: "Analytics included", icon: "i-lucide-bar-chart-2" },
	{ label: "You own the code", icon: "i-lucide-code" },
	{ label: "Hosting included", icon: "i-lucide-server" },
	{ label: "24/7 support", icon: "i-lucide-life-buoy" },
	{ label: "No hidden fees", icon: "i-lucide-badge-dollar-sign" },
	{ label: "Built in the USA", icon: "i-lucide-flag" },
];
</script>

<template>
	<MotionCard
		:initial="{ opacity: 0, x: -40 }"
		:while-in-view="{ opacity: 1, x: 0 }"
		:viewport="{ once: true, amount: 0.7 }"
		:transition="{ duration: 0.8, ease: 'easeOut' }"
		class="shadow-md w-11/12 md:w-fit"
	>
		<div class="flex flex-col items-start md:items-center gap-1 p-4 justify-between">
			<div class="flex flex-col md:flex-row gap-4 w-full justify-center items-center">
				<UBadge size="xl" variant="soft" class="text-4xl py-2">
					<UIcon name="i-lucide-gem" />
				</UBadge>
				<h2 class="text-2xl font-semibold tracking-tight text-start">
					What You Get
				</h2>
			</div>

			<ul class="grid grid-cols-1 md:grid-cols-2 my-9 gap-5 gap-x-18 w-full">
				<li v-for="(item, index) in list" :key="index" class="">
					<div class="flex items-center font-semibold gap-2">
						<UIcon :name="item.icon" class="text-2xl text-primary" />
						<span>{{ item.label }}</span>
					</div>
				</li>
			</ul>

			<UButton to="/contact" size="xl" block>
				Start Your Project
				<UIcon name="lucide:arrow-right" class="size-4" />
			</UButton>
		</div>
	</MotionCard>
</template>
