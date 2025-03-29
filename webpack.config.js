module.exports = {
  // ...existing code...
  module: {
    rules: [
      // ...existing rules...
      {
        test: /\.js$/,
        enforce: 'pre',
        exclude: /node_modules\/jspdf/,
        use: ['source-map-loader'],
      },
    ],
  },
  // ...existing code...
};