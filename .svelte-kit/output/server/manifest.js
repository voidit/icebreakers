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
		client: {start:"app/immutable/entry/start.j4TjwvKN.js",app:"app/immutable/entry/app._ZqA-GY5.js",imports:["app/immutable/entry/start.j4TjwvKN.js","app/immutable/chunks/C5HoTWnN.js","app/immutable/chunks/B2QSKqcC.js","app/immutable/entry/app._ZqA-GY5.js","app/immutable/chunks/B2QSKqcC.js","app/immutable/chunks/D4CtbWbK.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
