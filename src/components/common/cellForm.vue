<template>
  <div>
    <group>
      <cell :title="'Total'" :value="'$1024'"></cell>
      <cell-form-preview :list="list" @click='showss'></cell-form-preview>
      <cell>你好</cell>
    </group>
  </div>
</template>


<script>
import { CellFormPreview, Group, Cell } from 'vux'
export default {
  components: {
    CellFormPreview,
    Group,
    Cell
  },
  data () {
    return {
      list: [{
        label: 'Applse',
        value: '3.29'
      }, {
        label: 'Banana',
        value: '1.04'
      }, {
        label: 'Fish',
        value: '8.00'
      }]
    }
  },
    methods: {
        showss(){
            console.log('okkkkk')
        }
    }
}
</script>
