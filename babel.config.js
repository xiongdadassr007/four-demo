module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset',
        ["@babel/preset-env", { "modules": false }]
    ],
    "plugins": [["component", // 删掉[]
        {
            "libraryName": "element-ui",
            "styleLibraryName": "theme-chalk"
        }
    ]]
}
