const path = require("path");
const SRC_PATH = path.join(__dirname, "../src");
const NEXT = path.join(__dirname, "../src/pages");
const JEST = path.join(__dirname, "../src/components/__tests__");

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: [SRC_PATH],
    exclude: [NEXT, JEST],
    use: [
      {
        loader: require.resolve("awesome-typescript-loader"),
        options: {
          configFileName: "./tsconfig.test.json"
        }
      }
    ]
  });
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
