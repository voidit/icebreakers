

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["app/immutable/nodes/1.CDW4i4Hy.js","app/immutable/chunks/scheduler.BvLojk_z.js","app/immutable/chunks/index.DBrR8D_x.js","app/immutable/chunks/entry.DmjUYG2E.js"];
export const stylesheets = [];
export const fonts = [];
