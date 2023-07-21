module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            'components': './src/components',
            'enums': './src/enums',
            'functions': './src/functions',
            'hooks': './src/hooks',
            'providers': './src/providers',
            'services': './src/services',
            'theme': './src/theme',
            'views': './src/views',
          },
        },
      ],
    ],
  };
};