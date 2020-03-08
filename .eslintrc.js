/*
 * @Descripttion: ilovejwl
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2020-01-18 18:24:21
 * @LastEditTime : 2020-02-04 09:06:51
 * @LastEditors  : ilovejwl
 */
module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: 'standard',
  plugins: ['html'],
  env: {
    // 环境
    browser: true, // 浏览器环境
    node: true, // node环境
    es6: true,
    commonjs: true,
  },
  globals: {
    // 设置全局变量
    $: true,
    layui: true,
    layer: true,
    okLoading: true,
    echarts: true,
    ClassicEditor: true,
    UE: true,
  },
  rules: {
    // 用来覆盖 extends : 'standrad'中标准的规则
    indent: ['error', 2], // indent 表示缩进的规则， error表示重要性，4表示使用4个空格缩进
    'eol-last': ['error', 'never'], // eol-last 表示最后一行要换行， never 表示不需要换行
    'func-call-spacing': ['error', 'always'],
    semi: ['error', 'always'],
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false,
      },
    ],
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],
    'no-tabs': ['error', {allowIndentationTabs: true}],
    'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
    'no-new': 'off',
    'no-caller': 'off',
  },
};
