<script setup lang="ts">
const solutions = [
	{
		id: 1,
		icon: "lucide:tablet-smartphone",
		title: "Mobile-First",
		list: [
			"Beautiful on all screen sizes",
			"Loads instantly",
			"Modern, professional design",
		],
	},
	{
		id: 2,
		icon: "lucide:badge-dollar-sign",
		title: "Payments & Subscriptions",
		list: [
			"Accept tips and recurring payments",
			"Connects with Square or Stripe accounts",
			"Direct to your bank account",
		],
	},
	{
		id: 3,
		icon: "lucide:calendar-days",
		title: "24/7 Online Booking",
		list: [
			"Custom-branded scheduler",
			"Syncs with your real-time availability",
			"Payment collection and subscriptions",
		],
	},
	{
		id: 4,
		icon: "lucide:mail",
		title: "Emails & SMS Texts",
		list: [
			"Reminders to reduce no-shows",
			"Automated follow-ups",
			"Lead qualification",
		],
	},
	{
		id: 5,
		icon: "lucide:search-code",
		title: "SEO Friendly",
		list: [
			"Bring in new local clients",
			"Easier to find on Google",
			"Clean structure",
		],
	},
	{
		id: 6,
		icon: "lucide:file-check",
		title: "Digital Forms & Waivers",
		list: [
			"Branded digital forms",
			"E-signatures for waivers and agreements",
			"Replace all paper forms",
		],
	},
];
</script>

<template>
	<section class="bg-gradient-to-b from-primary-100 to-neutral flex justify-center py-32">
		<div class="container mx-auto  text-center flex flex-col gap-3 px-5 md:px-0">
			<h1 class="text-3xl lg:text-5xl font-bold">
				Your Booking System, Reimagined
			</h1>
			<p class="text-xl lg:text-2xl">
				A sleek, automated website that saves time and brings in more clients.
			</p>
			<div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4">
				<div v-for="solution in solutions" :key="solution.id">
					<SolutionCard :icon="solution.icon" :title="solution.title" :list="solution.list" />
				</div>
			</div>
			<div class="mt-8">
				<UButton to="/contact" size="xl">
					Get Your Solution
					<UIcon name="lucide:arrow-right" class="h-4 w-4" />
				</UButton>
			</div>
		</div>
	</section>
</template>
