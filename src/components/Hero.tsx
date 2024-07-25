import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <section class="p-4 md:p-5 mx-auto max-w-6xl flex flex-row gap-6">
      <div>
        <h1 class="text-6xl">Fast websites designed to turn clicks into clients.</h1>
        <button class="relative justify-center cursor-pointer px-4 py-2 border bg-yellow-500 border-yellow-400 rounded-lg hover:bg-yellow-400 hover:border-yellow-300">Free Discovery Call</button>
      </div>
      <div class="glass-container p-3">
        <img src="./hero-review.png" alt="5 star review" width="800" height="800" />
      </div>
    </section>
  );
});