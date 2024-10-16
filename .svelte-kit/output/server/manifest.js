export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","styles.css"]),
	mimeTypes: {".png":"image/png",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.CjQn2D3M.js","app":"_app/immutable/entry/app.CGoKNLR6.js","imports":["_app/immutable/entry/start.CjQn2D3M.js","_app/immutable/chunks/entry.Dq8g0tic.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/entry/app.CGoKNLR6.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.6JLnsleE.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
