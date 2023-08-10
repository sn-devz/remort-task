module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    ['@babel/preset-env', {targets: {node: 'current'}}],
    '@babel/preset-typescript',
    '@babel/preset-react',
  ],
  plugins: ['react-native-reanimated/plugin', 'optional-require'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
