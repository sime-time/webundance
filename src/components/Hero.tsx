import { component$ } from "@builder.io/qwik";
import { IoArrowForwardOutline } from "@qwikest/icons/ionicons";
import ReviewCard from "./ReviewCard";

export default component$(() => {
  return (
    <section class="px-4 py-5 md:py-12 mx-auto max-w-6xl flex flex-col md:flex-row gap-16 md:gap-10">

      <div class="flex flex-col gap-9 basis-2/3">
        <h1 class="text-5xl md:text-6xl text-wrap leading-tight">Fast websites that turn <b class="italic">clicks into clients.</b></h1>
        <p class="text-xl leading-normal">We provide web development and AI services to make your website<br />a customer-acquistion machine.</p>
        <div class="flex flex-row items-center gap-8 md:gap-12">
          <a href="/" class="relative justify-center cursor-pointer transition-colors px-6 py-3 border text-[#f7f7f7] bg-yellow-600 border-yellow-500 rounded-lg hover:bg-yellow-500 hover:border-yellow-300 hover:text-white  outline-none ring-yellow-300 focus:ring-2 focus:ring-offset-3">Start my website</a>
          <a href="#pricing" class="focus:ring-offset-3 relative inline-flex h-fit w-fit rounded-lg border border-blue-100/20 bg-blue-200/10 px-6 py-3 text-blue-200 outline-none ring-yellow-300 transition-colors  hover:border-yellow-300 hover:text-yellow-300 focus:ring-2 items-center gap-2">Pricing <IoArrowForwardOutline /></a>
        </div>
      </div>

      <ReviewCard
        logoSrc="collegecarry.png"
        review="Love working with Simeon. He was able to clean up our website and enhance it for better customer experience. Always our companies go-to guy. Highly recommend."
        name="Medard"
        position="CEO / College Carry"
        profilePicSrc="medard.jpg"
      />

    </section>
  );
});