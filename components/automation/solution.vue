<script setup lang="ts">
const solutions = [
	{
		id: 1,
		icon: "lucide:mail",
		title: "Emails & SMS Texts",
		list: [
			"Reminders to reduce no-shows",
			"Automated follow-ups",
			"Lead qualification",
			"Offer promos",
		],
	},
	{
		id: 2,
		icon: "lucide:calendar-days",
		title: "Booking & Payments",
		list: [
			"24/7 online booking",
			"Booking flow, branded to you",
			"Payment collection and subscriptions",
			"Syncs with your calendar availability",
		],
	},
	{
		id: 3,
		icon: "lucide:file-check",
		title: "Digital Forms & Waivers",
		list: [
			"Branded digital forms",
			"E-signatures for waivers and agreements",
			"Document organization",
			"Replace all paper forms",
		],
	},
];
</script>

<template>
	<section class="bg-neutral-200 flex justify-center py-32">
		<div class="container mx-auto  text-center flex flex-col gap-3 px-5 md:px-0">
			<h1 class="text-3xl lg:text-5xl font-bold">
				Your Solution
			</h1>
			<p class="text-xl lg:text-2xl">
				Custom-built automation systems tailored to your business needs.
				<br>
				Here's what can be automated:
			</p>
			<div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4">
				<div v-for="solution in solutions" :key="solution.id">
					<SolutionCard :icon="solution.icon" :title="solution.title" :list="solution.list" />
				</div>
			</div>
		</div>
	</section>
</template>
