<template>
  <div class="login-page mx-auto p-3 w-330">
    <h5 class="my-4 text-center">登录到者也</h5>
    <validate-form @form-submit="formSubmit">
      <div class="mb-3">
        <label class="form-label">邮箱地址:</label>
        <validate-input
          :rules="emailRules"
          v-model="emailVal"
          ref="inputRef"
          type='text'
          placeholder="请输入用户名"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">用户密码:</label>
        <validate-input
          :rules="passwordRules"
          v-model="passwordVal"
          type='password'
          placeholder="请输入密码"
        />
        <div class="form-text">
          <router-link to='/sigup'> 还没有账号？去注册一个新的吧！</router-link>
        </div>
      </div>
      <template #submit>
        <button
          type='submit'
          class="btn btn-primary btn-block btn-large"
        >登录</button>
      </template>
    </validate-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ValidateForm from '../components/form/ValidateForm.vue';
import ValidateInput, { RulesProp } from '../components/form/ValidateInput.vue';
export default defineComponent({
  components: {
    ValidateForm,
    ValidateInput,
  },
  setup() {
    const emailVal = ref('');
    const passwordVal = ref('');
    const formSubmit = (e: boolean) => {
      console.log(e);
    };
    const emailRules: RulesProp = [
      {
        type: 'required',
        message: '电子邮箱不能为空',
      },
      {
        type: 'email',
        message: '邮箱格式不正确',
      },
    ];
    const passwordRules: RulesProp = [
      {
        type: 'required',
        message: '密码不能为空',
      },
    ];
    return {
      emailVal,
      passwordVal,
      emailRules,
      passwordRules,
      formSubmit,
    };
  },
});
</script>

<style scoped>
</style>