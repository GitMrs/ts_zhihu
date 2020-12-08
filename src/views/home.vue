<template>
  <div class="home-page container-md">
    <section class="text-center container">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <img
            src="../assets/callout.svg"
            alt="callout"
            class="w-50"
          />
          <h2 class="font-weight-light">随心写作，自由表达</h2>
          <p>
            <a
              href="#"
              class="btn btn-primary my-2"
              @click.prevent="createOrLogin"
            >开始写文章</a>
          </p>
        </div>
      </div>
    </section>
    <DropDown title="新增" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {useRouter} from 'vue-router';
import DropDown from '../components/Dropdown/Dropdown.vue';
export default defineComponent({
  components: {
    DropDown,
  },
  setup() {
    const router = useRouter();
    const createOrLogin = () => {
      router.push('/');
    }
    return {
      createOrLogin
    };
  },
});
</script>

<style scoped>
</style>