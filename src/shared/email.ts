import { routeAction$, zod$, z } from "@builder.io/qwik-city";
import formData from "form-data";
import Mailgun from "mailgun.js";

// eslint-disable-next-line qwik/loader-location
export const useMailgun = routeAction$(
  async (data) => {
    // this will run on the server when the user submits the form 
    console.log('email sending...');

    const mailgun = new Mailgun(formData);
    const mg = mailgun.client({
      username: 'api',
      key: process.env.MAILGUN_API_KEY || ''
    });

    mg.messages.create(process.env.MAILGUN_DOMAIN || '', {
      from: `Webundance <contact@webundance.com>`,
      to: [data.email],
      subject: `Hello, ${data.name}`,
      text: "This is the text!",
      html: `<h1>${data.message}</h1>
      <p>Phone number: ${data.phone}</p> 
      `
    })
      .then(msg => console.log(msg)) // logs response data
      .catch(err => console.error(err)); // logs any error

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