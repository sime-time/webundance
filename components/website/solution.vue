<script setup lang="ts">
const solutions = [
	{
		id: 1,
		icon: "lucide:search-code",
		text: "SEO Friendly",
		list: [
			"Clear page structure",
			"Easier to find on Google",
			"Clean, crawlable code",
		],
	},
	{
		id: 2,
		icon: "lucide:tablet-smartphone",
		text: "Mobile-First",
		list: [
			"Responsive on all devices",
			"Modern, professional design",
			"Better user experience",
		],
	},
	{
		id: 3,
		icon: "lucide:zap",
		text: "Lightning Fast",
		list: [
			"Loads in seconds",
			"Built with modern tech",
			"No bloated add-ons",
		],
	},
	{
		id: 4,
		icon: "lucide:mail",
		text: "Contact Forms",
		list: [
			"Customers reach you fast",
			"Automated email follow-ups",
			"Connects with your tools",
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
				Clean, fast, responsive website designed to convert visitors into leads.
			</p>
			<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-4">
				<div v-for="solution in solutions" :key="solution.id">
					<SolutionCard :icon="solution.icon" :title="solution.text" :list="solution.list" />
				</div>
			</div>
		</div>
	</section>
</template>
