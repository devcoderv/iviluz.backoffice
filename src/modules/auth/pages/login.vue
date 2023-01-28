<script lang="ts" setup>
import useLogin from '../composables/useLogin'
const { state, emailRules, passwordRules, isValid, loading, onSubmit } = useLogin()
const snackbar = ref(false)
</script>

<template>
  <section class="layout-full center-xy">
    <h1>Login</h1>
    <VCard class="pa-8" width="400">
      <VForm v-model="isValid" @submit.prevent="onSubmit">
        <div class="mb-2">
          <VTextField label="Correo electrónico" :rules="emailRules" />
        </div>
        <div class="mb-2">
          <VTextField label="Contraseña" :rules="passwordRules" />
        </div>
        <VBtn block type="submit" :loading="loading">
          Iniciar Sesión
        </VBtn>
      </VForm>
    </VCard>
  </section>
</template>

<route lang="yaml">
meta:
  layout: full
</route>
