<script setup lang="ts">
interface Service {
	icon: string;
	title: string;
	description: string;
	list: string[];
	href: string;
}

defineProps<{
	service: Service;
}>();
</script>

<template>
	<UCard class="shadow-md">
		<div class="flex flex-col items-start gap-1 p-1 justify-between">
			<UBadge size="xl" variant="soft" class="mb-4 text-4xl py-2">
				<UIcon :name="service.icon" />
			</UBadge>

			<h2 class="text-2xl font-semibold tracking-tight ">
				{{ service.title }}
			</h2>

			<p class="text-base text-start">
				{{ service.description }}
			</p>

			<ul class="space-y-2 my-4 text-start">
				<div v-for="(item, index) in service.list" :key="index">
					<li class="flex items-center">
						<UIcon name="i-lucide-dot" class="text-2xl" />
						<span>{{ item }}</span>
					</li>
				</div>
			</ul>

			<UButton :to="service.href" size="lg" class="w-full justify-center">
				Learn More
				<UIcon name="lucide:arrow-right" class="h-4 w-4" />
			</UButton>
		</div>
	</UCard>
</template>
