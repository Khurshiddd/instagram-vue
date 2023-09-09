<template>
  <div>
    <div>
      <div style="width: 25rem;" class="m-auto mt-2 text-center border border-primary rounded">
        <VideoView />
        <FooterView />
      </div>
    </div>
    <!-- <RouterView /> -->
  </div>
</template>
<script>
// import {RouterLink, RouterView} from 'vue-router'
import FooterView from '@/views/FooterView.vue';
import VideoView from '@/views/VideoView.vue';
export default {
  name: "Aplication",
  components: {
    FooterView,
    VideoView
  }
};
</script>
<style></style>
