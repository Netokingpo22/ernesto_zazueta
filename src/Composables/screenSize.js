import { ref, onMounted, onBeforeUnmount } from 'vue';

export default function screenSize() {
  const isMobile = ref(false);

  const checkDevice = () => {
    isMobile.value = window.innerWidth <= 768;
  };

  onMounted(() => {
    checkDevice();
    window.addEventListener('resize', checkDevice);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', checkDevice);
  });

  return { isMobile };
}