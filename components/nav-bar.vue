<script setup lang="ts">
const menuOpen = ref(false);

const navLinks = [
	{
		id: 1,
		label: "Home",
		href: "/",
	},
	{
		id: 2,
		label: "About",
		href: "/about",
	},
	{
		id: 3,
		label: "Website Upgrade",
		href: "/website-upgrade",
	},
	{
		id: 4,
		label: "Automation",
		href: "/automation",
	},
];
</script>

<template>
	<nav class="sticky top-0 z-20 border-neutral-200 backdrop-blur-sm bg-white">
		<div class="flex justify-between items-center p-4 mx-auto w-full max-w-5xl">
			<!-- Logo -->
			<NuxtLink to="/" class="flex gap-2 items-center cursor-pointer">
				<img src="/favicon.ico" alt="webundance logo" width="48" height="48" class="size-12">
				<h1 class="text-xl font-bold text-primary">
					Webundance
				</h1>
			</NuxtLink>

			<!-- Nav Links -->
			<div class="flex gap-6 items-center max-sm:hidden">
				<div v-for="navLink in navLinks" :key="navLink.id">
					<NuxtLink :to="navLink.href" class="cursor-pointer transition-colors ease-in-out hover:text-primary">
						{{ navLink.label }}
					</NuxtLink>
				</div>
				<UButton to="/contact" class="text-base" size="lg">
					Get Started
				</UButton>
			</div>

			<button aria-label="toggle navigation menu" class="md:hidden" @click="() => (menuOpen = !menuOpen)">
				<div v-if="menuOpen" class="flex items-center">
					<UIcon name="i-lucide-x" size="xl" class="size-7" />
				</div>
				<div v-else class="flex items-center">
					<UIcon name="i-lucide-menu" size="xl" class="size-7" />
				</div>
			</button>
		</div>

		<!-- Mobile Menu -->
		<Transition name="expand">
			<div v-if="menuOpen" class="overflow-hidden md:hidden p-4 mb-4 border-b border-neutral-300">
				<div class="flex flex-col gap-4 text-lg">
					<div v-for="navLink in navLinks" :key="navLink.id">
						<NuxtLink
							:to="navLink.href"
							class="px-2 py-2 hover:text-primary transition-colors ease-in-out"
							@click="() => (menuOpen = false)"
						>
							{{ navLink.label }}
						</NuxtLink>
					</div>

					<UButton
						size="lg"
						class="text-base justify-center"
						@click="() => { menuOpen = false; navigateTo('/contact'); }"
					>
						Get Started
					</UButton>
					<UButton
						size="lg"
						variant="outline"
						class="text-base justify-center"
						@click="() => { menuOpen = false; navigateTo('/book-call'); }"
					>
						Book a Call
					</UButton>
				</div>
			</div>
		</Transition>
	</nav>
</template>

<style scoped>
.expand-enter-active,
.expand-leave-active {
	transition: all 0.2s ease-out;
	max-height: 300px; /* Adjust this value based on your content height */
}

.expand-enter-from,
.expand-leave-to {
	max-height: 0;
	opacity: 0;
}

.expand-enter-to,
.expand-leave-from {
	max-height: 300px;
	opacity: 1;
}
</style>
