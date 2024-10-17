import { c as create_ssr_component } from "../../chunks/ssr.js";
import { e as escape } from "../../chunks/escape.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let randomPrompt = "";
  return `<main><h1>${escape(randomPrompt)}</h1>  <label><input class="bubble" type="checkbox" name="dummy" value="on"></label></main>`;
});
export {
  Page as default
};
