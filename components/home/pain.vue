<script setup lang="ts">
const problems = [
	{
		id: 1,
		icon: "lucide:user-x",
		text: "Members forgetting to pay?",
	},
	{
		id: 2,
		icon: "lucide:circle-help",
		text: "Losing track of who's already paid?",
	},
	{
		id: 3,
		icon: "lucide:message-circle-x",
		text: "No one wants to talk about money?",
	},
	{
		id: 3,
		icon: "lucide:file-pen",
		text: "Writing everything on paper?",
	},

];
</script>

<template>
	<section class="bg-primary-100 flex flex-col items-center justify-between gap-8 py-32 px-6">
		<div class="container  mx-auto max-w-5xl text-center flex flex-col gap-3">
			<h1 class="text-3xl lg:text-5xl font-bold">
				You're a Coach, <span class="underline underline-offset-5">Not a Bill Collector</span>
			</h1>
			<p class="text-xl lg:text-2xl mt-2">
				Tired of these problems?
			</p>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
				<div v-for="problem in problems" :key="problem.id">
					<ProblemCard :icon="problem.icon" :description="problem.text" />
				</div>
			</div>
		</div>
		<UButton to="/contact" size="xl">
			Fix This Now
			<UIcon name="lucide:arrow-right" class="h-4 w-4" />
		</UButton>
	</section>
</template>
