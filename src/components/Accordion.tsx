import { component$, useSignal, Slot, useTask$ } from "@builder.io/qwik";
import { useContext, useContextProvider, createContextId } from "@builder.io/qwik";
import type { QRL, Signal } from "@builder.io/qwik";
import { IoChevronDown } from "@qwikest/icons/ionicons"

interface AccordionProps {
  value?: number
  onChange$?: QRL<() => void>
}

export const AccordionContext = createContextId<Signal<number>>('accordion.context');

export default component$((props: AccordionProps) => {
  const selected = useSignal(props.value)
  useContextProvider(AccordionContext, selected);

  useTask$(({ track }) => {
    track(() => selected.value);
  });

  return (
    <ul {...props}>
      <Slot />
    </ul>
  );
});



interface AccordionItemProps {
  title: string
  value: number
}

export const AccordionItem = component$((props: AccordionItemProps) => {
  const selected = useContext(AccordionContext);
  const open = (selected.value === props.value);
  const domRef = useSignal<HTMLElement>()

  return (
    <li class="border-b" {...props}>
      <header role="button" onClick$={() => (selected.value = (open ? -1 : props.value))} class="flex justify-between items-center p-4 font-medium">
        {props.title}
        <IoChevronDown class={`transition-transform ${open ? "rotate-180" : ""}`} />
      </header>
      <div class="overflow-y-hidden transition-all" style={{ height: open ? domRef.value?.offsetHeight || "0" : "0" }}>
        <div class="pt-2 p-4" ref={domRef} ><Slot /></div>
      </div>
    </li>
  );
});