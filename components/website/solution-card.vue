<script setup lang="ts">
defineProps<{
	icon: string;
	title: string;
	list: string[];
}>();
</script>

<template>
	<UCard class="shadow-md bg-white">
		<div class="flex flex-col items-start gap-1 justify-between">
			<UBadge color="success" size="xl" variant="soft" class="mb-4 text-4xl py-2">
				<UIcon :name="icon" />
			</UBadge>

			<h2 class="text-xl font-semibold tracking-tight text-start">
				{{ title }}
			</h2>

			<ul class="space-y-2 my-4 text-start">
				<div v-for="(item, index) in list" :key="index">
					<li class="flex items-start">
						<UIcon name="i-lucide-dot" class="text-2xl" />
						<span>{{ item }}</span>
					</li>
				</div>
			</ul>
		</div>
	</UCard>
</template>
