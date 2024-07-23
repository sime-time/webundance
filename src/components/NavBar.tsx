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
    { name: "Contact", link: "/contact" }
  ];

  const menuIsOpen = useSignal(false);
  const menuTop = useSignal("top-[-100%]");

  const toggleMenu = $(() => {
    menuIsOpen.value = !menuIsOpen.value;

    if (menuIsOpen.value == true) {
      menuTop.value = "top-[7%]";
    } else {
      menuTop.value = "top-[-100%]";
    }
  });


  return (
    <nav class="flex justify-between items-center w-[92%] mx-auto">
      <div class="h-16 w-16">
        <Link href="/"><Logo /></Link>
      </div>
      <div class={`md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 ${menuTop.value} md:w-auto w-full flex items-center px-5`}>
        <ul class="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link href={item.link} class="hover:text-gray-500">{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div class="flex items-center gap-6">
        <button class="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">View Pricing</button>
        <div class="text-3xl cursor-pointer md:hidden" onClick$={toggleMenu}>{menuIsOpen.value ? <IoCloseSharp /> : <IoMenuSharp />} </div>
      </div>
    </nav>
  );
});