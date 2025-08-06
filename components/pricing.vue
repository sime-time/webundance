<script setup lang="ts">
const tiers = [
	{
		id: 1,
		icon: "lucide:rocket",
		title: "Launch",
		description: "Basic website & hosting",
		price: "$99",
		recurring: "per month",
		buttonText: "Get Started",
		highlighted: false,
		features: [
			"Mobile-Friendly Website",
			"Fast Page Load Speed",
			"Unlimited Updates",
			"Contact Page",
			"SEO",
		],
	},
	{
		id: 2,
		icon: "lucide:users-round",
		title: "Partnership",
		description: "Website with online booking or automated payments",
		price: "$499",
		recurring: "+$99 per month",
		buttonText: "Work with Me",
		highlighted: true,
		features: [
			"Everything in Launch",
			"Booking & Scheduling",
			"Automated payments",
			"SMS Text Reminders",
			"Business Domain Email",
			"Google Maps Integration",
			"Import Highest Google Reviews",
		],
	},
	{
		id: 3,
		icon: "lucide:building",
		title: "Premium",
		description: "For more complex businesses",
		price: "$8,000",
		recurring: "per year",
		buttonText: "Get Premium",
		highlighted: false,
		features: [
			"Everything in Partnership",
			"AI Automation",
			"Content Mangagement System",
			"Custom API Integrations",
			"Voiced AI Appointment Setter",
		],
	},
];
</script>

<template>
	<section id="pricing" class="bg-neutral-100 flex justify-center py-32">
		<div class="container mx-auto max-w-6xl text-center flex flex-col gap-3 px-5 md:px-0">
			<h1 class="text-3xl lg:text-5xl font-bold">
				Pricing
			</h1>
			<p class="text-xl lg:text-2xl mb-4">
				Affordable, transparent options for every stage of your business.
			</p>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
				<div v-for="tier in tiers" :key="tier.id">
					<PricingTier v-bind="tier" />
				</div>
			</div>
		</div>
	</section>
</template>
