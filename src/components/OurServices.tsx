import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import ComputerPhoneIcon from "~/assets/computer-phone.svg?raw";
import CopywritingIcon from "~/assets/copywriting.svg?raw";
import ChatbotIcon from "~/assets/chatbot.svg?raw";
import ServiceCard from "./ServiceCard";

export default component$(() => {

  return (
    <section class="px-4 py-12 mx-auto max-w-6xl flex flex-col gap-12 w-full">
      <h1 class="text-4xl md:text-5xl text-center md:text-start">Our Services</h1>
      <div class="flex flex-col md:flex-row justify-between gap-12">
        <ServiceCard iconSvg={CopywritingIcon} title="Copywriting" description="Revamp the writing on your established website to convert browsers into buyers." href="/services/copywriting">
          <li>SEO-optimized web copy</li>
          <li>Email newsletters</li>
          <li>Social media content</li>
          <li>Technical writing</li>
        </ServiceCard>
        <ServiceCard iconSvg={ComputerPhoneIcon} title="Website Design" description="Establish your first website or redesign your existing one." href="/services/website" >
          <li>Mobile-friendly</li>
          <li>Search engine optimized</li>
          <li>Fast page load speed</li>
          <li>Easy to edit pages yourself</li>
        </ServiceCard>
        <ServiceCard iconSvg={ChatbotIcon} title="AI Chatbot" description="Stop answering the same questions over and over again." href="/services/chatbot" >
          <li>Answers based on your business documents.</li>
          <li>Managed monthly to ensure accuracy.</li>
        </ServiceCard>
      </div>
      <div class="flex justify-center items-center">
        <Link href="/contact" class="relative cursor-pointer transition-colors px-6 py-3 border bg-yellow-500 border-yellow-400 rounded-lg hover:bg-yellow-400 hover:border-yellow-300 text-center w-full md:w-1/3 ">I want all 3!</Link>
      </div>

    </section>
  );
})