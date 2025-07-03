<script setup lang="ts">
const pricingPlans = [
	{
		id: 1,
		tierIcon: "i-lucide-rocket",
		tierName: "Launch",
		price: "$600",
		pricePeriod: "One-Time",
		tagline: "Professional, Fast, Done.",
		features: [
			"Fast custom website",
			"Mobile-first design",
			"Contact form",
			"SEO-ready",
			"Hosting setup",
		],
		audience: "For new businesses.",
		limitation: "Get online, look professional.",
		ctaText: "Get Started",
		ctaLink: "/contact?plan=launch",
		highlight: false,
	},
	{
		id: 2,
		tierIcon: "i-lucide-gem",
		tierName: "Grow",
		price: "$2,000",
		pricePeriod: "One-Time",
		tagline: "For Growing Businesses",
		features: [
			"Everything in Launch",
			"Google Maps integration",
			"Website analytics",
			"Advanced SEO optimization",
			"Business domain email",
		],
		audience: "For businesses ready to scale.",
		limitation: "Our most popular package.",
		ctaText: "Choose Grow",
		ctaLink: "/contact?plan=grow",
		highlight: true,
	},
	{
		id: 3,
		tierIcon: "i-lucide-crown",
		tierName: "Scale",
		price: "Custom",
		pricePeriod: "Let's Talk",
		tagline: "For Market Leaders",
		features: [
			"Everything in Grow",
			"E-commerce functionality",
			"Custom API integrations",
			"Ongoing support & maintenance",
			"Dedicated project manager",
		],
		audience: "For established businesses.",
		limitation: "Built for performance and reliability.",
		ctaText: "Book a Consultation",
		ctaLink: "/book-call?plan=scale",
		highlight: false,
	},
];
</script>

<template>
	<section class="py-16 md:py-24 bg-gradient-to-b from-neutral-200 to-neutral-100/80">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="text-center mb-12 md:mb-16">
				<h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
					Simple, Transparent Pricing
				</h2>
				<p class="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
					Choose the plan that's right for your business. No hidden fees, no surprises.
				</p>
			</div>

			<div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
				<UCard
					v-for="plan in pricingPlans"
					:key="plan.id"
					class="flex flex-col"
					:ui="{
						body: 'flex-grow flex flex-col', // Ensures body takes available space
						footer: 'mt-auto', // Pushes footer to the bottom
					}"
				>
					<template #header>
						<div class="text-center pt-3">
							<UIcon :name="plan.tierIcon" class="text-5xl text-primary-500 dark:text-primary-400" />
							<h3 class="text-xl font-semibold text-gray-900 dark:text-white">
								{{ plan.tierName }}
							</h3>
							<p class="mt-2 text-3xl font-bold text-primary-600 dark:text-primary-400">
								{{ plan.price }}
							</p>
							<p class="text-sm text-gray-500 dark:text-gray-400">
								{{ plan.pricePeriod }}
							</p>
							<p class="mt-3 text-md font-medium text-gray-700 dark:text-gray-200">
								{{ plan.tagline }}
							</p>
						</div>
					</template>

					<ul class="space-y-3 text-sm text-gray-600 dark:text-gray-300 flex-grow">
						<li v-for="feature in plan.features" :key="feature" class="flex items-start">
							<UIcon name="i-lucide-check-circle" class="flex-shrink-0 size-5 text-primary-500 dark:text-primary-400 mr-2 mt-0.5" />
							<span>{{ feature }}</span>
						</li>
					</ul>

					<template #footer>
						<div class="mt-6 text-center">
							<p class="text-sm font-medium text-gray-700 dark:text-gray-200">
								{{ plan.audience }}
							</p>
							<p v-if="plan.limitation" class="mt-1 text-xs text-gray-500 dark:text-gray-400">
								{{ plan.limitation }}
							</p>
							<UButton
								:to="plan.ctaLink"
								block
								size="lg"
								class="mt-6"
								:variant="plan.highlight ? 'solid' : 'outline'"
							>
								{{ plan.ctaText }}
								<UIcon name="i-lucide-arrow-right" class="ml-2 size-4" />
							</UButton>
						</div>
					</template>
				</UCard>
			</div>
		</div>
	</section>
</template>
