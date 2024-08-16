import { component$ } from "@builder.io/qwik";
import { IoStarSolid } from "@qwikest/icons/ionicons";

interface ReviewCardProps {
  logoSrc: string;
  review: string;
  name: string;
  position: string;
  profilePicSrc: string;
}
export default component$((props: ReviewCardProps) => {
  return (
    <div class="glass-container p-6 md:p-8 flex flex-col justify-between h-full w-full gap-6 basis-1/3">
      <div class="flex flex-row justify-between items-center">
        <img src={props.logoSrc} alt="Client logo" width="100" height="50" class="rounded-xl" />
        <div class="flex flex-row text-white text-2xl">
          <IoStarSolid />
          <IoStarSolid />
          <IoStarSolid />
          <IoStarSolid />
          <IoStarSolid />
        </div>
      </div>

      <div>
        <p class="text-xl text-wrap">{props.review}</p>
      </div>

      <div class="flex flex-row justify-between items-center">
        <div>
          <p class="text-blue-200">{props.name}</p>
          <p class="text-slate-400">{props.position}</p>
        </div>
        <img src={props.profilePicSrc} alt="reviewer" width="60" height="60" class="rounded-lg" />
      </div>
    </div>
  );
});