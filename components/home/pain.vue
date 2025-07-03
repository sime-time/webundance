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
		icon: "lucide:loader",
		text: "Slow loading and frustrating to update?",
	},
	{
		id: 4,
		icon: "lucide:user-round-x",
		text: "Losing customers to competitors?",
	},
];
</script>

<template>
	<section id="pain-section" class="bg-primary-100 flex flex-col items-center justify-between gap-8 py-32 px-6">
		<div class="container  mx-auto max-w-5xl text-center flex flex-col gap-3">
			<h1 class="text-3xl lg:text-5xl font-bold">
				Your Website Should <span class="underline underline-offset-5">Make You Money</span>
			</h1>
			<p class="text-xl lg:text-2xl mt-2">
				Does your website sound familiar?
			</p>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
				<div v-for="problem in problems" :key="problem.id">
					<ProblemCard :icon="problem.icon" :description="problem.text" />
				</div>
			</div>
		</div>
		<UButton to="/contact" size="xl">
			Solve these problems
			<UIcon name="lucide:arrow-right" class="h-4 w-4" />
		</UButton>
	</section>
</template>
