import { routeAction$, zod$, z } from "@builder.io/qwik-city";
import { Resend } from "resend";

// eslint-disable-next-line qwik/loader-location
export const useResend = routeAction$(
  async (formData) => {
    // this will run on the server when the user submits the form 
    console.log('email sending...');

    const resend = new Resend(process.env.RESEND_API_KEY || '');

    (async function () {
      const { data, error } = await resend.emails.send({
        from: `Webundance <support@webundance.com>`,
        to: ["support@webundance.com"],
        subject: `Hello, ${formData.name}`,
        html: `
        <h1>${formData.message}</h1>
        <p>Name: ${formData.name}</p>
        <p>Phone number: ${formData.phone}</p> 
        <p>Email: ${formData.email}</p>
        `
      })

      if (error) {
        return console.error({ error });
      }

      console.log({ data });

    })();

    return {
      success: true,
    }
  },
  zod$({
    name: z.string().min(1),
    email: z.string().min(1),
    phone: z.string(),
    message: z.string(),
  })

);