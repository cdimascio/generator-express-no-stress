module.exports = {
  webpack: (config, options) => {
    config.entry.main = [
      './server/index.js',
    ];
    return config;
  },
};
