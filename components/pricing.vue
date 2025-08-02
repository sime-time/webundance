<script setup lang="ts">
const tiers = [
	{
		id: 1,
		icon: "",
		title: "Basic",
		description: "",
		price: "250",
		recurring: "/month",
		highlighted: false,
		features: [],
	},
	{
		id: 2,
		icon: "",
		title: "Partnership",
		description: "",
		price: "500",
		recurring: "+5% revenue share",
		highlighted: true,
		features: [],
	},
	{
		id: 3,
		icon: "",
		title: "Premium",
		description: "",
		price: "5,000",
		recurring: "/year",
		highlighted: false,
		features: [],
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
				Simple, transparent pricing.
			</p>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
				<div v-for="tier in tiers" :key="tier.id">
					<PricingTier v-bind="tier" />
				</div>
			</div>
		</div>
	</section>
</template>
