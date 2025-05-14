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
const loading = ref(false);
const submitted = ref(false);

async function onSubmit(event: FormSubmitEvent<ContactSchema>) {
	loading.value = true;
	console.log("EVENT DATA", event.data);
	try {
		// make sure form input is valid
		const validForm = ContactSchema.parse(formState);

		// transform into FormData object
		const formData = new FormData();
		formData.append("name", validForm.name);
		formData.append("business", validForm.business);
		formData.append("email", validForm.email);
		formData.append("message", validForm.message);

		// send to API endpoint
		const result = await $fetch("/api/send", {
			method: "POST",
			body: formData,
		});

		if (result.error) {
			throw new Error("Failed to send message");
		}

		toast.add({
			title: "Message Sent",
			description: "We'll reach out to you shortly.",
			color: "success",
		});

		submitted.value = true;
	}
	catch (err) {
		console.error(err);
		toast.add({
			title: "Message Not Sent",
			description: "Error occurred while sending message",
			color: "error",
		});
	}
	finally {
		loading.value = false;
	}
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
				<UInput v-model="formState.name" class="w-full" placeholder="Your full name" :disabled="submitted" />
			</UFormField>

			<UFormField label="Business" name="business">
				<UInput v-model="formState.business" class="w-full" placeholder="Your business name" :disabled="submitted" />
			</UFormField>

			<UFormField label="Email" name="email">
				<UInput v-model="formState.email" class="w-full" placeholder="your@email.com" :disabled="submitted" />
			</UFormField>

			<UFormField label="What you need" name="message">
				<UTextarea v-model="formState.message" class="w-full" placeholder="Tell me about your problems and what you're looking to achieve" :disabled="submitted" />
			</UFormField>

			<UButton
				type="submit"
				size="xl"
				class="w-full justify-center"
				:loading="loading"
				:disabled="submitted"
			>
				<span v-if="submitted">Message Sent</span>
				<span v-else>Send Message</span>
			</UButton>
		</UForm>
	</section>
</template>
