const path = require('path');

module.exports = {
  webpack: {
    alias: {},
    plugins: [],
    configure: {
      resolve: {
        fallback: {
          "crypto": require.resolve("crypto-browserify"),
        },
      },
    },
  },
};

// eslint-disable-next-line
