<script setup lang="ts">
import useFilterLeaders from '../composbles/useFilterLeaders'

const { gender, red } = useFilterLeaders()
</script>

<template>
  <v-row class="mt-3">
    <v-col cols="12" sm="3">
      <VTextField placeholder="Buscar...." density="compact" />
    </v-col>
    <v-col cols="12" sm="3">
      <VSelect
        placeholder="Filtrar por genero"
        density="compact"
        :items="gender"
      />
    </v-col>
    <v-col cols="12" sm="3">
      <VSelect
        placeholder="Filtrar por red"
        density="compact"
        :items="red"
      />
    </v-col>
    <v-col cols="12" sm="2" offset="1">
      <VBtn block>
        Buscar
      </VBtn>
    </v-col>
  </v-row>
</template>
