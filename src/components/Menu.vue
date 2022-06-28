<template>
    <div class="menu-container">
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            :collapse="isCollapse"
        >
            <el-menu-item index="1" @click="$router.push('/home/user')">
                <i class="el-icon-user"></i>
                <span slot="title">用户管理</span>
            </el-menu-item>
            <el-menu-item index="2" @click="$router.push('/home/right')">
                <i class="el-icon-key"></i>
                <span slot="title">权限管理</span>
            </el-menu-item>
            <el-menu-item index="3" @click="$router.push('/home/goods')">
                <i class="el-icon-shopping-bag-1"></i>
                <span slot="title">商品管理</span>
            </el-menu-item>
            <el-menu-item index="4" @click="$router.push('/home/order')">
                <i class="el-icon-edit-outline"></i>
                <span slot="title">订单管理</span>
            </el-menu-item>
            <el-menu-item index="5" @click="$router.push('/home/system')">
                <i class="el-icon-setting"></i>
                <span slot="title">系统管理</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
    name: "Menu",
    data() {
        return {
            isCollapse: false,
        };
    },
    methods: {
        
    },
};
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>