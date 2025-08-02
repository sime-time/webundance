<script setup lang="ts">
import type { AccordionItem } from "@nuxt/ui";

const faq = ref<AccordionItem[]>([
	{
		label: "How long does a project take?",
		content: "Small websites take less than 1 week. Bigger projects take 3-6 weeks.",
	},
	{
		label: "What do you automate?",
		content: "Bookings. Forms. Emails. Follow-ups. You name it.",
	},
	{
		label: "Do I need to know tech?",
		content: "No. You tell me what you need. I handle the rest.",
	},
	{
		label: "What if I already have a website?",
		content: "I can rebuild it, clean it up, or scrap it and start fresh.",
	},
	{
		label: "Can I update the site myself later?",
		content: "Yes. You'll get clear instructions or I can set it up so you never need to touch it.",
	},
	{
		label: "What tech do you use?",
		content: "Nuxt.js to build fast websites, Cloudflare for secure hosting, Square/Stripe for payments, and other modern tools that load fast and work clean.",
	},
	{
		label: "How do we start?",
		content: "Book a call or fill out the form — I'll reply fast.",
	},
]);
</script>

<template>
	<section id="faq" class="bg-gradient-to-b from-neutral-100 to-primary flex justify-center py-32">
		<div class="container mx-auto max-w-5xl text-center flex flex-col gap-3 px-5 md:px-0">
			<h1 class="text-3xl lg:text-5xl font-bold">
				FAQ
			</h1>
			<p class="text-xl lg:text-2xl mb-4">
				Common questions, answered.
			</p>
			<UAccordion :items="faq" />
		</div>
	</section>
</template>
