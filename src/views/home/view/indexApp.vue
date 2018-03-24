<template>
<div id="app">

	<div>
		<divider>放心学院测试-多页面链接</divider>
	    <group>
			<cell title="日报" value="" is-link link="../daylyPage/daylyPage.html"></cell>
			<cell title="周报" value="" is-link link="../weeklyPage/weeklyPage.html"></cell>
			<cell title="投票" value="" is-link link="../weeklyPage/weeklyPage.html"></cell>
		</group>
	</div>

	<div class="martop15">
		<divider>测试链接外站</divider>
	    <group>
			<cell title="点击跳转百度页面" value="" is-link link="https://www.baidu.com/"></cell>
		</group>
	</div>

	<div class="martop15">
		<divider>其他项</divider>
	    <group>
			<cell title="使用vue-router 路由" value="" is-link link="../router/details.html"></cell>
		</group>
	</div>

</div>
</template>

<script>

//引入全局的js文件
import Lib from 'assets/js/Lib';

import { Cell,Group,Divider } from 'vux'


export default {
  data() {
    return {
    	webname:5464,
		'list':[{
			'id':0,
			'name':'alert弹窗',
			'url':'../vuxDemo/alert.html'
		},{
			'id':1,
			'name':'Calendar时间选择',
			'url':'../vuxDemo/calendar.html'
		},{
			'id':2,
			'name':'button按钮',
			'url':'../vuxDemo/button.html'
		}]
    }
  },
  components: {
	Cell,Group,Divider
  },
  //实例初始化最之前，无法获取到data里的数据
  beforeCreate(){


  },
  //在挂载开始之前被调用
  beforeMount(){


  },
  //已成功挂载，相当ready()
  mounted(){



  },
  //相关操作事件
  methods: {




  }
}
</script>

<style lang="less">
@import '../../../assets/less/common';

.note{
	color:#666;
	padding:10px;
	font-size:12px;
}
.note p{
	line-height:25px;
}

.weui-cells{
font-size: 14px!important;
}

/*
 * less 展示
 */
.lessTest{
	.listbox{
		border-radius: 10px;
		font-size: 14px;
	}
	.boxcontent{
		padding: 15px;
	}
}


</style>
