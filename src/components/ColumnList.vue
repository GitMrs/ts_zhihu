<template>
  <div class="row">
    <div
      class="col-4 mb-4"
      v-for="column in list"
      :key="column.id"
    >
      <div class="card h-100 shadow-sm">
        <div class="card-body text-center">
          <img
            :src="column.avatar"
            :alt="column.title"
            class="rounded-circle border border-light w-25 my-3"
          />
          <h5 class="card-title">{{column.title}}</h5>
          <p class="card-text text-left">{{column.description}}</p>
          <a
            href="#"
            class="btn btn-outline-primary"
          >进入专栏</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { ColumnProps } from '../type';
export default defineComponent({
  name: 'ColumnList',
  props: {
    list: {
      // 数组是没有类型的，这里希望它是一个 CloumnProps 的数组
      type: Array as PropType<ColumnProps[]>,
      required: true,
    },
  },
  setup(props) {
    const cloumnList = computed(() => {
      return props.list.map((cloumn) => {
        if (!cloumn.avatar) {
          cloumn.avatar = require('@/assets/column.jpg');
        }
        return cloumn;
      });
    });
    return {
      cloumnList,
    };
  },
});
</script>

<style scoped>
</style>