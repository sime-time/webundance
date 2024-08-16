import { component$ } from "@builder.io/qwik";
import ReviewCard from "./ReviewCard";

export default component$(() => {
  return (
    <section>
      <div id="our-services" class="px-4 py-12 mx-auto max-w-6xl flex flex-col gap-8 w-full">
        <h1 class="text-5xl text-center md:text-start">Our Portfolio</h1>
        <div class="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-8">
          <div class="rounded-xl border border-slate-100/20">
            <img src="screencapture-collegecarry.png" alt="client website" class="rounded-xl" width="2880" height="3184" />
          </div>
          <div class="rounded-xl border border-slate-100/20">
            <img src="screencapture-pristineclean.png" alt="client website" class="rounded-xl" width="2880" height="3184" />
          </div>
        </div>
        <ReviewCard
          logoSrc="pristine-logo.png"
          review="I recently worked with Simeon from the the team to develop a new website for my business, and I couldn't be happier with the results. From our initial consultation to the final launch, his team demonstrated exceptional skill, creativity, and dedication."
          name="Nick"
          position="Founder / Pristine Clean Co."
          profilePicSrc="nick.jpg"
        />
        <div class="flex justify-center items-center">
          <a href="/" class="relative inline-flex gap-2 justify-center cursor-pointer transition-colors px-10 py-5 border text-[#f7f7f7] bg-yellow-600 border-yellow-500 rounded-lg hover:bg-yellow-500 hover:border-yellow-300 hover:text-white  outline-none ring-yellow-300 focus:ring-2 focus:ring-offset-3 text-center items-center">Start Your Website</a>
        </div>
      </div>
    </section>
  );
});
