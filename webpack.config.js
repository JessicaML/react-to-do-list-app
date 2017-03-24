/* require webpack module - to use react, we need webpack to generate html, css and js files from our react modules */
var webpack = require('webpack');
/* module to make writing directory path names simpler. */
var path = require('path');

module.exports = {
  /* this gives line numbers when we get errors - makes debugging easier */
    devtool: 'inline-source-map',
    entry: [
        /* set server at localhost:8080*/
        'webpack-dev-server/client?http://127.0.0.1:8080/',
        /* allow live-reload when source files are changed (saves time) */
        'webpack/hot/only-dev-server',
        /* set initial file*/
        './src/index.js'
    ],

    output: {
        /* where files output to in production (not necessary here - but good practice) */
        path: path.join(__dirname, 'public'),
        /* generates bundle.js file which renders data to the page */
        filename: 'bundle.js'
    },
    resolve: {
      /* these are the files to be bundled */
        modulesDirectories: ['node_modules', 'src'],
        /* these are the files to be bundled - with .js extensions */
        extensions: ['', '.js']
    },
    module: {
        /* modules for loading application */
        loaders: [
        {
            /* we could use jsx files too - although we don't in this example */
            test: /\.jsx?$/,
            /* not using node_modules for loading application */
            exclude: /node_modules/,
            /* react-hot for live reloading, babel preset to set as JS 6 */
            loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
        }
        ]
    },
    plugins: [
        /* tplugin for live reloading */
        new webpack.HotModuleReplacementPlugin(),
        /* twebpack doesn't compile errors, so we can see the error in the console and fix */
        new webpack.NoErrorsPlugin()
    ]
};
