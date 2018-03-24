<template>
    <x-header :left-options="{backText: ''}">{{title}}</x-header>
</template>

<script>
    import { XHeader } from 'vux'
    export default {
        data () {
            return {
                msg: ''
            }
        },
        props:{
            title: {
              type: String,
              default: '放心学院'
            }
        },
        components:{
            XHeader
        }
    }
</script>

<style lang="less" scoped>

</style>
