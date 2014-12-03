
module.exports = {
    entry: {
        app: "./lib/index"
    },
    output: {
        path: './static/build',
        filename: '[name].js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.styl$/, loader: 'style!css!stylus' },
            { test: /\.jsx$/, loader: "jsx" },
            { test: /\.png$/, loader: 'url?limit=100000&minetype=image/png' },
            { test: /\.jpg$/, loader: 'file' }
        ]
    },
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".js", ".jsx"],
        modulesDirectories: ['node_modules', "."]
    }
};