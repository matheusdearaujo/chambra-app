module.exports = function (api) {
	api.cache(true);
	return {
		presets: ["babel-preset-expo"],
		plugins: [
			"react-native-paper/babel",
			[
				"module-resolver",
				{
					root: ["./src"],
					alias: {
						_pages: "./src/pages",
						_navigation: "./src/navigation",
						_config: "./src/config",
						_shared: "./src/shared",
						_theme: "./src/theme",
						_assets: "./src/assets",
						_redux: "./src/redux",
					},
				},
			],
		],
	};
};
