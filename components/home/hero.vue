<script setup lang="ts">
function scrollToFaq() {
	document.getElementById("faq-section")?.scrollIntoView({
		behavior: "smooth",
	});
}
</script>

<template>
	<section class="bg-gradient-to-b from-white to-primary-100 flex justify-center pt-40 pb-32">
		<div class="container mx-auto max-w-5xl text-center flex flex-col gap-6">
			<h1 class="text-4xl lg:text-6xl font-bold">
				Fast websites.
				AI automation.<br>
				<span class="text-primary">Less busywork.</span>
			</h1>
			<p class="text-xl lg:text-2xl px-3 md:px-0">
				We build tools that save time and win customers.
			</p>
			<div class="flex gap-5 justify-center">
				<UButton to="/contact" size="xl">
					Get Started
					<UIcon name="lucide:arrow-right" class="h-4 w-4" />
				</UButton>
				<UButton
					to="#"
					size="xl"
					variant="outline"
					class="bg-neutral-50"
					@click="scrollToFaq"
				>
					Learn More
				</UButton>
			</div>
		</div>
	</section>
</template>
