import { component$ } from "@builder.io/qwik";
import Accordion from "./Accordion";

export default component$(() => {

  interface questionAnswer {
    question: string;
    answer: string;
  }

  const faqItems: questionAnswer[] = [
    { question: "Why is the sky blue?", answer: "reflecting blue light waves or something smart." },
    { question: "Why is grass green?", answer: "something to do with chlorophyll." },
  ];

  return (
    <section>
      <div class="px-4 py-12 mx-auto max-w-6xl flex flex-col gap-12 w-full">
        <h1 class="text-5xl text-center md:text-start">Frequently Asked Questions</h1>
        {faqItems.map((faq, index) => (
          <Accordion key={index} title={faq.question} content={faq.answer} />
        ))}
      </div>
    </section>

  );
})