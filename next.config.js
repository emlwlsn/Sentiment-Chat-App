// importing Webpack module
const webpack = require('webpack');
require('dotenv').config();

// configuring Webpack to make environment variables available for use in React components
module.exports = {
    webpack: config => {
        const env = Object.keys(process.env).reduce((acc,curr) => {
            acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
            return acc;
        }, {});

        config.plugins.push(new webpack.DefinePlugin(env));

        return config;
    }
};

