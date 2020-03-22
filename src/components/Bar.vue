<template>
    <div class="bar">
        <div class="btn">
            <router-link to="/bar/first"><el-button type="info">welcome</el-button></router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Bar"
    }
</script>

<style lang="less" scoped>
    .bar{
    }
    .btn{
        width: 300px;
        height: 300px;
        text-align: center;
        line-height: 300px ;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        background-color: #e5e8ef;
    }
</style>