module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    ['@babel/preset-env', {targets: {node: 'current'}}],
    '@babel/preset-typescript',
    '@babel/preset-react',
  ],
  plugins: [[
    'module-resolver',
    {
      root: ['./src'], // Adjust this path to your project structure
      alias: {
        '@components': './src/components', // Example alias
        '@screens': './src/screens', 
        '@assets':'./src/assets',
        '@utils':'./src/utils',
        '@hooks':'./src/hooks'

        // Another example alias
        // Add more aliases as needed
      },
    }],
    'react-native-reanimated/plugin',
    'optional-require',
  ],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
