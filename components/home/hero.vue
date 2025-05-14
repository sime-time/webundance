<template>
	<HeroLayout>
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
		<div class="flex gap-5 justify-center mt-4">
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
	</HeroLayout>
</template>
