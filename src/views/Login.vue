<template>
    <div class="login">
        <div id="login_box">
            <h2>LOGIN</h2>
            <div id="form">
                <div id="input_box">
                    <input
                        type="text"
                        placeholder="Username"
                        v-model="username"
                    />
                </div>
                <div id="input_box">
                    <input
                        type="password"
                        placeholder="Password"
                        v-model="password"
                    />
                </div>
            </div>
            <button id="sign_in" @click="handleLogin">Sign in</button>
            <br />
            <div id="sign_up">
                <a href="javascript:;">忘记密码?</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            username: "",
            password: "",
        };
    },
    methods: {
        handleLogin() {
            if (this.username === "admin" && this.password === "123456") {
                localStorage.setItem("token", 123);
                this.$router.push("/home/user");
                this.$message({
                    message: "登录成功",
                    type: "success",
                });
            } else {
                this.username = "";
                this.password = "";
                this.$message({
                    message: "账号密码错误，请重新登录",
                    type: "warning",
                });
            }
        },
    },
};
</script>

<style src="@/assets/css/login.css" scoped>
</style>
