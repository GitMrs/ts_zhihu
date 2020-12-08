<template>
  <div>
    <validate-form @form-submit='formSubmit'>
      <div
        class="mb-3"
      >
        <label
          for="exampleInputEmail"
          class="form-label"
        >邮箱地址</label>
        <validate-input :rules="emailRules" type="text" placeholder="请输入邮箱" />
      </div>
      <div
        class="mb-3"
      >
        <label
          for="exampleInputPassword"
          class="form-label"
        >密码</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword"
        >
      </div>
    </validate-form>
  </div>
</template>

<script lang="ts">
import ValidateInput, { RulesProp } from './ValidateInput.vue';
import ValidateForm from './ValidateForm.vue';
import { defineComponent } from 'vue';
// const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export default defineComponent({
  components: {
    ValidateForm,
    ValidateInput,
  },
  setup() {
    // const emailRef = reactive({
    //   val: '',
    //   error: false,
    //   message: '',
    // });
    // const validateEmail = () => {
    //   if (emailRef.val.trim() === '') {
    //     emailRef.error = true;
    //     emailRef.message = 'can not be empty';
    //   } else if (!emailReg.test(emailRef.val)) {
    //     emailRef.error = true;
    //     emailRef.message = 'should be valid email';
    //   }
    // };
    const formSubmit = (e: boolean) => {
      console.log(e);
    };
    const emailRules: RulesProp = [
      {
        type: 'required',
        message: '电子邮箱地址不能为空',
      },
      {
        type: 'email',
        message: '请输入正确的电子邮箱格式',
      },
    ];
    return {
      emailRules,
      formSubmit
    };
  },
});
</script>

<style scoped>
</style>