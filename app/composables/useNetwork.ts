export const useNetwork = () => {
  const isOnline = ref(true);

  const updateStatus = () => {
    isOnline.value = window.navigator.onLine;
  };

  onMounted(() => {
    updateStatus();

    window.addEventListener("online", updateStatus);
    window.addEventListener("offline", updateStatus);
  });

  onUnmounted(() => {
    window.removeEventListener("online", updateStatus);
    window.removeEventListener("offline", updateStatus);
  });

  return { isOnline };
};
