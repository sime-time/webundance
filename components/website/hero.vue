<template>
	<HeroLayout>
		<h1 class="text-4xl lg:text-6xl font-bold">
			Your website's outdated. <span class="text-primary">Customers notice.</span>
		</h1>
		<p class="text-xl lg:text-2xl px-3 md:px-0">
			Website redesigns for businesses in Indiana. Clean. Fast. Mobile-first.
		</p>
		<div class="flex flex-col md:flex-row gap-5 items-center justify-center mt-4">
			<UButton to="/contact" size="xl">
				Upgrade My Website
			</UButton>
			<UButton
				to="/book-call"
				size="xl"
				variant="outline"
				class="bg-white"
			>
				Free Website Consultation
			</UButton>
		</div>
	</HeroLayout>
</template>
