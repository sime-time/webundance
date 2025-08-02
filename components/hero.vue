<script setup lang="ts">
function scrollDown() {
	const nextSection = document.getElementById("pain-section");
	nextSection?.scrollIntoView({ behavior: "smooth" });
}
</script>

<template>
	<section class="relative bg-gradient-to-b from-white to-primary-100 flex justify-center items-center h-[75vh]">
		<div class="container mx-auto max-w-3xl text-center flex flex-col gap-3 px-4 md:px-0 items-center">
			<h1 class="text-4xl lg:text-6xl font-bold">
				Websites made for <span class="text-primary">Booking & Scheduling</span>
			</h1>
			<p class="text-base lg:text-2xl max-w-lg opacity-90">
				Done-for-you booking and payment systems for busy fitness & service business owners.
			</p>
			<div class="flex gap-5 justify-center mt-4">
				<UButton to="/contact" size="xl">
					Get Your System
				</UButton>
			</div>
			<div class=" absolute bottom-2 animate-bounce mt-8 opacity-80">
				<UButton class="w-fit rounded-full p-3 cursor-pointer" color="primary" variant="soft" @click="scrollDown">
					<UIcon name="i-lucide-arrow-down" class="text-2xl" />
				</UButton>
			</div>
		</div>
	</section>
</template>
