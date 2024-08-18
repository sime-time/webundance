import { component$ } from "@builder.io/qwik";
import Accordion from "./Accordion"
import { AccordionItem } from "./Accordion";

export default component$(() => {

  interface questionAnswer {
    question: string;
    answer: string;
  }

  const faqItems: questionAnswer[] = [
    { question: "How long does it take to build my website?", answer: "The time it takes to create your website depends on how big it is. For a basic website with about 5 pages, we can usually finish it in about 2 weeks. If you need a larger website with around 15 pages, it might take 3 to 5 weeks. But don't worry - if you have a specific date you need the website ready by, let me know, and we can work together to meet your deadline." },
    { question: "Why is grass green?", answer: "something to do with chlorophyll." },
  ];

  return (
    <section class="bg-slate-800/70">
      <div class="px-4 py-12 mx-auto max-w-6xl flex flex-col gap-12 w-full">
        <h1 class="text-5xl text-center md:text-start">Frequently Asked Questions</h1>
        <Accordion>
          {faqItems.map((faq, index) => (
            <AccordionItem key={index} value={index} title={faq.question}>
              {faq.answer}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>

  );
})