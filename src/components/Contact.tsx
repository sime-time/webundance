import { component$ } from "@builder.io/qwik";
import { Form, routeAction$, z, zod$ } from "@builder.io/qwik-city";
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

export default component$(() => {
  const action = useResend();

  return (
    <section id="contact" class="bg-slate-800/70">
      <Form action={action} class="px-4 py-12 mx-auto max-w-6xl flex flex-col gap-12 w-full">
        <h1 class="text-5xl text-center md:text-start">Contact Us</h1>
        <div class="grid md:grid-cols-3 gap-5 text-black">
          <div class="flex flex-col group">
            <label for="name" class="text-blue-200/60 group-focus-within:text-blue-200 mb-1">Name *</label>
            <input name="name" type="text" class="rounded-md p-3" placeholder="Name" />
            {action.value?.failed && <p class="text-red-500">{action.value.fieldErrors.name ? "Name is required" : ""}</p>}
          </div>
          <div class="flex flex-col group">
            <label for="email" class="text-slate-200/50 group-focus-within:text-blue-200 mb-1">Email *</label>
            <input name="email" type="email" class="rounded-md p-3" placeholder="Email" />
            {action.value?.failed && <p class="text-red-500">{action.value.fieldErrors.email ? "Email is required" : ""}</p>}
          </div>
          <div class="flex flex-col group">
            <label for="phone" class="text-blue-200/60 group-focus-within:text-blue-200 mb-1">Phone</label>
            <input name="phone" type="tel" class="rounded-md p-3" placeholder="Phone" />
          </div>
          <div class="flex flex-col group md:col-span-3">
            <label class="text-blue-200/60 group-focus-within:text-blue-200 mb-1">Message</label>
            <textarea name="message" class="rounded-md p-3 text-black resize-y h-32" placeholder="Let us know what service you want. Include any questions, concerns, ideas, or goals to make our discussion productive."></textarea>
          </div>
        </div>

        <button type="submit" class="relative inline-flex gap-2 justify-center cursor-pointer transition-colors px-10 py-5 border text-[#f7f7f7] bg-yellow-600 border-yellow-500 rounded-lg hover:bg-yellow-500 hover:border-yellow-300 hover:text-white  outline-none ring-yellow-300 focus:ring-2 focus:ring-offset-3 text-center items-center">Submit to start the discussion</button>
        {action.value?.success && <p>Thank you for submitting, we will reach out to you shortly.</p>}
      </Form>
    </section>
  );
});