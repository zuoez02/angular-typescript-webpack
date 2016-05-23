module.exports = {
    entry: './src/public/entry.ts',
    output: {
        path: __dirname + '/src/public/',
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
      },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.tsx?$/, loader: 'ts-loader'},
            { test: /\.less$/, loader: "style!css!less" }
        ]
    }
};