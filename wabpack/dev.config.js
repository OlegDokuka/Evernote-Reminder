var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var assetsPath = path.resolve(__dirname, '../static/dist');

module.exports = {
    entry: './src/index.ts',
    output: {
        path: assetsPath,
        filename: 'app.bundle.js',
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, exclude: /node_modules/, loaders: ['ts-loader', 'tslint'] }
        ]
    },
    progress: true,
    resolve: {
        modulesDirectories: [
            'src',
            'node_modules',
            'bower_components'
        ],
        extensions: ['', '.json', '.ts', '.tsx', '.js']
    },
    tslint: {
        emitErrors: false,
        failOnHint: false,
        fileOutput: {
            dir: path.resolve(assetsPath, "..", "lint"),
            ext: "xml",
            clean: true,
            header: "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<checkstyle version=\"5.7\">",
            footer: "</checkstyle>"
        }
    },
}