<template>
  <div class="sigup-page mx-auto p-3 w-330">
    <h5 class="my-4 text-center">账号注册</h5>
    <validate-form @form-submit="formSubmit">
      <div class="mb-3">
        <label class="form-label">电子邮箱</label>
        <validate-input
          type="text"
          :rules="eamilRules"
          placeholder="请输入邮箱"
          v-model="formData.email"
        />
      </div>
      <template #submit>
        <button class="btn btn-primary btn-block btn-large">注册新用户</button>
      </template>
    </validate-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import ValidateForm from '../components/form/ValidateForm.vue';
import ValidateInput from '../components/form/ValidateInput.vue';
export default defineComponent({
  components: {
    ValidateForm,
    ValidateInput,
  },
  setup() {
    const formData = reactive({
      email: '',
      nickName: '',
      password: '',
      repeatPassword: '',
    });
    const formSubmit = (result: boolean) => {
      console.log(result);
    };
    return {
      formSubmit,
      formData,
    };
  },
});
</script>

<style scoped>
</style>