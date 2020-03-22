<template>
    <div >
        {{address}}
    </div>
</template>

<script>

    export default {
        name: "Test",
        data(){
            return{

                address:""
            }
        },
        props:['msg'],
        mounted() {
            this.address = this.msg
        },
        watch: {
            $route:{
                handler:function(val){
                    this.address = this.msg
                }
            }
        },



    }
</script>

<style scoped>

</style>