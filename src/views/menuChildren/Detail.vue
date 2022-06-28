<template>
    <div class="detail-container">
        <h1>详情页 {{page}}</h1>
        <el-button type="info" plain @click="$router.back()">退出</el-button>
    </div>
</template>

<script>
export default {
    name: 'Detail',
    props: ['page']
}
</script>