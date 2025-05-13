<script setup lang="ts">
import type { FormSubmitEvent } from "@nuxt/ui";
import { type } from "arktype";

const ContactSchema = type({
	name: "string >= 1",
	business: "string >= 1",
	email: "string.email >= 1",
	message: "string >= 1",
});

type ContactSchema = typeof ContactSchema.infer;

const formState = reactive({
	name: "",
	business: "",
	email: "",
	message: "",
});

const toast = useToast();
async function onSubmit(event: FormSubmitEvent<ContactSchema>) {
	toast.add({
		title: "Success",
		description: "Form has been submitted.",
		color: "success",
	});
	console.log(event.data);
}
</script>

<template>
	<section class="w-full">
		<UForm
			:schema="ContactSchema"
			:state="formState"
			class="space-y-4"
			@submit.prevent="onSubmit"
		>
			<UFormField label="Name" name="name">
				<UInput v-model="formState.name" class="w-full" placeholder="Your full name" />
			</UFormField>

			<UFormField label="Business" name="business">
				<UInput v-model="formState.business" class="w-full" placeholder="Your business name" />
			</UFormField>

			<UFormField label="Email" name="email">
				<UInput v-model="formState.email" class="w-full" placeholder="your@email.com" />
			</UFormField>

			<UFormField label="What you need" name="message">
				<UTextarea v-model="formState.message" class="w-full" placeholder="Tell me about your problems and what you're looking to achieve" />
			</UFormField>

			<UButton type="submit" size="xl" class="w-full justify-center">
				Send Message
			</UButton>
		</UForm>
	</section>
</template>
