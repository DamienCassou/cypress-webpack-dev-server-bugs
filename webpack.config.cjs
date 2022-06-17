const path = require("path");
const webpack = require("webpack");

let config = {
    entry: "./main.js",
    mode: "development",
    output: {
	path: path.resolve(__dirname, "build"),
    }
};

module.exports = config;
