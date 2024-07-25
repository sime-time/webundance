import { component$ } from "@builder.io/qwik";

import HeroReview from "../assets/hero-review.png?jsx";

export default component$(() => {
  return (
    <section class="p-4 md:p-5 mx-auto max-w-6xl flex flex-row gap-4">
      <div>
        <h1 class="text-6xl font-bold">Fast websites designed to turn visitors into clients.</h1>
      </div>
      <div class="glass-container px-5">
        <HeroReview style={{ width: '900px' }} />
      </div>
    </section>
  );
});