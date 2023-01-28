<script setup lang="ts"></script>

<template>
  <h1 class="text-primary text-h5">
    Listado de lideres Principales
  </h1>
  <FilterLeaders />
  <v-row>
    <v-col v-for="i in 48" :key="i" cols="12" sm="3">
      <CardLeader />
    </v-col>
  </v-row>
</template>
