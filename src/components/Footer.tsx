import { component$ } from "@builder.io/qwik";
import Logo from "./Logo";

export default component$(() => {
  return (
    <footer>
      <div class="w-24 h-24">
        <a href="/">
          <Logo />
          <span class="sr-only">Home Page</span>
        </a>
      </div>
    </footer>
  );
});