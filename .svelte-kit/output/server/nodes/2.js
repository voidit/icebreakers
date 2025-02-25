

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["app/immutable/nodes/2.DyV0hph5.js","app/immutable/chunks/B2QSKqcC.js","app/immutable/chunks/D4CtbWbK.js"];
export const stylesheets = ["app/immutable/assets/2.omRuU-3J.css"];
export const fonts = [];
