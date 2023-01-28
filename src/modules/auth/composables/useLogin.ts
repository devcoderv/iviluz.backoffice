function useLogin() {
  const user = useUserStore()
  const router = useRouter()
  const loading = ref(false)
  const state = ref({
    email: '',
    password: '',
  })
  const isValid = ref(false)

  const emailRules = [
    (v: any) => !!v || 'Correo electrónico es requerido',
    (v: any) => /.+@.+\..+/.test(v) || 'Correo electrónico invalido',
  ]
  const passwordRules = [
    (v: any) => !!v || 'Contraseña es requerida',
    (v: any) => (v && v.length > 6) || 'La Contraseña debe tener mas de 6 dígitos',
  ]

  async function onSubmit(e: any) {
    const $form = await e
    if ($form.valid) {
      loading.value = true
      user.login = true
      setTimeout(() => {
        router.replace('/')
      }, 2000)
    }
  }

  return { state, emailRules, passwordRules, isValid, loading, onSubmit }
}

export default useLogin
