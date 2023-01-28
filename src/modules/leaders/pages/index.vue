<template>
  <h1 class="text-primary text-h4">
    Listado de lideres
  </h1>
  <v-row>
    <v-col v-for="i in 12" :key="i" cols="12" sm="3">
      <CardLeader />
    </v-col>
  </v-row>
</template>
