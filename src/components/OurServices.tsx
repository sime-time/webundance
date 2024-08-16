import { component$ } from "@builder.io/qwik";
import ComputerPhoneIcon from "~/assets/computer-phone.svg?raw";
import EcommerceIcon from "~/assets/ecommerce.svg?raw";
import ChatbotIcon from "~/assets/chatbot.svg?raw";
import ServiceCard from "./ServiceCard";
import { IoArrowForwardOutline } from "@qwikest/icons/ionicons";

export default component$(() => {

  return (
    <section class="bg-slate-800/70">
      <div id="our-services" class="px-4 py-12 mx-auto max-w-6xl flex flex-col gap-12 w-full">
        <h1 class="text-5xl text-center md:text-start">Our Services</h1>
        <div class="flex flex-col md:flex-row justify-between gap-12">
          <ServiceCard iconSvg={ChatbotIcon} title="AI Chatbot" description="Stop answering the same questions over and over again." href="/services/chatbot" >
            <li>Integrate an AI chatbot onto your website</li>
            <li>Knowledge based on your business documents</li>
            <li>Managed monthly to ensure accuracy</li>
          </ServiceCard>
          <ServiceCard iconSvg={ComputerPhoneIcon} title="Website Design" description="Establish your first website or redesign your existing one." href="/services/website" >
            <li>Mobile-friendly</li>
            <li>Search engine optimized</li>
            <li>Fast page load speed</li>
            <li>Unlimited edits</li>
            <li>Integrate Google analytics to monitor traffic</li>
          </ServiceCard>
          <ServiceCard iconSvg={EcommerceIcon} title="E-Commerce" description="Stand out from cookie-cutter templates and turn browsers into buyers." href="/services/ecommerce">
            <li>Custom-coded Shopify integration</li>
            <li>Custom design from scratch</li>
            <li>Great user experience</li>
            <li>Optimized for conversions</li>
            <li>Easy to manage backend</li>
          </ServiceCard>
        </div>
        <div class="flex justify-center">
          <a href="/" class="relative inline-flex gap-2 justify-center cursor-pointer transition-colors px-10 py-5 border text-[#f7f7f7] bg-yellow-600 border-yellow-500 rounded-lg hover:bg-yellow-500 hover:border-yellow-300 hover:text-white  outline-none ring-yellow-300 focus:ring-2 focus:ring-offset-3 text-center items-center">See Pricing <IoArrowForwardOutline /></a>
        </div>
      </div>
    </section>
  );
})