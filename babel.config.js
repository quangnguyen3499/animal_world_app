module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@assets': './src/assets',
          '@core': './src/core',
          '@navigation': './src/navigation',
          '@resources': './src/resource',
          '@screens': './src/screens',
          '@shared-view': './src/shared-view',
          '@shared-state': './src/shared-state',
        }
      }
    ]
  ]
};
