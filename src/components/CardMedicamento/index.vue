<template>
  <Transition>
    <v-card  elevation="5" class="ma-3" :width="170">
      <template v-slot:title>
        <div class="d-flex justify-end">
          <v-btn variant="text" :icon="favorito ? 'mdi-heart' : 'mdi-heart-outline'" color="pink-lighten-1" @click="$emit('favoritar', id)"></v-btn>
        </div>
      </template>
      <v-card-text class="d-flex flex-column">
        <img :width="120" src="https://dmvfarma.vtexassets.com/arquivos/ids/196865/caixa-medicamento-2021.png?v=637695586068000000" alt="Imagem do medicamento" />
        <p><span class="font-weight-bold">Nome:</span> {{ nome }}</p>
        <p><span class="font-weight-bold">Laboratório:</span> {{ laboratorio }}</p>
        <p><span class="font-weight-bold">Preço:</span> {{ preco }}</p>
      </v-card-text>
    </v-card>
  </Transition>
</template>
<script>
export default {
  props: ['nome', 'laboratorio', 'preco', 'favorito', 'id']
}
</script>
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>