

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["app/immutable/nodes/2.CwBt0-c1.js","app/immutable/chunks/scheduler.BvLojk_z.js","app/immutable/chunks/index.CV0_RM8o.js"];
export const stylesheets = [];
export const fonts = [];
