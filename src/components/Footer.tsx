import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import Logo from "~/assets/logo.svg?jsx";
import type { NavItem } from "./Navbar";
import { navItems, navServices } from "./Navbar";
import { IoMailSolid, IoLocationSharp } from "@qwikest/icons/ionicons";


export default component$(() => {

  return (
    <footer class="flex flex-col">
      <div class="mx-auto max-w-6xl w-full flex flex-col md:flex-row gap-3 md:gap-8 justify-between items-center md:items-start border-t border-slate-100/20">

        <div class="flex flex-col gap-3 text-center md:text-left items-center md:items-start w-full py-4">
          <div class="h-12 w-12">
            <Logo />
          </div>
          <h3 class="text-lg font-bold tracking-wider text-yellow-300">Webundance</h3>
          <p class="w-[80%] md:w-full text-slate-400">Indianapolis website and copywriting services for small to medium-sized businesses.</p>
        </div>

        <div class="text-center md:text-left w-full border-t md:border-none border-slate-100/20 py-3 md:pl-16">
          <h3 class="font-bold mb-3 text-lg">Browse</h3>
          <ul class="flex flex-row md:flex-col justify-evenly">
            {navItems.map((item: NavItem, index) => (
              item.name.toLowerCase() !== "services" ? (
                <li key={index}>
                  <Link href={item.link} class="text-slate-400 hover:text-slate-100 inline-flex flex-col py-3 md:py-2 w-full md:w-fit">{item.name}</Link>
                </li>
              ) : null
            ))}
          </ul>
        </div>

        <div class="text-center md:text-left w-full border-t md:border-none border-slate-100/20 py-3">
          <h3 class="font-bold mb-3 text-lg"><Link href="/#our-services">Services</Link></h3>
          <ul class="flex flex-col">
            {navServices.map((item: NavItem, index) => (
              item.name.toLowerCase() !== "services" ? (
                <li key={index}>
                  <Link href={item.link} class="text-slate-400 hover:text-slate-100 inline-flex flex-col py-3 md:py-2 w-full md:w-fit">{item.name}</Link>
                </li>
              ) : null
            ))}
          </ul>
        </div>

        <div class="text-center md:text-left w-full border-t md:border-none border-slate-100/20 py-3">
          <h3 class="font-bold mb-3 text-lg"><Link href="/contact">Contact</Link></h3>
          <ul class="flex flex-col items-center md:items-start">
            <li>
              <a href="mailto:contact@webundance.com" class="text-slate-400 hover:text-slate-100 inline-flex flex-row gap-2 py-3 md:py-2 w-full md:w-fit items-center"><IoMailSolid /> contact@webundance.com</a>
            </li>
            <li>
              <span class="text-slate-400 hover:text-slate-100 inline-flex flex-row gap-2 py-3 md:py-2 w-full md:w-fit items-center"><IoLocationSharp /> Indianapolis, Indiana</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="bg-blue-200/10 py-3 border-t border-slate-100/20">
        <div class="mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; 2024 Webundance. All Rights Reserved.</p>
          <div><Link href="/">Privacy Policy</Link></div>
        </div>
      </div>
    </footer>
  );
});