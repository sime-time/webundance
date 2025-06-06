<script setup lang="ts">
const pricingPlans = [
	{
		id: 1,
		tierIcon: "i-lucide-award",
		tierName: "Starter",
		price: "$199",
		pricePeriod: "One-Time",
		tagline: "Get Online Fast",
		features: [
			"Mobile-optimized website",
			"Basic info: hours, location, photos",
			"Contact form or Instagram link",
			"No payments, no automations",
			"You handle signups manually",
		],
		audience: "For gyms who just need a presence.",
		limitation: "Not built for growth.",
		ctaText: "Get Started",
		ctaLink: "/contact?plan=starter",
		highlight: false,
	},
	{
		id: 2,
		tierIcon: "i-lucide-zap",
		tierName: "Systemized",
		price: "$497 Setup",
		pricePeriod: "+ 5% of Monthly Revenue",
		tagline: "Our Most Popular Plan",
		features: [
			"Full website w/ online signups",
			"Waiver + credit card required to join",
			"Auto-billing via Stripe/Square",
			"Walk-in swipe support",
			"Member dashboard",
			"Admin dashboard for you",
			"SMS & email alerts",
			"QR code check-in system",
			"Hosting & support included",
		],
		audience: "The last time you'll chase a payment.",
		limitation: "Highly recommended.",
		ctaText: "Book a Demo",
		ctaLink: "/book-call?plan=systemized",
		highlight: true,
	},
	{
		id: 3,
		tierIcon: "i-lucide-crown",
		tierName: "White Glove",
		price: "$1997 Setup",
		pricePeriod: "+ $299/month",
		tagline: "Built for High Volume Gyms & Franchises",
		features: [
			"Everything in Systemized",
			"Custom branding + logo package",
			"Google Ads setup & SEO optimization",
			"AI chatbot for new inquiries",
			"Automated text follow-ups for leads",
			"Class schedule w/ bookings",
			"Staff accounts + permissions",
			"Weekly site performance reports",
			"Priority support",
		],
		audience: "For gyms running like businesses.",
		limitation: "We do it all — and you stay focused on training.",
		ctaText: "Apply for White Glove",
		ctaLink: "/contact?plan=white-glove",
		highlight: false,
	},
];
</script>

<template>
	<section class="py-16 md:py-24 bg-neutral-200">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="text-center mb-12 md:mb-16">
				<h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
					Simple, Transparent Pricing
				</h2>
				<p class="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
					Choose the plan that's right for your gym. No hidden fees, no surprises.
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
