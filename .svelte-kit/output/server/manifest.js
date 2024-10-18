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
		client: {"start":"app/immutable/entry/start.D73C9x1J.js","app":"app/immutable/entry/app.0CgKYkIZ.js","imports":["app/immutable/entry/start.D73C9x1J.js","app/immutable/chunks/entry.D29V-RB1.js","app/immutable/chunks/scheduler.BvLojk_z.js","app/immutable/entry/app.0CgKYkIZ.js","app/immutable/chunks/scheduler.BvLojk_z.js","app/immutable/chunks/index.DBrR8D_x.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
