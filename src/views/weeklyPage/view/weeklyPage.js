import Vue from 'vue'
import fxHead from '../../../components/common/fxHead'
import weeklyPage from './weeklyPage.vue'

const weeklyVue = new Vue({
    el:'#weekly',
    template:'<div><fx-head></fx-head><div class="container"><weekly-page></weekly-page></div></div>',
    components:{
        'fx-head': fxHead,
        'weekly-page': weeklyPage
    }
})
