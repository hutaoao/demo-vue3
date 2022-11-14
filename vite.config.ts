import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  /**
   * 在生产中服务时的基本公共路径。
   * @default '/'
   */
  base: "/demo-vue3",
  // 引入第三方的配置
  //   optimizeDeps: {
  //     include: ["moment", "echarts", "axios", "mockjs"],
  //   },
  // 打包配置
  build: {
    target: "modules",
    outDir: "docs", //指定输出路径
    assetsDir: "assets", // 指定生成静态资源的存放路径
  },
  // 本地运行配置，及反向代理配置
  server: {
    port: 8089,
    host: "0.0.0.0",
    // 是否开启 https
    https: false,
    cors: true, // 默认启用并允许任何源
    open: true, // 在服务器启动时自动在浏览器中打开应用程序
    //反向代理配置，注意rewrite写法，开始没看文档在这里踩了坑
    proxy: {
      "/api": {
        target: "http://192.168.99.223:3000", //代理接口
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
