<template>
	<section class="bg-primary-100 flex justify-center py-16">
		<div class="container mx-6 md:mx-auto max-w-5xl text-center flex flex-col gap-6">
			<h1 class="text-3xl md:text-5xl font-bold">
				Services Tailored to You
			</h1>
			<p class="text-lg lg:text-2xl max-w-3xl mx-auto">
				Choose the solution that best fits your business goals. Each service is custom-built to your specific requirements.
			</p>
			<div class="flex flex-col md:flex-row gap-8">
				<UCard class="flex-1 flex items-start shadow-md">
					<div class="flex flex-col items-start gap-1 p-1">
						<UBadge size="xl" variant="soft" class="mb-4 text-4xl py-2">
							<UIcon name="i-lucide-settings" />
						</UBadge>
						<h2 class="text-2xl font-semibold tracking-tight ">
							Automate Your Admin
						</h2>
						<p class="text-base text-start">
							Automate your bookings, emails, waivers, and payments.
						</p>
						<ul className="space-y-2 my-4 font-semibold text-start">
							<li className="flex items-start">
								<span className="mr-2">•</span>
								<span>Booking & scheduling systems</span>
							</li>
							<li className="flex items-start">
								<span className="mr-2">•</span>
								<span>Automated emails & notifications</span>
							</li>
							<li className="flex items-start">
								<span className="mr-2">•</span>
								<span>Digital waivers & forms</span>
							</li>
							<li className="flex items-start">
								<span className="mr-2">•</span>
								<span>Payment processing & invoicing</span>
							</li>
						</ul>
						<UButton size="xl" class="w-full justify-center">
							Learn More
							<UIcon name="lucide:arrow-right" class="h-4 w-4" />
						</UButton>
					</div>
				</UCard>

				<UCard class="flex-1 shadow-md">
					<div class="flex flex-col items-start gap-1 p-1">
						<UBadge size="xl" variant="soft" class="mb-4 text-4xl py-2">
							<UIcon name="i-lucide-monitor-check" />
						</UBadge>
						<h2 class="text-2xl font-semibold tracking-tight">
							Upgrade Your Website
						</h2>
						<p class="text-base text-start">
							Get a modern, fast, mobile-first site that works.
						</p>
						<ul className="space-y-2 my-4 font-semibold text-start">
							<li className="flex items-start">
								<span className="mr-2">•</span>
								<span>Custom website design & development</span>
							</li>
							<li className="flex items-start">
								<span className="mr-2">•</span>
								<span>Mobile responsive & fast loading</span>
							</li>
							<li className="flex items-start">
								<span className="mr-2">•</span>
								<span>Contact forms & booking systems</span>
							</li>
							<li className="flex items-start">
								<span className="mr-2">•</span>
								<span>SEO-friendly structure</span>
							</li>
						</ul>
						<UButton size="xl" class="w-full justify-center">
							Learn More
							<UIcon name="lucide:arrow-right" class="h-4 w-4" />
						</UButton>
					</div>
				</UCard>
			</div>
		</div>
	</section>
</template>
