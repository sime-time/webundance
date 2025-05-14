<script setup lang="ts">
defineProps<{
	icon: string;
	title: string;
	list?: string[];
	description?: string;
}>();
</script>

<template>
	<UCard class="shadow-md bg-white h-full">
		<div class="flex flex-col items-start gap-1 justify-between">
			<div class="flex flex-row items-center gap-3 ">
				<UBadge color="success" size="xl" variant="soft" class="text-4xl py-2">
					<UIcon :name="icon" />
				</UBadge>

				<h2 class="text-xl font-semibold tracking-tight text-start">
					{{ title }}
				</h2>
			</div>

			<div v-if="description">
				<p>{{ description }}</p>
			</div>

			<div v-if="list">
				<ul class="space-y-2 my-4 text-start">
					<div v-for="(item, index) in list" :key="index">
						<li class="flex items-start">
							<UIcon name="i-lucide-dot" class="text-2xl" />
							<span>{{ item }}</span>
						</li>
					</div>
				</ul>
			</div>
		</div>
	</UCard>
</template>
