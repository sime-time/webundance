import { component$ } from "@builder.io/qwik";
import { IoArrowForwardOutline } from "@qwikest/icons/ionicons";
import ReviewCard from "./ReviewCard";

export default component$(() => {
  return (
    <section class="px-4 py-5 md:py-12 mx-auto max-w-6xl flex flex-col md:flex-row gap-16 md:gap-10">

      <div class="flex flex-col gap-9 basis-2/3">
        <h1 class="text-5xl md:text-6xl text-wrap leading-tight">Fast websites that turn <b class="italic">clicks into clients.</b></h1>
        <p class="text-xl leading-normal">We provide web development services to make your website a <br />lead-converting machine.</p>
        <div class="flex flex-row items-center gap-8 md:gap-12">
          <button class="relative justify-center cursor-pointer transition-colors px-6 py-3 border bg-yellow-500 border-yellow-400 rounded-lg hover:bg-yellow-400 hover:border-yellow-300">Start my website</button>
          <a href="#pricing" class="focus:ring-offset-3 relative inline-flex h-fit w-fit rounded-lg border border-blue-100/20 bg-blue-200/10 px-6 py-3 text-blue-200 outline-none ring-yellow-300 transition-colors after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded-full after:bg-yellow-100 after:bg-opacity-0 after:blur-md after:transition-all after:duration-500 hover:border-yellow-200/40 hover:text-yellow-300 after:hover:bg-opacity-15 focus:ring-2 items-center gap-2">Pricing <IoArrowForwardOutline /></a>
        </div>
      </div>

      <ReviewCard />

    </section>
  );
});