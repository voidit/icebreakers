

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["app/immutable/nodes/2.BAQAS5j8.js","app/immutable/chunks/scheduler.BvLojk_z.js","app/immutable/chunks/index.DBrR8D_x.js"];
export const stylesheets = [];
export const fonts = [];
