/*
 * @Author: Luenci
 * @Date: 2022-12-01 09:47:43
 * @LastEditors: Luenci
 * @LastEditTime: 2022-12-01 16:05:48
 * @FilePath: \vue-study\babel.config.js
 * @Description:
 *
 * Copyright (c) 2022 by Luenci, All Rights Reserved.
 */
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "component",
      {
        libraryName: "element-ui",
        styleLibraryName: "theme-chalk",
      },
    ],
  ],
};
