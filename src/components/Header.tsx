import { component$ } from "@builder.io/qwik";
import Navbar from "./Navbar";

export default component$(() => {
  return (
    <header>
      <Navbar />
    </header>
  );
});
