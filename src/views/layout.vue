<template>
  <div id="layout">
    <header>header</header>
    <section class="container">
      <div class="menu">menu</div>
      <div class="content">
        <router-view />
      </div>
    </section>
  </div>
</template>

<script setup name="Layout">

</script>

<style lang="scss">
#layout {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  header {
    height: 45px;
    line-height: 45px;
    font-size: 24px;
    color: #333333;
    border-bottom: 1px solid #ddd;
    box-sizing: border-box;
  }
  section {
    flex: 1;
    overflow: hidden;
    background-color: #f4f4f4;
    display: flex;
    .menu {
      width: 240px;
    }
    .content {
      flex: 1;
      background-color: #e0e0e0;
    }
  }
}
</style>