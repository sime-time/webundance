import { component$, useSignal, $ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { IoMenuSharp, IoCloseSharp } from "@qwikest/icons/ionicons";
import Logo from "~/assets/logo.svg?jsx";
import FlyoutLink from "./FlyoutLink";

export interface NavItem {
  name: string;
  link: string;
}

export const navItems: NavItem[] = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Services", link: "/services" },
  { name: "Pricing", link: "/#pricing" },
  { name: "Portfolio", link: "/portfolio" },
];

export const navServices: NavItem[] = [
  { name: "Copywriting", link: "/services#copywriting" },
  { name: "Website Development", link: "/services#webdev" },
  { name: "AI Chatbot", link: "/services#aichatbot" },
]

export const NavServices = component$(() => {
  return (
    <ul class="flex flex-col">
      {navServices.map((item, index) => (
        <li key={index} class="p-4 [&:not(:first-child)]:border-t border-slate-100/20">
          <Link href={item.link} class="hover:text-yellow-300 inline-flex w-full">{item.name}</Link>
        </li>
      ))}
    </ul>
  );
});

export default component$(() => {

  const menuIsOpen = useSignal(false);
  const showMenuClass = useSignal("");

  const toggleMenu = $(() => {
    menuIsOpen.value = !menuIsOpen.value;

    if (menuIsOpen.value == true) {
      showMenuClass.value = "is-open";
    } else {
      showMenuClass.value = "";
    }
  });

  return (
    <nav class="mx-auto max-w-6xl font-medium text-white items-center flex flex-col w-full">
      <div class="py-4 px-4 md:py-6 flex flex-row flex-wrap justify-between w-full">

        <Link href="/">
          <div class="flex flex-row items-center gap-2 md:gap-4">
            <div class="h-16 w-16">
              <Logo />
            </div>
            <span class=" text-lg md:text-2xl text-yellow-300 font-bold tracking-wider">Webundance</span>
          </div>
        </Link>

        <div class="hidden md:flex w-auto static min-h-fit items-center px-5 bg-slate-800 bg-transparent z-20">
          <ul class="flex flex-row items-center gap-[4vw] text-base">
            {navItems.map((item, index) => (
              item.name.toLowerCase() === "services" ? (
                <li key={index}>
                  <FlyoutLink href={item.link} FlyoutContent={NavServices}>{item.name}</FlyoutLink>
                </li>
              ) : (
                <li key={index}>
                  <Link href={item.link} class="hover:text-yellow-300 py-4">{item.name}</Link>
                </li>
              )
            ))}
          </ul>
        </div>

        <div class="flex items-center gap-4">
          <button class="focus:ring-offset-3 relative hidden md:inline-flex h-fit w-fit rounded-lg border border-blue-100/20 bg-blue-200/10 px-4 py-2 text-blue-200 outline-none ring-yellow-300 transition-colors after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded-full after:bg-yellow-100 after:bg-opacity-0 after:blur-md after:transition-all after:duration-500 hover:border-yellow-200/40 hover:text-yellow-300 after:hover:bg-opacity-15 focus:ring-2">Contact</button>
          <div class="text-3xl cursor-pointer md:hidden" onClick$={toggleMenu}>{menuIsOpen.value ? <IoCloseSharp /> : <IoMenuSharp />} </div>
        </div>

      </div>

      <div class={`md:hidden w-[100vw] wrapper ${showMenuClass.value}`}>
        <ul class="flex flex-col text-xl inside-wrapper">
          {navItems.map((item, index) => (
            <li key={index} class="py-4 mx-4 border-b border-slate-100/40">
              <Link href={item.link} class="hover:text-yellow-300 inline-flex w-full">{item.name}</Link>
              {item.name.toLowerCase() === "services" ? (
                <div class="flex flex-col ml-8 mt-4 gap-4">
                  {navServices.map((item, index) => (
                    <span key={index}>
                      <Link href={item.link}>{item.name}</Link>
                    </span>
                  ))
                  }
                </div>
              ) : null
              }
            </li>
          ))}
          <li class="py-6 mx-4 w-auto">
            <button class="focus:ring-offset-3 relative text-center justify-center md:hidden inline-flex h-fit w-full rounded-lg border border-blue-100/20 bg-blue-200/10 px-4 py-2 text-blue-200 outline-none ring-yellow-300 transition-colors after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded-full after:bg-yellow-100 after:bg-opacity-0 after:blur-md after:transition-all after:duration-500 hover:border-yellow-200/40 hover:text-yellow-300 after:hover:bg-opacity-15 focus:ring-2">Contact</button>
          </li>

        </ul>
      </div>

    </nav>
  );
});
