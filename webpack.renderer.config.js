const rules = require("./webpack.rules");

rules.push({
  test: /\.css$/,
  use: [{ loader: "style-loader" }, { loader: "css-loader" }],
});

rules.push({
  test: /\.s[ac]ss$/i,
  use: [
    { loader: "style-loader" },
    { loader: "css-loader" },
    { loader: "sass-loader" },
  ],
});

rules.push({
  test: /\.(png|jpe?g|gif|ico|svg)$/, // We will handle of these file extensions
  use: [
    {
      loader: "file-loader",
    },
  ],
});

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  },
};
