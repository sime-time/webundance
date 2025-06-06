<script setup lang="ts">
import { UCard } from "#components";
import { motion } from "motion-v";

const MotionCard = motion.create(UCard);

const list = [
	{ label: "Online sign-ups", icon: "i-lucide-user-plus" },
	{ label: "Digital waivers", icon: "i-lucide-file-signature" },
	{ label: "Membership subscriptions", icon: "i-lucide-credit-card" },
	{ label: "Walk-in card payments", icon: "i-lucide-wallet" },
	{ label: "Cards charged every month", icon: "i-lucide-calendar-sync" },
	{ label: "SEO-friendly website", icon: "i-lucide-globe" },
	{ label: "Admin dashboard", icon: "i-lucide-layout-dashboard" },
	{ label: "Works on your phone", icon: "i-lucide-smartphone" },
	{ label: "Automated emails", icon: "i-lucide-mail" },
	{ label: "Text alerts", icon: "i-lucide-message-circle" },
	{ label: "QR check-ins", icon: "i-lucide-qr-code" },
	{ label: "No stress", icon: "i-lucide-smile" },
];
</script>

<template>
	<MotionCard
		:initial="{ opacity: 0, x: -40 }"
		:while-in-view="{ opacity: 1, x: 0 }"
		:viewport="{ once: true, amount: 0.7 }"
		:transition="{ duration: 0.8, ease: 'easeOut' }"
		class="shadow-md "
	>
		<div class="flex flex-col items-start md:items-center gap-1 p-4 justify-between">
			<div class="flex flew-row gap-4 w-full justify-center items-center">
				<UBadge size="xl" variant="soft" class="text-4xl py-2">
					<UIcon name="i-lucide-monitor-cog" />
				</UBadge>
				<h2 class="text-2xl font-semibold tracking-tight text-start">
					Your New 24/7 Front Desk
				</h2>
			</div>

			<ul class="grid grid-cols-1 md:grid-cols-2 my-9 gap-5 gap-x-18">
				<li v-for="(item, index) in list" :key="index">
					<div class="flex items-center font-semibold gap-2">
						<UIcon :name="item.icon" class="text-2xl text-primary" />
						<span>{{ item.label }}</span>
					</div>
				</li>
			</ul>

			<UButton to="/contact" size="xl" block>
				Set This Up
				<UIcon name="lucide:arrow-right" class="size-4" />
			</UButton>
		</div>
	</MotionCard>
</template>
