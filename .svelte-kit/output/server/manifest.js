export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "app",
	appPath: "app",
	assets: new Set(["favicon.png","styles.css"]),
	mimeTypes: {".png":"image/png",".css":"text/css"},
	_: {
		client: {"start":"app/immutable/entry/start.CyPvTCQj.js","app":"app/immutable/entry/app.BQJPzuW1.js","imports":["app/immutable/entry/start.CyPvTCQj.js","app/immutable/chunks/entry.BblOhICh.js","app/immutable/chunks/scheduler.BvLojk_z.js","app/immutable/entry/app.BQJPzuW1.js","app/immutable/chunks/scheduler.BvLojk_z.js","app/immutable/chunks/index.CV0_RM8o.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
