<template>
  <div>
    <div class="container">首页</div>
    <ul>
      <li v-for="(item, index) in content" :key="index" class="li">
        <h2>标题: {{ item.title }}</h2>
        <p>内容: {{ item.content }}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, useFetch } from '@nuxtjs/composition-api'
import { AxiosResponse } from 'axios'
import http from '~/utils/request'

export default defineComponent({
  setup() {
    const content = ref([])
    const { fetch } = useFetch(async () => {
      const v: AxiosResponse = await http.get('/articles')
      content.value = v.data
    })
    fetch()
    return {
      content,
    }
  },
})
</script>

<style scoped lang="less">
.container {
  text-align: center;
}
.li {
  text-align: center;
  border-bottom: 1px solid red;
}
</style>
