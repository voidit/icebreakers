

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["app/immutable/nodes/1.u6JapLGG.js","app/immutable/chunks/B2QSKqcC.js","app/immutable/chunks/D4CtbWbK.js","app/immutable/chunks/C5HoTWnN.js"];
export const stylesheets = [];
export const fonts = [];
