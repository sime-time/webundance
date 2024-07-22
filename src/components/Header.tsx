import { component$ } from "@builder.io/qwik";
import Logo from "./Logo";

export default component$(() => {
  return (
    <header>
      <div class="w-24 h-24 flex-row">
        <a href="/">
          <Logo />
          <span class="sr-only">Home Page</span>
        </a>
        <span>Webundance.com</span>
      </div>
    </header>
  );
});
