<template>
    <div class="container">
        <cell-form></cell-form>
    </div>
</template>

<script>
import cellForm from '../../../components/common/cellForm.vue'
    export default {
        data () {
            return {
                msg: ''
            }
        },
        components: {
            cellForm
        }
    }

</script>

<style lang="less">
    @import '../../../assets/less/common';
</style>
