<script setup lang="ts">
import { motion } from "motion-v";
</script>

<template>
	<section class="bg-gradient-to-b from-white to-primary-100 flex justify-center pt-40 pb-32">
		<motion.div
			class="container mx-auto max-w-5xl text-center flex flex-col gap-3"
			:initial="{ opacity: 0, y: 40 }"
			:animate="{ opacity: 1, y: 0 }"
			:transition="{ duration: 0.8, ease: 'easeOut' }"
		>
			<slot />
		</motion.div>
	</section>
</template>
