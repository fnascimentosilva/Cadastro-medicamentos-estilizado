<template>
  <header class="header">
    <router-link to="/">
      <h2>Farmácia Nascimento</h2>
    </router-link>
  </header>
</template>

<script >
import { RouterLink } from "vue-router";

export default {
  components: {
    RouterLink,
  },
};
</script>
 

<style scoped>
.header {
  padding: 10px 2em;
  width: 100vw;
  height: 80px;
  background-color: #e2e2e2;
}
a {
  text-decoration: none;
  font-size: 1.5em;
  color: black;
  font-weight: normal;
}
</style>