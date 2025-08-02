<script setup lang="ts">
const solutions = [
	{
		id: 1,
		icon: "lucide:tablet-smartphone",
		title: "Mobile-First",
		list: [
			"Responsive on all devices",
			"Modern, professional design",
			"Better user experience",
		],
	},
	{
		id: 2,
		icon: "lucide:zap",
		title: "Lightning Fast",
		list: [
			"Loads in seconds",
			"Built with modern tech",
			"No bloated add-ons",
		],
	},
	{
		id: 3,
		icon: "lucide:calendar-days",
		title: "Booking & Payments",
		list: [
			"24/7 online booking, branded to you",
			"Payment collection and subscriptions",
			"Syncs with your calendar availability",
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
			"Clear page structure",
			"Easier to find on Google",
			"Clean, crawlable code",
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
				Your Solution
			</h1>
			<p class="text-xl lg:text-2xl">
				Custom-built website designed for your business needs.
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
