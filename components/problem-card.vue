<script setup lang="ts">
defineProps<{
	icon: string;
	description: string;
}>();
</script>

<template>
	<UCard variant="subtle">
		<div class="flex items-center gap-4 text-start">
			<UBadge color="neutral" variant="soft" class="rounded-xl p-2 bg-error-200">
				<UIcon :name="icon" class="text-4xl text-error" />
			</UBadge>
			<p class="text-xl font-semibold">
				{{ description }}
			</p>
		</div>
	</UCard>
</template>
