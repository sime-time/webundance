<script setup lang="ts">
const problems = [
	{
		id: 1,
		icon: "lucide:server-off",
		text: "Is your website broken?",
	},
	{
		id: 2,
		icon: "lucide:search-x",
		text: "Not showing up on Google?",
	},
	{
		id: 3,
		icon: "lucide:smartphone",
		text: "Looks bad on mobile?",
	},
	{
		id: 3,
		icon: "lucide:circle-help",
		text: "Hard to navigate?",
	},

];
</script>

<template>
	<section class="bg-neutral-900 flex justify-center py-32">
		<div class="container mx-auto max-w-5xl text-center flex flex-col gap-3 px-5 md:px-0">
			<h1 class="text-3xl lg:text-5xl font-bold text-white ">
				The Problem
			</h1>
			<p class="text-xl lg:text-2xl text-white ">
				Does your website sound similar?
			</p>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
				<div v-for="problem in problems" :key="problem.id">
					<ProblemCard :icon="problem.icon" :description="problem.text" />
				</div>
			</div>
		</div>
	</section>
</template>
