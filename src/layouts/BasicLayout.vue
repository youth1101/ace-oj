<template>
  <div id="basiclayout">
    <a-layout style="height: 400px">
      <a-layout-header class="header">
        <GlobalHeader />
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">
        <a href="https://github.com/youth1101/ace-oj" target="_blank"> 项目源码地址 </a>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup lang="ts">
import GlobalHeader from '@/components/GlobalHeader.vue'
</script>

<style scoped>
#basiclayout {
}
#basiclayout .header {
  margin-bottom: 16px;
}
#basiclayout .content {
}
#basiclayout .footer {
}
</style>
