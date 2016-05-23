var path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src', 'public', 'entry.ts'),
    output: {
        path: path.join(__dirname, 'src', 'public'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
      },
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: 'ts-loader'},
            { test: /\.less$/, loader: 'style!css!less' }
        ]
    }
};