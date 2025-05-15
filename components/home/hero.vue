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
		<div class="animate-bounce mt-8">
			<UBadge class="w-fit rounded-full p-3" color="primary" variant="soft">
				<UIcon name="i-lucide-arrow-down" class="text-2xl" />
			</UBadge>
		</div>
	</HeroLayout>
</template>
