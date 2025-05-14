<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
	<footer class="bg-neutral-900 text-neutral-400 pt-16 pb-8">
		<div class="container px-3 md:px-0 mx-auto max-w-5xl">
			<div class="grid grid-cols-2 md:grid-cols-4 gap-y-8">
				<!-- Logo -->
				<div class="col-span-2">
					<NuxtLink to="/" class="flex gap-2 items-center w-fit">
						<img src="/favicon.ico" class="size-10">
						<h3 class="text-primary-400 font-bold text-xl">
							Webundance
						</h3>
					</NuxtLink>
					<p class="max-w-xs">
						Custom websites and AI automation solutions for local Indiana businesses. Save time, look professional, and grow your business.
					</p>
				</div>

				<!-- Service Links -->
				<div>
					<h3 class="font-semibold text-neutral-50 mb-4">
						Services
					</h3>
					<ul class="space-y-3">
						<li>
							<NuxtLink to="#" class="hover:text-neutral-50 transition-colors">
								Admin Automation
							</NuxtLink>
						</li>
						<li>
							<NuxtLink to="#" class="hover:text-neutral-50 transition-colors">
								Website Upgrade
							</NuxtLink>
						</li>
					</ul>
				</div>

				<!-- Company Links -->
				<div>
					<h3 class="font-semibold text-neutral-50 mb-4">
						Company
					</h3>
					<ul class="space-y-3">
						<li>
							<NuxtLink to="/about" class="hover:text-neutral-50 transition-colors">
								About
							</NuxtLink>
						</li>
						<li>
							<NuxtLink to="/contact" class="hover:text-neutral-50 transition-colors">
								Contact
							</NuxtLink>
						</li>
						<li>
							<NuxtLink to="/book-call" class="hover:text-neutral-50 transition-colors">
								Book a Call
							</NuxtLink>
						</li>
					</ul>
				</div>

				<div class="border-t border-neutral-500 mt-8 pt-8 text-sm flex flex-col md:flex-row justify-between col-span-full">
					<p>&copy; {{ currentYear }} Webundance. All rights reserved.</p>
					<div class="mt-4 md:mt-0">
						<NuxtLink to="#" class="hover:text-neutral-50 mr-6">
							Privacy Policy
						</NuxtLink>
						<NuxtLink to="#" class="hover:text-neutral-50">
							Terms of Service
						</NuxtLink>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>
