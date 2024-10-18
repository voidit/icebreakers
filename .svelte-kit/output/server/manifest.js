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
		client: {"start":"app/immutable/entry/start.DdatQN4P.js","app":"app/immutable/entry/app.BPisWg74.js","imports":["app/immutable/entry/start.DdatQN4P.js","app/immutable/chunks/entry.CFQ6W_RK.js","app/immutable/chunks/scheduler.BvLojk_z.js","app/immutable/entry/app.BPisWg74.js","app/immutable/chunks/scheduler.BvLojk_z.js","app/immutable/chunks/index.DBrR8D_x.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
