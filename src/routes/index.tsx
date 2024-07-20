import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1 class="bg-slate-500 text-4xl">Webundance.com</h1>
    </>
  );
});

export const head: DocumentHead = {
  title: "Webundance",
  meta: [
    {
      name: "description",
      content: "Web development, social media management, and chat bot integration for service-based businesses",
    },
  ],
};
