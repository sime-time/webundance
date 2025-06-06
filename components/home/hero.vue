<script setup lang="ts">
const nextSection = document.getElementById("pain-section");
const scrollDown = () => nextSection?.scrollIntoView({ behavior: "smooth" });
</script>

<template>
	<HeroLayout>
		<h1
			class="text-4xl lg:text-6xl font-bold"
		>
			Run Your Gym on
			<span class="text-primary">Auto-Pilot.</span>
		</h1>
		<p class="text-base lg:text-2xl max-w-lg">
			Automate signups, waivers, and payments.<br>
			No more texts. No more chasing. No more stress.
		</p>
		<div class="flex gap-5 justify-center mt-4">
			<UButton to="/book-call" size="xl">
				Set Up Your System
			</UButton>
		</div>
		<div class=" absolute bottom-2 animate-bounce mt-8 opacity-80">
			<UButton class="w-fit rounded-full p-3 cursor-pointer" color="primary" variant="soft" @click="scrollDown">
				<UIcon name="i-lucide-arrow-down" class="text-2xl" />
			</UButton>
		</div>
	</HeroLayout>
</template>
