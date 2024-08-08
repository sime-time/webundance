import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Hero from "~/components/Hero"
import OurServices from "~/components/OurServices";
import FAQ from "~/components/FAQ";

export default component$(() => {
  return (
    <>
      <Hero />
      <OurServices />
      <FAQ />
    </>
  );
});

export const head: DocumentHead = {
  title: "Webundance",
  meta: [
    {
      name: "description",
      content: "Web development, social media management, and chat-bot integration for service-based businesses",
    },
  ],
};
