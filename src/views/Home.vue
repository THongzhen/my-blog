<template>
    <div class="headerWrapper">
        <el-header class="header">
            <div class="container">
                <ul class="nav">
                    <li class="nav-item">
                        <router-link to="/First" exact-active-class="active" active-class="active" >博客</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/about" active-class="active">关于</router-link>
                    </li>
                </ul>
            </div>
        </el-header>

        <router-view></router-view>
    </div>
</template>

<script>

export default {
    name:'home',
    data(){
        return{


        }
    },
    created() {
    },
    watch:{
        '$route'(to,from){

        }
    }



}

</script>

<style lang="less" scoped>
    header {
        display: block;
    }
    .header{
        height: 80px!important;
        background-color: #fff;
        color: #fff;
        top: 0;
        left: 0;
        width: 100%;
        line-height: 80px;
        z-index: 100;
        position: relative;
        .container{
            padding: 0;
            height: 100%;
            box-sizing: border-box;
            border-bottom: 1px solid #dcdfe6;
        }
        .nav{
            width: 60%;
            float: right;
            height: 100%;
            line-height: 80px;
            background: transparent;
            padding: 0;
            margin: 0;
        }
        .nav-item{
            margin: 0;
            float: left;
            list-style: none;
            position: relative;
            cursor: pointer;
            a{
                text-decoration: none;
                color: #1989fa;
                opacity: 0.5;
                display: block;
                padding: 0 22px;
            }
            a:hover{
                opacity: 1;
            }
            a:focus{
                outline: -webkit-focus-ring-color auto 1px;
            }
            a.active{
                opacity: 1;
            }
            a.active:after {
                content: "";
                display: inline-block;
                position: absolute;
                bottom: 0;
                left: calc(50% - 15px);
                width: 30px;
                height: 2px;
                background: #409eff;
            }
        }
    }
    .container{
        width: 1140px;
        padding: 0;
        margin: 0 auto;
    }
    ul{
        display: block;
        list-style-type: disc;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 40px;
    }
    a {
        color: #409eff;
        text-decoration: none;
    }
</style>