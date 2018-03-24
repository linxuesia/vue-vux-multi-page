
import Vue from 'vue'
import fxHead from '../../../components/common/fxHead.vue'
import daylyPage from './daylyPage.vue'


const daylyVue = new Vue({
    el: '#dayly',
    template: '<div><fx-head title="日报页面"></fx-head> <div class="container"><dayly-page></dayly-page></div></div> ',
    components: {
        'fx-head': fxHead,
        'dayly-page': daylyPage,
    },
    mounted:function(){
        console.log(this)
    }
})
