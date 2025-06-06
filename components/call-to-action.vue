<template>
	<section class="bg-gradient-to-t from-neutral-900 to-primary flex justify-center py-32">
		<div class="container mx-auto max-w-5xl text-white text-center flex flex-col gap-3 px-5 md:px-0">
			<h1 class="text-3xl lg:text-5xl font-bold leading-tight">
				Ready to make your gym more efficient?
			</h1>
			<p class="text-xl lg:text-2xl">
				Let's talk about how I can help you automate tasks and improve your online presence.
			</p>
			<div class="flex gap-5 justify-center mt-4">
				<UButton to="/book-call" size="xl" variant="outline" color="neutral">
					Set Up Your System
					<UIcon name="lucide:arrow-right" class="h-4 w-4" />
				</UButton>
			</div>
		</div>
	</section>
</template>
