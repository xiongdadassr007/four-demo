# four-demo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


练习简记
    登录账号密码
        admin
        123456
    1. 练习了登录路由守卫的设置
    2. 练习了路由导航的运用
    3. 遇到并解决的问题
        3-1. element-ui 中设置路由时重复点击相同路由跳转会报错问题 
                在路由中设置一段代码即可
        3-2. element-ui 中 Message组件的按需引入不同于普通组件 Vue.use(xxx)
                而是需要全局挂载，
                Vue.prototype.$message = Message
