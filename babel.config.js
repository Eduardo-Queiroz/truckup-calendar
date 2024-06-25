module.exports = function(api) {
  api.cache(true);

  const plugins = [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@truckup': './src',
        },
      },
    ],
  ];

  return {
    presets: ['babel-preset-expo'],
    plugins,
  };
};
