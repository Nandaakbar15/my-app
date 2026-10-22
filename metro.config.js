const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

// Add svg to asset extensions list, remove from source extensions
const { transformer, resolver } = config;

config.transformer = {
  ...transformer,
  babelTransformerPath: require.resolve("react-native-svg-transformer/expo"),
};

config.resolver = {
  ...resolver,
  // Remove svg from assetExts so Metro doesn't treat it as a static asset
  assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
  // Add svg to sourceExts so Metro transforms it as a module
  sourceExts: [...resolver.sourceExts, "svg"],
};

module.exports = config;
