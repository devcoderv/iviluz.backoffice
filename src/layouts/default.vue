<template>
  <v-app>
    <v-navigation-drawer color="grey-darken-4">
      <TheMenu />
      <template #append>
        <div class="pa-2">
          <v-btn block>
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <v-main class="bg-grey-lighten-3">
      <div class="pa-8">
        <router-view v-slot="{ Component, route }">
          <transition name="slide">
            <component :is="Component" :key="route" />
          </transition>
        </router-view>
      </div>
    </v-main>
  </v-app>
</template>
