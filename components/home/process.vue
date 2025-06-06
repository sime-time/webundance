<script setup lang="ts">
const process = [
	{
		id: 1,
		icon: "i-lucide-compass",
		title: "Discovery",
		description: "We meet. You tell me what's broken. I listen.",
	},
	{
		id: 2,
		icon: "i-lucide-drafting-compass",
		title: "Design",
		description: "I prototype the solution for you to see the vision.",
	},
	{
		id: 3,
		icon: "i-lucide-hammer",
		title: "Develop",
		description: "I build it fast. No bloat. No fluff.",
	},
	{
		id: 4,
		icon: "i-lucide-rocket",
		title: "Deploy",
		description: "Live, tested, and ready. You own it.",
	},
];
</script>

<template>
	<section class="bg-gradient-to-b from-white to-neutral-100/80 flex justify-center py-32">
		<div class="container mx-auto max-w-4xl flex flex-col gap-3">
			<h1 class="text-3xl lg:text-5xl font-bold text-center">
				Our Process
			</h1>
			<p class="text-xl lg:text-2xl text-center mb-4 px-3 md:px-0">
				We follow a lean process with clear steps. Pivot until you're satisfied.
			</p>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-16 mt-4">
				<div v-for="step in process" :key="step.id">
					<HomeProcessStep :id="step.id" :icon="step.icon" :title="step.title" :description="step.description" />
				</div>
			</div>
		</div>
	</section>
</template>
