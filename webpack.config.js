const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
              test: /\.tsx?$/,
              use: 'ts-loader',
              exclude: /node_modules/
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/react"],
                        plugins: [require('@babel/plugin-proposal-object-rest-spread')]
                    },
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                  'style-loader',
                  { loader: 'css-loader', options: { importLoaders: 1 } },
                  'postcss-loader'
                ]
              }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js', '.css' ]
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
};
