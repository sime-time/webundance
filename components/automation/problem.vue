<script setup lang="ts">
const problems = [
	{
		id: 1,
		icon: "lucide:phone-missed",
		text: "Constantly chasing leads, manually answering emails and phone calls?",
	},
	{
		id: 2,
		icon: "lucide:calendar-x-2",
		text: "Double bookings and no-shows?",
	},
	{
		id: 3,
		icon: "lucide:file-x",
		text: "Struggle with invoicing or collecting waivers?",
	},
	{
		id: 4,
		icon: "lucide:user-round-pen",
		text: "Manually tracking customer and employee information?",
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
				Sound familiar?
			</p>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
				<div v-for="problem in problems" :key="problem.id">
					<ProblemCard :icon="problem.icon" :description="problem.text" />
				</div>
			</div>
		</div>
	</section>
</template>
