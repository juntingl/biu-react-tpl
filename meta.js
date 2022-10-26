module.exports = {
  /**
   * 自定义 handlebars 的 helper 方法，给模板语言赋能
   */
  helpers: {
    if_or(v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this);
      }
      return options.inverse(this);
    }
  },
  // 用户输入的信息
  prompts: {
    name: {
      type: "string",
      required: true,
      message: "项目名"
    },
    template: {
      type: "select",
      required: "true",
      message: "Select a template",
      initial: 1,
      choices: [
        { title: "React", value: "react" },
        { title: "Vue", value: "vue" }
      ]
    },
    description: {
      type: "string",
      required: false,
      message: "项目描述",
      default: "React/Vue 项目"
    },
    author: {
      type: "string",
      message: "Author",
      required: false,
      default: ""
    },
    // router: {
    //   type: "confirm",
    //   message: "是否安装 react/vue-router？"
    // },
    // eslint: {
    //   type: "confirm",
    //   message: "是否使用 eslint？"
    // },
    // stylelint: {
    //   type: "confirm",
    //   message: "是否使用 stylelint？"
    // },
    // unit: {
    //   type: "confirm",
    //   message: "是否使用单元测试？"
    // },
    // e2e: {
    //   type: "confirm",
    //   message: "是否使用 e2e 测试？"
    // }
  },
  // 插件化时开启：定义文件与功能选项之间的映射关系，如果用户没有选择对应的功能，则某些文件将不会渲染。
  filters: {
  },
  // 创建成功时提示信息
  completeMessage: `{{#inPlace}}To get started:\n\n  yarn\n  yarn dev{{else}}To get started:\n\n  cd {{destDirName}}\n  yarn\n  yarn dev{{/inPlace}}`
};
