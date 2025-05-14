<template>
	<section class="bg-gradient-to-b from-white to-primary-100 flex justify-center pt-40 pb-32">
		<div class="container mx-auto max-w-5xl text-center flex flex-col gap-6 px-2">
			<h1 class="text-4xl lg:text-6xl font-bold">
				Automate the <span class="text-primary">Grind</span>
			</h1>
			<p class="text-xl lg:text-2xl px-3 md:px-0">
				Stop wasting time on repetitive tasks. <br>Focus on what makes you money.
			</p>
			<div class="flex flex-col md:flex-row gap-5 items-center justify-center">
				<UButton to="/contact" size="xl">
					Automate My Business
				</UButton>
				<UButton
					to="/book-call"
					size="xl"
					variant="outline"
					class="bg-white"
				>
					Free Consultation
				</UButton>
			</div>
		</div>
	</section>
</template>
