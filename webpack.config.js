const HtmlWebPackPlugin = require('html-webpack-plugin');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const { argv } = require('yargs');
const {
  title,
  description,
} = require('./src/project.json');

const isProduction = argv.mode.toString() === 'production';
const isBrowserSync = argv.watch;

const plugins = [];

if (isProduction) {
  plugins.push(new CleanWebpackPlugin(['dist/*'], { exclude: ['.git'] }));
}

if (isBrowserSync) {
  const host = process.env.HOST || 'localhost';
  const port = process.env.PORT || 8080;
  const proxy = `http://${host}:${port}`;

  const browserSyncPlugin = () => new BrowserSyncPlugin({
    host,
    port,
    proxy,
  },
  {
    reload: false,
  });

  plugins.push(browserSyncPlugin());
}

plugins.push(
  new HtmlWebPackPlugin({
    favicon: (isProduction ? null : './src/resources/images/favicon.png'),
    template: './src/template.ejs',
    filename: './index.html',
  }),
);

plugins.push(
  new HtmlWebpackExternalsPlugin({
    externals: [
      {
        module: '@webcomponents',
        entry: [
          'webcomponentsjs/custom-elements-es5-adapter.js',
          'webcomponentsjs/webcomponents-loader.js',
        ],
      },
    ],
  }),
);

plugins.push(
  new MiniCssExtractPlugin({
    filename: (isProduction ? 'style.[chunkhash].css' : 'style.css'),
    chunkFilename: '[id].css',
  }),
);

module.exports = {
  output: {
    filename: (isProduction ? 'app.[hash].js' : 'app.js'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.ejs$/,
        use: [
          {
            loader: 'ejs-webpack-loader',
            options: {
              data: {
                title,
                description,
              },
              htmlmin: false,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(jpg|png|gif|svg|pdf|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/images/[name]-[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins,
};
