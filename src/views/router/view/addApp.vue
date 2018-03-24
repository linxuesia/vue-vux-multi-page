<template>
  <div>
  <fx-head title="路由页面一"></fx-head>

  	<router-link to='/list'>
  		<x-button type="primary">路由切换</x-button>
  	</router-link>

  	<div style="margin-top: 15px;">
  		<a href="../home/list.html">
  			 <x-button>返回demo列表页</x-button>
  		</a>
  	</div>

  	</div>


  </div>
</template>

<script>

import Lib from 'assets/js/Lib';

import { Msg, Divider, XButton } from 'vux'

import fxHead from '../../../components/common/fxHead'



export default {
  name: 'add',
  components: {
      Msg, Divider, XButton, fxHead
  },
  data () {
    return {

    }
  },
  methods: {


  }
}
</script>

<style lang="less">

</style>
