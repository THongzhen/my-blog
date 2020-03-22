<template>
    <div class="main-one" style="">
        <el-row :gutter="30">
            <el-col :span="6">
                <div class="grid-content1">
                    <el-menu>
                        <el-menu-item class="main-context" v-for="item,index in data" :key="item.id">
                            <router-link :to="{ name: 'test', params: { id: index }}">
                                <div class="main-context1">
                                    <div class="info-box">
                                        <div class="info-row">
                                            <div class="main-context-title">
                                                {{data[index].title}}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="info-img">

                                    </div>
                                </div>
                            </router-link>

                        </el-menu-item>
                    </el-menu>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content2">
                    ###展示区
                    <router-view :msg="address"></router-view>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import MarkDownn from "./MarkDownn";

    export default {
        name: "First",
        components: {MarkDownn},
        data(){
            return{
                inputVal:"1",
                msg:"123",
                address:"",
                data:[
                    {
                        id:1,
                        title:"springboot",
                        address:"测试内容"
                    },
                    {
                        id:2,
                        title:"markdown",
                        address:"测试内容2"
                    },
                ]

            }
        },
        methods:{
        },
        watch: {
            $route:{
                handler:function(val){
                    var id = val.params.id
                    console.log(id)
                    this.address = this.data[id].address
                    console.log(this.address)
                }
            }
        },

    }
</script>

<style lang="less" scoped>
    .main-one{
        width: 100%;
        height: 1600px;
        padding: 0;
        margin: 0 auto;
        overflow:auto
        /*background-color: black;*/
        /*border: 1px solid antiquewhite;*/
    }
    .el-row{
        height: 1600px;
    }
    .main-context{
        width: 100%;
        height: 55px;
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
        text-align: left;
        border-radius: 4px;
        height: 1600px;
        border: 1px solid  #e5e8ef ;
    }
    .info-box{
        line-height: 50px;
        width: 80%;
        height: 100%;
        flex: 1 1 auto;
        display: flex;
        overflow: hidden;
        .info-row{
            width: 100%;
        }

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
    a{
        text-decoration: none;
        color: #2c3e50;
        opacity: 0.5;
        /*display: block;*/
        /*margin: 0 22px;*/
        cursor: pointer;
    }
</style>