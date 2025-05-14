<script setup lang="ts">
import type { FormSubmitEvent } from "@nuxt/ui";
import { z } from "zod";

const ContactSchema = z.object({
	name: z.string().min(1, { message: "Please insert your name" }),
	business: z.string().min(1, { message: "Please insert your business name" }),
	email: z.string().email({ message: "Please insert a valid email address" }).min(1),
	message: z.string().min(5, { message: "Please provide some context about your problem" }),
});

type ContactSchema = z.infer<typeof ContactSchema>;

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
