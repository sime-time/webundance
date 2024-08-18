import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { IoArrowForwardOutline } from "@qwikest/icons/ionicons";


interface PortfolioCardProps {
  screenshotSrc: string;
  websiteName: string;
  serviceProvided: string;
}
export default component$((props: PortfolioCardProps) => {
  return (
    <div class="relative group rounded-xl border border-slate-100/20">
      <img src={props.screenshotSrc} alt="portfolio client website" width="2880" height="3184" class="rounded-xl" />
      <Link href="/" class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl hidden md:flex flex-col-reverse ">
        <div class="bg-white text-black m-10 p-5 rounded-xl flex flex-col gap-4">
          <p class="text-base text-yellow-600">{props.serviceProvided}</p>
          <h2 class="text-3xl font-bold">{props.websiteName}</h2>
          <div class="relative inline-flex gap-2 justify-center cursor-pointer transition-colors px-5 py-2 border text-[#f7f7f7] bg-yellow-600 border-yellow-500 rounded-lg hover:bg-yellow-500 hover:border-yellow-300 hover:text-white  outline-none ring-yellow-300 focus:ring-2 focus:ring-offset-3 text-center items-center">Learn More <IoArrowForwardOutline /></div>
        </div>
      </Link>
    </div>
  );
});