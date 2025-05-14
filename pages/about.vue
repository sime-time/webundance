<script setup lang="ts">
const items = [
	"/images/simeon-suit.png",
	"/images/simeon-boxing.png",
	"/images/simeon-nature.png",
];
</script>

<template>
	<main class="py-16 md:py-32 bg-gradient-to-t from-primary-100 to-white">
		<div class="container mx-auto max-w-5xl px-6 md:px-0">
			<div class="grid grid-cols-1 md:grid-cols-2 gap-10">
				<section class="text-lg md:text-xl flex flex-col gap-6">
					<h1 class="font-bold text-3xl md:text-4xl">
						I build for local businesses
					</h1>
					<p>
						I'm Simeon Dunn. I build simple tools that save time and make money. I've helped boxing gym owners, movers, and creators get it together online.
					</p>
					<p>
						After watching small businesses struggle with overly complex software and inefficient processes, I decided to focus on building straightforward solutions that actually work for real people.
					</p>
					<p>
						My approach is simple: understand exactly what you need, build it without unnecessary complexity, and make sure you know how to use it when I'm done.
					</p>
					<UButton to="/contact" class="w-fit" size="xl">
						Work With Me
					</UButton>
				</section>
				<section>
					<UCarousel
						v-slot="{ item }"
						auto-height
						arrows
						dots
						:items="items"
						class="w-full max-w-xs mx-auto"
					>
						<img :src="item" class="rounded-lg">
					</UCarousel>
				</section>
			</div>
		</div>
	</main>
</template>
