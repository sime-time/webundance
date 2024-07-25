import { component$, useSignal, $ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { IoMenuSharp, IoCloseSharp } from "@qwikest/icons/ionicons";
import Logo from "./Logo";

interface NavItem {
  name: string;
  link: string;
}

export default component$(() => {

  const navItems: NavItem[] = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Portfolio", link: "/portfolio" },
  ];

  const menuIsOpen = useSignal(false);
  const menuLeft = useSignal("left-[-100%]");

  const toggleMenu = $(() => {
    menuIsOpen.value = !menuIsOpen.value;

    if (menuIsOpen.value == true) {
      menuLeft.value = "left-0";
    } else {
      menuLeft.value = "left-[-100%]";
    }
  });


  return (
    <nav class="p-4 md:p-6 mx-auto max-w-6xl flex flex-row justify-between font-medium text-white items-center">
      <div class="w-16 h-16">
        <Link href="/"><Logo /> </Link>
      </div>
      <div class={`md:static absolute md:min-h-fit min-h-[70vh] transition-[left] ${menuLeft.value} md:w-auto w-full flex items-center px-5 top-[12%] bg-slate-800 md:bg-transparent`}>
        <ul class="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-16 text-xl md:text-base">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link href={item.link} class="hover:text-gray-300 py-4">{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div class="flex items-center gap-6">
        <button class="focus:ring-offset-3 relative inline-flex h-fit w-fit rounded-full border border-blue-100/20 bg-blue-200/10 px-4 py-2 text-blue-200 outline-none ring-yellow-300 transition-colors after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded-full after:bg-yellow-100 after:bg-opacity-0 after:blur-md after:transition-all after:duration-500 hover:border-yellow-200/40 hover:text-yellow-300 after:hover:bg-opacity-15 focus:ring-2">Contact</button>
        <div class="text-3xl cursor-pointer md:hidden" onClick$={toggleMenu}>{menuIsOpen.value ? <IoCloseSharp /> : <IoMenuSharp />} </div>
      </div>
    </nav>
  );
});