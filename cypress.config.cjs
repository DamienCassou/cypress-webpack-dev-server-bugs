const { defineConfig } = require("cypress");
const webpackConfig = require("./webpack.config.cjs");
const {devServer} = require("@cypress/webpack-dev-server");

module.exports = defineConfig({
    component: {
	supportFile: "cypress/support/index.component.js",
	specPattern: "js/**/*.spec.component.js",
	devServer(cypressConfig) {
	    return devServer({ cypressConfig, webpackConfig });
        }
    },
});
