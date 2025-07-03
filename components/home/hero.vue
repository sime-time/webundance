<script setup lang="ts">
function scrollDown() {
	const nextSection = document.getElementById("pain-section");
	nextSection?.scrollIntoView({ behavior: "smooth" });
}
</script>

<template>
	<HeroLayout>
		<h1
			class="text-4xl lg:text-6xl font-bold"
		>
			Professional Websites.<br><span class="text-primary">Personal Service.</span>
		</h1>
		<p class="text-base lg:text-2xl max-w-lg opacity-80">
			We handle the tech. You get a fast, flexible site designed to grow.
		</p>
		<div class="flex gap-5 justify-center mt-4">
			<UButton to="/contact" size="xl">
				Get Free Consultation
			</UButton>
		</div>
		<div class=" absolute bottom-2 animate-bounce mt-8 opacity-80">
			<UButton class="w-fit rounded-full p-3 cursor-pointer" color="primary" variant="soft" @click="scrollDown">
				<UIcon name="i-lucide-arrow-down" class="text-2xl" />
			</UButton>
		</div>
	</HeroLayout>
</template>
