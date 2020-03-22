<template>
    <div class="headerWrapper">
        <el-header class="header">
            <div class="container">
                <h2>
                    <router-link to="/bar">MyBlog</router-link>
                </h2>
                <ul class="nav">
                    <li class="nav-item">
                        <router-link to="/bar/first" active-class="active" >首页</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/bar/first" active-class="active">未开放</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/bar/first" active-class="active">未开放</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/bar/first" active-class="active">未开放</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/bar/first" active-class="active">未开放</router-link>
                    </li>
                </ul>
            </div>
        </el-header>
        <router-view>

        </router-view>
    </div>
</template>

<script>
  export default {
      name:'app',
      components:{
      }
  }

</script>

<style lang="less" scoped>
    header {
        display: block;
    }
    .header{
        padding: 10px 5px;
        height: 60px!important;
        background-color: #fff;
        color: #fff;
        top: 0;
        left: 0;
        width: 100%;
        line-height: 60px;
        z-index: 100;
        position: relative;
        border-bottom: 1px solid #e5e8ef;
        box-shadow: 0 1px 3px 0 #e9f1f8;
        .container{
            padding: 0;
            width: 100%;
            height: 100%;
            box-sizing: border-box;
        }
        h2{
            position: absolute;
            left: 20px;
            top: 0px;
            margin: 0;
            float: left;
            font-weight: 400;
        }
        .nav{
            position: absolute;
            right: 50px;
            top: 0px;
            width: 35%;
            height: 100%;
            line-height: 50px;
            background: transparent;
            padding: 0;
            margin: 0;
        }
        .nav-item{
            float: left;
            list-style: none;
            position: relative;
            margin: 0 22px;
            a{
                text-decoration: none;
                color: #2c3e50;
                opacity: 0.5;
                cursor: pointer;
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

    a {
        color: #2c3e50;
        text-decoration: none;
    }
</style>
