module.exports = {
  lintOnSave: false,
  transpileDependencies: [
    "vuetify","vuetify-datetime-picker"
  ],
  chainWebpack: (config) => {
    config.module
      .rule("ts")
      .use("ts-loader")
      .loader("ts-loader");
  },
  devServer: {
    proxy: "http://localhost:5000",
    disableHostCheck: true
  }
};
