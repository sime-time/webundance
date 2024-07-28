import { component$ } from "@builder.io/qwik";
import { IoStarSolid } from "@qwikest/icons/ionicons";

export default component$(() => {
  return (
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
  );
});