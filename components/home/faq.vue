<script setup lang="ts">
import type { AccordionItem } from "@nuxt/ui";

const faq = ref<AccordionItem[]>([
	{
		label: "How long does a project take?",
		content: "Most projects take 1-2 weeks. Bigger builds, 3-4.",
	},
	{
		label: "Do you only work with local businesses?",
		content: "I work with anyone, but I prioritize businesses in Indianapolis and Carmel, Indiana.",
	},
	{
		label: "Do I need to know tech stuff?",
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
		label: "What do you automate?",
		content: "Bookings. Forms. Emails. Invoices. Follow-ups. You name it.",
	},
	{
		label: "What's it cost?",
		content: "Websites start at $600. Automation starts at $800. Final quote depends on scope.",
	},
	{
		label: "What tech do you use?",
		content: "Nuxt for web development, n8n for AI automation, Stripe for payments, and other modern tools that load fast and work clean.",
	},
	{
		label: "How do we start?",
		content: "Book a call or fill out the form — I'll reply fast.",
	},
]);
</script>

<template>
	<section class="bg-neutral-100/80 flex justify-center py-32">
		<div class="container mx-auto max-w-5xl text-center flex flex-col gap-6 px-5 md:px-0">
			<h1 class="text-3xl lg:text-5xl font-bold">
				FAQ
			</h1>
			<p class="text-xl lg:text-2xl ">
				Common questions, answered.
			</p>
			<UAccordion :items="faq" />
		</div>
	</section>
</template>
