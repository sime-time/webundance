import { Slot, component$, useSignal } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import type { Component } from "@builder.io/qwik";
import { IoChevronDown } from "@qwikest/icons/ionicons";

interface DropdownLinkProps {
  href: string;
  DropdownContent: Component;
}

export default component$<DropdownLinkProps>(({ href, DropdownContent }) => {

  const isOpen = useSignal(false);

  return (
    <div
      onMouseEnter$={() => (isOpen.value = true)}
      onMouseLeave$={() => (isOpen.value = false)}
      class="relative h-fit w-fit"
    >
      <Link href={href} class="hover:text-yellow-300 py-4 relative flex flex-row items-center gap-2">
        <Slot />
        <span
          style={{ transform: isOpen.value ? "rotate(-180deg)" : "rotate(0)" }}
          class="transition-transform duration-500"
        >
          <IoChevronDown />
        </span>
      </Link>
      {isOpen.value &&
        <div class="absolute left-1/2 top-12 -translate-x-1/2 rounded-xl border border-slate-100/20 bg-slate-200/10 backdrop-blur-xl">
          <DropdownContent />
        </div>
      }
    </div>
  );

});

