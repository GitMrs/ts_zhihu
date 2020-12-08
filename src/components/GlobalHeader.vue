<template>
  <nav class="navbar-dark bg-primary justify-content-between mb-4 px-4">
    <div class="w-75 mx-auto navbar">
      <a
        href="#"
        class="navbar-brand"
      >者也专栏</a>
      <ul
        v-if="!user.isLogin"
        class="list-inline mb-0"
      >
        <li class="list-inline-item">
          <router-link
            to="/login"
            class="btn btn-outline-light my-2"
          >
            登录
          </router-link>
          <!-- <a
            href="#"
            class="btn btn-outline-light my-2"
          >登录</a> -->
        </li>
        <li class="list-inline-item">
          <router-link
            to="/sigup"
            class="btn btn-outline-light my-2"
          >
            注册
          </router-link>
          <!-- <a
            href="#"
            class="btn btn-outline-light my-2"
          >注册</a> -->
        </li>
      </ul>
      <ul
        v-else
        class="list-inline mb-0"
      >
        <li class="list-inline-item">
          <a
            href="#"
            class="btn btn-outline-light my2"
          >您好：{{user.name}}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
export interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
}
export default defineComponent({
  name: 'GlobalHeader',
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true,
    },
  },
});
</script>

<style scoped>
</style>