<template>
  <v-app>
    <v-main class="d-flex">
      <div class="layout-full">
        <router-view v-slot="{ Component, route }">
          <transition name="slide">
            <component :is="Component" :key="route" />
          </transition>
        </router-view>
      </div>
    </v-main>
  </v-app>
</template>
