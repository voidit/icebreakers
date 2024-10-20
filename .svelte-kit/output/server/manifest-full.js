export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "app",
	appPath: "app",
	assets: new Set(["data/prompts.json","favicon.png","styles.css"]),
	mimeTypes: {".json":"application/json",".png":"image/png",".css":"text/css"},
	_: {
		client: {"start":"app/immutable/entry/start.D8SYUf23.js","app":"app/immutable/entry/app.CLesAQjt.js","imports":["app/immutable/entry/start.D8SYUf23.js","app/immutable/chunks/entry.DmjUYG2E.js","app/immutable/chunks/scheduler.BvLojk_z.js","app/immutable/entry/app.CLesAQjt.js","app/immutable/chunks/scheduler.BvLojk_z.js","app/immutable/chunks/index.DBrR8D_x.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
