<script setup lang="ts">
const automateService = {
	icon: "i-lucide-settings",
	title: "Automate Your Admin",
	description: "Cut the repetitive tasks you don't have time for.",
	list: [
		"Booking & scheduling systems",
		"Automated emails & notifications",
		"Digital waivers & forms",
		"Payment processing & invoicing",
	],
	href: "#",
};

const websiteService = {
	icon: "i-lucide-monitor-check",
	title: "Upgrade Your Website",
	description: "Get a modern, fast, mobile-first site that works.",
	list: [
		"Custom website design & development",
		"Mobile responsive & fast loading",
		"Contact forms & booking systems",
		"SEO-friendly structure",
	],
	href: "#",
};
</script>

<template>
	<section class="bg-primary-100 flex justify-center py-32">
		<div class="container mx-6 md:mx-auto max-w-5xl text-center flex flex-col gap-6">
			<h1 class="text-3xl md:text-5xl font-bold">
				Services Tailored to You
			</h1>
			<p class="text-lg lg:text-2xl max-w-3xl mx-auto">
				Choose the solution that best fits your business goals. Each service is custom-built to your specific requirements.
			</p>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				<HomeServiceCard :service="automateService" />
				<HomeServiceCard :service="websiteService" />
			</div>
		</div>
	</section>
</template>
