export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "app",
	appPath: "app",
	assets: new Set(["bubble_wrap.mp3","data/prompts.json","favicon.png","styles.css"]),
	mimeTypes: {".mp3":"audio/mpeg",".json":"application/json",".png":"image/png",".css":"text/css"},
	_: {
		client: {start:"app/immutable/entry/start.Csxkj4PX.js",app:"app/immutable/entry/app.CFlgDZt0.js",imports:["app/immutable/entry/start.Csxkj4PX.js","app/immutable/chunks/DplEX2U8.js","app/immutable/chunks/B2QSKqcC.js","app/immutable/entry/app.CFlgDZt0.js","app/immutable/chunks/B2QSKqcC.js","app/immutable/chunks/D4CtbWbK.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
