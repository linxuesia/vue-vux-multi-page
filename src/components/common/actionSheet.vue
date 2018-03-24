<template lang="html">
    <actionsheet v-model="isShow" :menus="menus" @on-click-menu="click" @on-click-menu-delete="onDelete" show-cancel></actionsheet>
</template>

<script>
    import { TransferDom, Actionsheet, Group, XSwitch, Toast } from 'vux'
    export default {
        data(){
            return {
                isShow:false,
                menus:{[
                      {
                        label: 'Actionsheet header',
                        type: 'info'
                      },
                      {
                        label: 'Primary',
                        type: 'primary',
                        value: 'primary',
                        otherProp: 'hey'
                      },
                      {
                        label: 'Warn',
                        type: 'warn'
                      },
                      {
                        label: 'Disabled',
                        type: 'disabled'
                      },
                      {
                        label: 'Default'
                      }
                ]}
            }
        },
        methods:{
            click(key){
                return key;
            }
        }
    }
</script>

<style>
</style>
