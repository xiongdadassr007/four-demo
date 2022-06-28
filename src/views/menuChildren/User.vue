<template>
    <div class="user-container">
        <el-table :data="tableData" style="width: 100%">
            <el-table-column label="#">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.num }}</span>
                </template>
            </el-table-column>
            <el-table-column label="姓名">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.name }}</span>
                </template>
            </el-table-column>
            <el-table-column label="年龄">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.age }}</span>
                </template>
            </el-table-column>
            <el-table-column label="头衔">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.nickname }}</span>
                </template>
            </el-table-column>
            
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                        size="mini"
                        @click="handleDetail(scope.$index, scope.row)"
                        >详情</el-button
                    >
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    name: "User",
    data() {
        return {
            tableData: [
                {
                    num: 1,
                    name: "嬴政",
                    age: 18,
                    nickname: '秦始皇'
                },
                {
                    num: 2,
                    name: "李斯",
                    age: 35,
                    nickname: '丞相'
                },
                {
                    num: 3,
                    name: "吕不韦",
                    age: 50,
                    nickname: '商人'
                },
                {
                    num: 4,
                    name: "赵姬",
                    age: 48,
                    nickname: '王太后'
                },
                
            ],
        };
    },
    methods: {
        handleDetail(index, row) {
            // 第一个参数为每行索引值，第二个参数为行对象
            // console.log(index, row);
            this.$router.push('/home/detail/'+ index)
        },
    },
};
</script>

<style lang="less" scoped>
el-table-column {
    width: 20%;
}
</style>