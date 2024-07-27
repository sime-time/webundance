import { component$ } from "@builder.io/qwik";
import { IoStarSolid, IoArrowForwardOutline } from "@qwikest/icons/ionicons";

export default component$(() => {
  return (
    <section class="px-4 py-5 md:py-12 mx-auto max-w-6xl flex flex-col md:flex-row gap-16 md:gap-10">

      <div class="flex flex-col gap-9 basis-2/3">
        <h1 class="text-6xl text-wrap leading-tight">Fast websites that turn <b class="italic">clicks into clients.</b></h1>
        <p class="text-xl leading-normal">We provide copywriting and web development to make your website a <br />lead-converting machine.</p>
        <div class="flex flex-row items-center gap-8 md:gap-12 ">
          <button class="relative justify-center cursor-pointer px-6 py-3 border bg-yellow-500 border-yellow-400 rounded-lg hover:bg-yellow-400 hover:border-yellow-300">Start my website</button>
          <a href="#pricing" class="focus:ring-offset-3 relative inline-flex h-fit w-fit rounded-lg border border-blue-100/20 bg-blue-200/10 px-6 py-3 text-blue-200 outline-none ring-yellow-300 transition-colors after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded-full after:bg-yellow-100 after:bg-opacity-0 after:blur-md after:transition-all after:duration-500 hover:border-yellow-200/40 hover:text-yellow-300 after:hover:bg-opacity-15 focus:ring-2 items-center gap-2">Pricing <IoArrowForwardOutline /></a>
        </div>
      </div>

      <div class="glass-container p-6 md:p-8 flex flex-col justify-between h-full w-full gap-6 basis-1/3">
        <div class="flex flex-row justify-between items-center">
          <img src="collegecarry.png" alt="College carry logo" width="100" height="50" />
          <div class="flex flex-row text-white text-2xl">
            <IoStarSolid />
            <IoStarSolid />
            <IoStarSolid />
            <IoStarSolid />
            <IoStarSolid />
          </div>
        </div>

        <div>
          <p class="text-xl text-wrap">"Love working with Simeon. He was able to clean up our website and enhance it for better customer experience. Always our companies go-to guy. Highly recommend."</p>
        </div>

        <div class="flex flex-row justify-between items-center">
          <div>
            <p class="text-blue-200">Medard</p>
            <p class="text-slate-400">CEO / College Carry</p>
          </div>
          <img src="reviewer.jpg" alt="CEO of College Carry" width="60" height="60" class="rounded-lg" />
        </div>
      </div>
    </section>
  );
});