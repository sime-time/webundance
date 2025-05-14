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
			from: "webundance.com",
			to: ["1simeondunn@gmail.com"],
			subject: `Contact Form Submission`,
			html: `
        <p>Name:<br> ${name}</p>
        <p>Email:<br> ${email}</p>
        <p>Business:<br> ${business}</p>
        <p>Message:<br> ${message}</p>
      `,
		});

		return data;
	}
	catch (error) {
		return { error };
	}
});
