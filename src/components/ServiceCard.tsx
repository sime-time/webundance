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
      <Link href={props.href} class="focus:ring-offset-3 relative inline-flex h-fit w-full rounded-lg border border-yellow-300 text-yellow-300 bg-yellow-600/20 px-6 py-3 outline-none ring-yellow-300 transition-colors  focus:ring-2 cursor-pointer justify-center hover:border-yellow-400 hover:text-yellow-200 hover:bg-yellow-600/80">See how this works</Link>
    </div>
  )
});