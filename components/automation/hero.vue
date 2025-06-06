<template>
	<HeroLayout>
		<h1 class="text-4xl lg:text-6xl font-bold ">
			Automate the <span class="text-primary">Grind</span>
		</h1>
		<p class="text-xl lg:text-2xl">
			Stop wasting time on repetitive tasks. <br>Focus on what you love.
		</p>
		<div class="flex flex-col md:flex-row gap-5 items-center justify-center mt-4">
			<UButton to="/contact" size="xl">
				Automate My Business
			</UButton>
			<UButton
				to="/book-call"
				size="xl"
				variant="outline"
				class="bg-white"
			>
				Free Walkthrough
			</UButton>
		</div>
	</HeroLayout>
</template>
