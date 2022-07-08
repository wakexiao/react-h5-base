/**
 * [description]
 * 使用过create-react-app（以下简称cra）的朋友都知道，这是react官方的一款脚手架工具，
 * 使用过内部集成了使用react-app-rewired,使用此插件可以暴露出webpack
 * 但是！react-app-rewired2.x以后，不再支持injectBabelPlugin的方式，需要安装customize-cra。
 * npm install customize-cra --save-dev
 * 所以新建config-overrides.js可以读取到该文件
 */
const {
  override,
  overrideDevServer,
  fixBabelImports,
  addPostcssPlugins,
  addLessLoader,
  // addDecoratorLegacy,
  addWebpackAlias,
  adjustStyleLoaders,
} = require('customize-cra');
const path = require("path");

module.exports = {
  /**
   * webpack 配置
   */
  webpack: override(
    /**
     * antd 按需加载
     * 如果使用 antd-mobile 2.x 的话可以在这里面配置一些按需加载（参考 atnd 官网配置），
     * 使用 5.x 的话官方建议是不需要按需加载了；
     * 因为 antd-mobile 支持基于 Tree Shaking 的按需加载，
     * 大部分的构建工具（例如 webpack 4+ 和 rollup）都支持 Tree Shaking
     */
    // fixBabelImports('import', {
    //   libraryName: 'antd-mobile',
    //   style: 'css',
    // }),
    /**
     * postcss-pxtorem 配置
     */
    addPostcssPlugins([
      require('postcss-pxtorem')({
        rootValue: 37.5, // (Number | Function) 表示根元素字体大小或根据input参数返回根元素字体大小
        unitPrecision: 5, // （数字）允许 REM 单位增长到的十进制数字
        propList: ['*'], // 可以从 px 更改为 rem 的属性 使用通配符*启用所有属性
        selectorBlackList: [], // （数组）要忽略并保留为 px 的选择器。
        replace: true, // 替换包含 rems 的规则，而不是添加回退。
        minPixelValue: 0, // 最小的转化单位
        exclude: /node_modules/i, // 要忽略并保留为 px 的文件路径
        // 具体参数可以看官方文档 https://github.com/cuth/postcss-pxtorem#options
      }),
    ]),
    /**
     * 支持 less 文件
     * [安装less 和 less-loader]
     * npm i less less-loader
     */
    addLessLoader({
      lessOptions: {
        javascriptEnabled: true,
        modifyVars: {}, // 更改 less 的一些变量，比如覆盖 antd 的主题颜色
      }
    }),
    // create-react-app 版本 5x 使用的是 webpack 5x，配置 less 需要新增下面 adjustStyleLoaders 配置
    adjustStyleLoaders(({ use: [, , postcss] }) => {
      const postcssOptions = postcss.options;
      postcss.options = { postcssOptions };
    }),
    // 支持装饰器写法
    // addDecoratorLegacy(),
    // 配置 alias
    addWebpackAlias({
      ['@']: path.resolve(__dirname, './src'),
    })
  ),
  /**
   * devServer 配置
   */
  devServer: overrideDevServer((config) => {
    return config;
  }),
};
