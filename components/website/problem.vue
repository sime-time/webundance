<script setup lang="ts">
const problems = [
	{
		id: 1,
		icon: "lucide:screen-share-off",
		text: "Outdated, hard-to-use?",
	},
	{
		id: 2,
		icon: "lucide:ban",
		text: "Doesn't work well on phones?",
	},
	{
		id: 3,
		icon: "lucide:clock-fading",
		text: "Slow loading and frustrating to update?",
	},
	{
		id: 4,
		icon: "lucide:user-round-x",
		text: "Losing potential customers to competitors?",
	},
];
</script>

<template>
	<section class="bg-neutral-900 flex justify-center py-32">
		<div class="container mx-auto max-w-5xl text-white text-center flex flex-col gap-3 px-5 md:px-0">
			<h1 class="text-3xl lg:text-5xl font-bold">
				The Problem
			</h1>
			<p class="text-xl lg:text-2xl">
				Does your website sound similar?
			</p>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
				<div v-for="problem in problems" :key="problem.id">
					<WebsiteProblemCard :icon="problem.icon" :description="problem.text" />
				</div>
			</div>
		</div>
	</section>
</template>
