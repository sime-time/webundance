import { component$ } from "@builder.io/qwik";
import Accordion from "./Accordion"
import { AccordionItem } from "./Accordion";

export default component$(() => {

  interface questionAnswer {
    question: string;
    answer: string;
  }

  const faqItems: questionAnswer[] = [
    {
      question: "How long does it take to build a website?",
      answer: `The time it takes to create your website depends on how big it is.<br/><br/>  
      For a basic website with about 5 pages, we can usually finish it in about 2 weeks.<br/><br/>  
      If you need a larger website with around 15 pages, it might take 3 to 5 weeks. But don't worry - if you have a specific date you need the website ready by, let me know, and we can work together to meet your deadline.`
    },
    {
      question: "What do I need to get started?",
      answer: `To begin creating your website, you'll need a few basic things:
      <ul>
        <li>Your business logo.</li>
        <li>Most of the content of your website (this includes words and pictures).</li>
        <li>A general idea of the colors you want to use. </li>
      </ul>
      <br/>
      When it's time to make your website public, you'll need two more things:
      <ul>
        <li>A web address (also called a domain name) - this usually costs $15 per year.</li>
        <li>Website hosting - this is like renting space on the internet for your website. It costs anywhere from $5 to $50 per month.</li>
      </ul>
      <br/>
      Don't worry if you don't have everything ready yet - we can discuss these items when we start planning your website.
      `
    },
    {
      question: "What is your website building process?",
      answer: `
      <ol>
        <li>First, we'll have a chat - either by video or phone - to discuss what you want for your website.</li>
        <li>Then, I'll build the website using your content and following your requirements.</li>
        <li>Next, I'll send you a link to view your new website. You can then tell me about any changes you'd like.</li>
        <li>Once you're satisfied with everything, I'll make your website live for the world to see!</li>
      </ol>`
    },
    {
      question: "How will I be able to make updates after it is complete?",
      answer: "Message me and I will handle any updates or small changes you require within 24 hours. <br/>I charge hourly for any major changes that require more than 2 hours of work."
    },
    {
      question: "How do I pay for my website?",
      answer: "I will email you an invoice that has a link to a secure payment portal where you can enter your credit or debit card information. After paying, a receipt will be sent to you."
    }
  ];

  return (
    <section class="bg-slate-200/10">
      <div class="px-4 py-12 mx-auto max-w-6xl flex flex-col gap-12 w-full">
        <h1 class="text-5xl text-center md:text-start">Frequently Asked Questions</h1>
        <Accordion>
          {faqItems.map((faq, index) => (
            <AccordionItem key={index} value={index} title={faq.question}>
              <div class="faq-item" dangerouslySetInnerHTML={faq.answer}></div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>

  );
})