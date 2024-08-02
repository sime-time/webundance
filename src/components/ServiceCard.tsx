import { component$, Slot } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

interface ServiceCardProps {
  iconSvg: string;
  title: string;
  description: string;
  href: string;
}

export default component$((props: ServiceCardProps) => {
  return (
    <div class="glass-container p-6 md:p-8 flex flex-col gap-4 items-center text-center w-full md:w-1/3 justify-between">
      <span dangerouslySetInnerHTML={props.iconSvg}></span>
      <h2 class="text-3xl tracking-wide">{props.title}</h2>
      <p class="text-sm text-slate-400">{props.description}</p>
      <ul class="text-start list-disc text-blue-200 w-full px-8 md:w-fit flex flex-col gap-2">
        <Slot />
      </ul>
      <Link href={props.href} class="focus:ring-offset-3 relative inline-flex h-fit w-full rounded-lg border border-blue-100/20 bg-blue-200/10 px-6 py-3 text-blue-200 outline-none ring-yellow-300 transition-colors after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded-full after:bg-yellow-100 after:bg-opacity-0 after:blur-md after:transition-all after:duration-500 hover:border-yellow-200/40 hover:text-yellow-300 after:hover:bg-opacity-15 focus:ring-2 cursor-pointer justify-center">Learn More</Link>
    </div>
  )
});