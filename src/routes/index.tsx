import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Hero from "../componentz/Hero"

export default component$(() => {
  return (
    <>
      <Hero />
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
