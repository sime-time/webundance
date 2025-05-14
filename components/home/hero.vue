<script setup lang="ts">
import { motion } from "motion-v";
</script>

<template>
	<section class="bg-gradient-to-b from-white to-primary-100 flex justify-center pt-40 pb-32">
		<motion.div
			class="container mx-auto max-w-5xl text-center flex flex-col gap-6"
			:initial="{ opacity: 0, y: 40 }"
			:animate="{ opacity: 1, y: 0 }"
			:transition="{ duration: 0.8, ease: 'easeOut' }"
		>
			<h1
				class="text-4xl lg:text-6xl font-bold"
			>
				Fast websites.
				AI automation.<br>
				<span class="text-primary">Less busywork.</span>
			</h1>
			<p class="text-xl lg:text-2xl px-3 md:px-0">
				We build systems that save time and win customers.
			</p>
			<div class="flex gap-5 justify-center">
				<UButton to="/contact" size="xl">
					Get Started
					<UIcon name="lucide:arrow-right" class="h-4 w-4" />
				</UButton>
				<UButton
					to="/book-call"
					size="xl"
					variant="outline"
					class="bg-white"
				>
					Book a Call
				</UButton>
			</div>
		</motion.div>
	</section>
</template>
