import { component$ } from "@builder.io/qwik";
import Navbar from "../components/Navbar";

export default component$(() => {
  return (
    <header>
      <Navbar />
    </header>
  );
});
