import { component$ } from "@builder.io/qwik";
import NavBar from "./NavBar";

export default component$(() => {
  return (
    <header>
      <NavBar />
    </header>
  );
});
