const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withAntdLess = require('next-plugin-antd-less');
const withTM = require('next-transpile-modules')(['react-vant']);

const nextConfiguration = {
  eslint: {
    ignoreDuringBuilds: true
  }
};

/**
 * withPlugins docs https://github.com/cyrilwanner/next-compose-plugins
 */
module.exports = withPlugins(
  [
    [
      withAntdLess,
      {
        /**
         * @see https://github.com/SolidZORO/next-plugin-antd-less
         */
        modifyVars: {
          // 全部样式变量 https://github.com/3lang3/react-vant/blob/main/src/styles/themes/default.less
          '@brand-color': '#ef5350'
        }
      }
    ],
    withImages,
    withTM
  ],
  nextConfiguration
);
