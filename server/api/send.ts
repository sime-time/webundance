import { Resend } from "resend";
import env from "~/lib/env";

const resend = new Resend(env.RESEND_API_KEY);

export default defineEventHandler(async (event) => {
	const formData = await readFormData(event);

	const email = formData.get("email")?.toString();
	const name = formData.get("name")?.toString();
	const business = formData.get("business")?.toString();
	const message = formData.get("message")?.toString();

	try {
		if (!email || !business || !name || !message) {
			throw new Error("Invalid form data");
		}

		const data = await resend.emails.send({
			from: "Simeon <support@webundance.com>",
			to: [email],
			subject: `Hello, ${name}`,
			html: `<strong>We've received your message</strong>
        <p>Your business: ${business}</p>
        <p>Your message: ${message}</p>
      `,
		});

		return data;
	}
	catch (error) {
		return { error };
	}
});
