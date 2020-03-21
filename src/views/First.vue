<template>
    <div class="main-one">
        <el-row :gutter="30">
            <el-col :span="12">
                <div class="grid-content1 bg-purple">
                    <el-menu>
                        <el-menu-item class="main-context" v-for="item,index in data" :key="item.id">
                            <div class="main-context1">
                                <div class="info-box">
                                    <div class="info-row">
                                        <div class="main-context-title">
                                            {{data[index].title}}
                                        </div>
                                        <div class="main-context-msg">
                                            {{data[index].msg}}
                                        </div>
                                    </div>
                                </div>
                                <div class="info-img">

                                </div>
                            </div>
                        </el-menu-item>
                    </el-menu>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content2 bg-purple-light">
                    ###展示区
                    <router-view></router-view>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "First",
        data(){
            return{
                msg:"123",
                data:[
                    {
                        id:1,
                        title:"测试标题",
                        msg:"内容啊啥事都塞哦你电脑哦啊是娘娘四到撒旦哦i撒打阿三打撒撒旦算可能都苦恼"
                    },
                    {
                        id:2,
                        title:"spring boot",
                        msg:"内容啊啥事都塞哦你电脑哦啊是娘娘四到撒旦哦i撒打阿三打撒撒旦算可能都苦恼"
                    },
                ]
            }
        },
    }
</script>

<style lang="less" scoped>
    .main-one{
        width: 1140px;
        height: 600px;
        padding: 0;
        margin: 0 auto;
        /*background-color: black;*/
        /*border: 1px solid antiquewhite;*/
    }
    .main-context{
        width: 100%;
        height: 100px;
        /*border: 1px solid black;*/
        border-bottom: 1px solid #EBEEF5;
        border-left: 1px solid #EBEEF5;

        cursor: pointer;
        padding: 0!important;
    }
    .main-context1{
        padding: 10px 25px;
        display: flex;
    }
    .main-context:hover{
        background-color: #ecf5ff;
    }
    .grid-content1 {
        border-radius: 4px;
        min-height: 800px;
    }
    .grid-content2 {
        border-radius: 4px;
        min-height: 800px;
    }
    .bg-purple {
        /*background: #d3dce6;*/
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .info-box{
        line-height: 50px;
        width: 80%;
        height: 100%;
        flex: 1 1 auto;
        display: flex;
        overflow: hidden;
        .info-row{
            max-width: 430px;
        }

    }
    .info-img{
        width: 60px;
        height: 60px;
        padding-top:  4px;
    }

    .main-context-title{
        height: 20px;
        line-height: 20px;
        font-weight: 800;
        font-size: 16px;
        padding: 10px 10px 5px 0px ;
    }
    .main-context-msg{
        font-size: 13px;
        color: #b2bac2;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        height: 18px;
        line-height: 18px;
        padding: 10px 10px 5px 0px ;
    }

</style>