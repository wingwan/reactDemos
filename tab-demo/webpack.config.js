
var path = require('path');

var config = {
    entry: [path.resolve(__dirname, 'tab-demo/app/js/index.js')],
    output: {
        path: path.resolve(__dirname, 'tab-demo/build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/ }

        ]
    }
};

module.exports = config;