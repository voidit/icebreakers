import { c as create_ssr_component } from "../../chunks/ssr.js";
import { e as escape } from "../../chunks/escape.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let randomPrompt = "";
  return `<main><h1>${escape(randomPrompt)}</h1> <button data-svelte-h="svelte-9pjd3u">Shuffle</button></main>`;
});
export {
  Page as default
};
