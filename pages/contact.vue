<template>
	<main class="py-16 md:py-36">
		<div class="container mx-auto max-w-5xl px-6 md:px-0">
			<div class="grid grid-cols-1 md:grid-cols-2 gap-10">
				<section class="flex flex-col gap-6">
					<h1 class="text-3xl lg:text-4xl font-bold tracking-loose">
						Get Started
					</h1>
					<p class="text-xl  ">
						Fill out the form below to tell me about your project, and I'll get back to you as soon as possible to discuss next steps.
					</p>
					<p class="text-xl ">
						Or if you prefer, you can schedule a call directly using the booking link.
					</p>
					<UButton to="/book-call" variant="subtle" size="xl" class="w-fit">
						1-on-1 Video Call
					</UButton>
					<div class="flex items-center gap-2">
						<p class="font-semibold text-xl">
							Email:
						</p>
						<a href="mailto:1simeondunn@gmail.com" class="text-lg underline underline-offset-3 text-primary hover:text-primary-700">1simeondunn@gmail.com</a>
					</div>
				</section>
				<ContactForm />
			</div>
		</div>
	</main>
</template>
