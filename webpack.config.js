var path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src', 'public', 'entry.ts'),
    output: {
        path: path.join(__dirname, 'bundles'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
      },
    module: {
        loaders: [
            { test: /\.html$/, loader: 'html'},
            { test: /\.jpg$/, loader: "file-loader" },
            { test: /\.png$/, loader: "url-loader?mimetype=image/png" },
            { test: /\.tsx?$/, loader: 'ts-loader'},
            { test: /\.less$/, loader: 'style!css!less' },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            {
                test   : /\.woff|\.woff2|\.svg|.eot|\.ttf/,
                loader : 'url?prefix=font/&limit=10000'
            }
        ]
    }
};