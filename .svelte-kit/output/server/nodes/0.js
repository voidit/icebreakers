import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["app/immutable/nodes/0.BnIOaS9I.js","app/immutable/chunks/scheduler.BvLojk_z.js","app/immutable/chunks/index.CV0_RM8o.js"];
export const stylesheets = [];
export const fonts = [];
