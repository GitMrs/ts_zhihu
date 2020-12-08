<template>
  <div class="contaier-fluid px-0 flex-shrink-0">
    <GlobalHeader :user="{isLogin: false}" />
    <router-view></router-view>
  </div>
  <footer class="text-center py-4 text-secondary bg-light mt-auto">
    <small>
      <ul class="list-inline mb-0">
        <li class="list-inline-item">© 慕课网（imooc.com）版权所有 | 津ICP备20000929号-1</li>
        <li class="list-inline-item"><a
            href="https://coding.imooc.com/class/449.html"
            target="_blank"
          >购买课程</a></li>
        <li class="list-inline-item"><a
            href="http://docs.vikingship.xyz/"
            target="_blank"
          >文档</a></li>
        <li class="list-inline-item"><a
            href="http://api.vikingship.xyz/"
            target="_blank"
          >API 在线调试</a></li>
        <li class="list-inline-item"><a
            href="http://showcase.vikingship.xyz/"
            target="_blank"
          >组件库演示</a></li>
      </ul>
    </small>
  </footer>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue';
import { useRoute } from 'vue-router';
// import HelloWorld from './components/HelloWorld.vue';
import GlobalHeader from './components/GlobalHeader.vue';
// import ColumnList from './components/ColumnList.vue';
// import FormList from './components/form/form.vue';
// import { ColumnProps } from './type';
export default defineComponent({
  name: 'App',
  components: {
    // HelloWorld,
    // ColumnList,
    GlobalHeader,
    // FormList
  },
  setup() {
    const route = useRoute();
    const testData = [
      {
        id: 1,
        title: 'test1的专栏',
        description: '这是的test1专栏，有一段非常有意思的简介，可以更新一下欧',
        avatar: '',
      },
      {
        id: 2,
        title: 'test2的专栏',
        description: '这是的test2专栏，有一段非常有意思的简介，可以更新一下欧',
        avatar:
          'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100',
      },
    ];
    watch(route, (val) => {
      console.log({ ...val });
    });
    return {
      testData,
    };
  },
});
</script>

<style>
.bg-light {
  background-color: #f8f9fa !important;
}
.w-330{
  max-width: 330px;
}
</style>
