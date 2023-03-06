<template>
  <div class="pro-table">
    <el-form class="pro-table-search">
      <el-form-item label="label"> </el-form-item>
    </el-form>
    <div class="pro-table-wrapper"> </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component<componentName>({
  name: 'componentName',
  components: {},
})
export default class componentName extends Vue {
  //生命周期 - 创建完成（访问当前this实例）
  created() {}
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
}
</script>
<style lang="scss" scoped>
@import '@/styles/variables.scss';
</style>
