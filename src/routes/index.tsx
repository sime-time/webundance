import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Hero from "~/components/Hero"
import OurServices from "~/components/OurServices";
import OurPortfolio from "~/components/OurPortfolio";
import FAQ from "~/components/FAQ";

export default component$(() => {
  return (
    <>
      <Hero />
      <OurServices />
      <OurPortfolio />
      <FAQ />
    </>
  );
});

export const head: DocumentHead = {
  title: "Webundance",
  meta: [
    {
      name: "description",
      content: "Web development and chat-bot integration for service-based businesses",
    },
  ],
};
