import { onMounted, onUnmounted, Ref, ref } from 'vue';
const useClickOutside = (elementRef: Ref<null | HTMLElement>) => {
  const isClickoutside = ref(false);
  const handler = (e: MouseEvent) => {
    if (elementRef.value) {
      if (elementRef.value.contains(e.target as HTMLElement)) {
        isClickoutside.value = false;
      } else {
        isClickoutside.value = true;
      }
    }
  }
  onMounted(() => {
    window.addEventListener('click', handler);
  })
  onUnmounted(() => {
    window.removeEventListener('click', handler);
  })
  return isClickoutside;
}
export default useClickOutside;