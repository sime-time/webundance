import { component$, useSignal } from "@builder.io/qwik";

interface AccordionProps {
  title: string
  content: string
}

export default component$((props: AccordionProps) => {
  const accordionIsOpen = useSignal(false);

  return (
    <div class="py-2">
      <button onClick$={() => accordionIsOpen.value = !accordionIsOpen.value} class="flex justify-between w-full">
        <span>{props.title}</span>
        {accordionIsOpen.value ? <span>-</span> : <span>+</span>}
      </button>
      <div class={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${accordionIsOpen.value ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div class="overflow-hidden">{props.content}</div>
      </div>
    </div>
  );
});