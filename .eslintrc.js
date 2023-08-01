module.exports = {
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "rules": {
    "no-var": 2, // 禁止使用var
    "no-debugger": 2,// 禁止使用debugger
    "no-empty": 2,// 块语句中的内容不能为空
    "no-ex-assign": 2,// 禁止给catch语句中的异常参数赋值
    "no-extra-parens": 2,// 禁止非必要的括号
    "no-extra-semi": 2,// 禁止多余的冒号
    "@typescript-eslint/indent": ["error", 2],// 缩进 为2
    "no-func-assign": 2,// 禁止重复的函数声明
    "no-implicit-coercion": 1,// 禁止隐式转换
    "new-parens": 2,// new时必须加小括号
    "prefer-const": 2,// 首选const
    "quotes": 2,// 引号类型 `` "" '' [1, "single"],//引号类型 `` "" ''
    "radix": 2,// parseInt必须指定第二个参数
    "semi": [2, "always"],// 语句强制分号结尾
    "semi-spacing": [2, { "before": false, "after": true }],// 分号前后空格
    "spaced-comment": 2,// 注释风格要不要有空格什么的
    "no-lone-blocks": 2,// 禁止不必要的嵌套块
    "no-irregular-whitespace": 2,// 不能有不规则的空格
    "no-invalid-this": 2,// 禁止无效的this，只能用在构造器，类，对象字面量

  },
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": { "modules": true },
  },
};
