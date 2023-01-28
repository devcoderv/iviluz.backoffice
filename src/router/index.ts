import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import { useUserStore } from '../stores/user'
const routes = setupLayouts(generatedRoutes)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  const user = useUserStore()
  if (to.path !== from.path)
    NProgress.start()

  if (to.meta.auth === true && user.login)
    return next()

  if (to.meta.auth === true && !user.login)
    return next('/auth/login')

  if (!!to.meta.auth === false && user.login)
    return next('/')

  return next()
})

router.afterEach(() => {
  NProgress.done()
})
export default router
