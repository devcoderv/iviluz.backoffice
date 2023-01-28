<script setup lang="ts">
const links = [
  'Lideres Principales',
  'Lideres 144',
  'Registro de lideres',
]
</script>

<template>
  <v-container class="fill-height d-flex align-center">
    <v-avatar
      class="me-10 ms-4"
      color="grey-darken-1"
      size="32"
    >
      <v-img
        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
        height="200px"
        cover
      />
    </v-avatar>

    <v-btn
      v-for="link in links"
      :key="link"
      color="white"
      variant="text"
    >
      {{ link }}
    </v-btn>

    <v-spacer />

    <v-responsive max-width="260">
      <v-text-field
        density="compact"
        hide-details
        variant="solo"
      />
    </v-responsive>
  </v-container>
</template>
