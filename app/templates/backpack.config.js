const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  webpack: (config, options) => {
    config.entry.main = ['./server/index.js'];

    config.plugins.push(
      new CopyWebpackPlugin(
        [
          {
            from: 'server/common/swagger/Api.yaml',
            to: 'server/common/swagger/Api.yaml',
          },
        ],
        options
      )
    );

    return config;
  },
};
