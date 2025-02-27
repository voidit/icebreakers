export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "app",
	appPath: "app",
	assets: new Set(["CNAME","bubble_wrap.mp3","data/prompts.json","favicon.png","styles.css"]),
	mimeTypes: {".mp3":"audio/mpeg",".json":"application/json",".png":"image/png",".css":"text/css"},
	_: {
		client: {start:"app/immutable/entry/start.CaO5rE9J.js",app:"app/immutable/entry/app.D1MkXX10.js",imports:["app/immutable/entry/start.CaO5rE9J.js","app/immutable/chunks/BIX_wMtm.js","app/immutable/chunks/B2QSKqcC.js","app/immutable/entry/app.D1MkXX10.js","app/immutable/chunks/B2QSKqcC.js","app/immutable/chunks/D4CtbWbK.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			
		],
		routes: [
			
		],
		prerendered_routes: new Set(["/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
