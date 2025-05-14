<template>
	<section class="bg-white flex justify-center py-32">
		<div class="container mx-auto text-center flex flex-col gap-4 px-5 md:px-0">
			<h1 class="text-3xl lg:text-5xl font-bold">
				Pricing
			</h1>
			<p class="text-xl lg:text-2xl">
				Custom solutions available based on your specific needs
			</p>
			<p class="text-4xl font-bold text-primary">
				Starting at $600
			</p>
			<div class="flex flex-col md:flex-row gap-5 items-center justify-center mt-3">
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
		</div>
	</section>
</template>
