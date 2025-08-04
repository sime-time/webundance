<script setup lang="ts">
const problems = [
	{
		id: 1,
		icon: "lucide:screen-share-off",
		text: "Outdated and unprofessional design?",
	},
	{
		id: 2,
		icon: "lucide:smartphone",
		text: "Clients can't book easily on their phones?",
	},
	{
		id: 3,
		icon: "lucide:smartphone-nfc",
		text: "Manually texting appointment reminders?",
	},
	{
		id: 4,
		icon: "lucide:calendar-x-2",
		text: "Double bookings and no-shows?",
	},
	{
		id: 5,
		icon: "lucide:phone-missed",
		text: "Answering calls and DMs all day?",
	},
	{
		id: 6,
		icon: "lucide:user-round-x",
		text: "Losing customers to competitors?",
	},
	{
		id: 7,
		icon: "lucide:file-x",
		text: "Waivers and forms lost or forgotten?",
	},
	{
		id: 8,
		icon: "lucide:user-round-pen",
		text: "Manually tracking customer information?",
	},
];
</script>

<template>
	<section id="pain-section" class="bg-primary-100 flex flex-col items-center justify-between gap-8 py-32 px-6">
		<div class="container mx-auto max-w-5xl text-center flex flex-col gap-3">
			<h1 class="text-3xl lg:text-5xl font-bold">
				Your Website Should <span class="underline underline-offset-5">Make You Money</span>
			</h1>
			<p class="text-xl lg:text-2xl mt-2">
				Sound familiar?
			</p>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
				<div v-for="problem in problems" :key="problem.id">
					<ProblemCard :icon="problem.icon" :description="problem.text" />
				</div>
			</div>
		</div>
		<UButton to="/contact" size="xl">
			Solve These Problems
			<UIcon name="lucide:arrow-right" class="h-4 w-4" />
		</UButton>
	</section>
</template>
