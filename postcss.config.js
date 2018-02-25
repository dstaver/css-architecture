const isProd = process.env.NODE_ENV === 'production';

const plugins = [
  require('postcss-easy-import')({
    prefix: '_',
  }),
  require('postcss-nested'),
  require('tailwindcss')('./tailwind.js'),
  require('autoprefixer'),
];

if (isProd) {
  plugins.push(
    require('cssnano')({
      preset: 'default',
    })
  );
}

module.exports = {
  modules: false,
  plugins,
};
