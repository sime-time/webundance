<template>
	<main class="py-16 md:py-36">
		<div class="container mx-auto max-w-5xl px-6 md:px-0">
			<div class="grid grid-cols-1 md:grid-cols-2 gap-10">
				<section class="flex flex-col gap-6">
					<h1 class="text-3xl lg:text-4xl font-bold tracking-tight">
						Get in Touch
					</h1>
					<p class="text-xl  ">
						Fill out the form below to tell me about your project, and I'll get back to you as soon as possible to discuss next steps.
					</p>
					<p class="text-xl ">
						Or if you prefer, you can schedule a call directly using the booking link.
					</p>
					<UButton to="/book-call" variant="outline" size="xl" class="w-fit">
						Book a Time
					</UButton>
				</section>
				<ContactForm />
			</div>
		</div>
	</main>
</template>
