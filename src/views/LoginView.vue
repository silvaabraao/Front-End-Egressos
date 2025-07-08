<template>
  <div class="login-container">
    <header class="header">
      <div class="logo-container">
        <!-- <img src="@/assets/logo.svg" alt="Logo" class="logo" /> -->
        <h1>Sistema de Egressos</h1>
      </div>
      <RouterLink to="/register" class="signup-button">Cadastre-se</RouterLink>
    </header>

    <main class="form-container">
      <h2>Login</h2>
      <form @submit.prevent="handleLogin">
        <div class="input-group">
          <label for="email">E-mail</label>
          <div class="input-wrapper">
            <i class="fas fa-user"></i>
            <input
              type="email"
              id="email"
              v-model="email"
              placeholder="Digite seu e-mail"
              required
            />
          </div>
        </div>

        <div class="input-group">
          <label for="senha">Senha</label>
          <div class="input-wrapper">
            <i class="fas fa-lock"></i>
            <input
              :type="showPassword ? 'text' : 'password'"
              id="senha"
              v-model="senha"
              placeholder="Digite sua senha"
              required
            />
            <i
              class="fas fa-eye toggle-eye"
              @click="togglePassword"
            ></i>
          </div>
          <RouterLink to="/recuperar-senha" class="forgot-password">Esqueceu a senha?</RouterLink>
        </div>

        <button type="submit" class="login-button">Entrar</button>
      </form>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, RouterLink } from 'vue-router'

const router = useRouter()
const email = ref('')
const senha = ref('')
const showPassword = ref(false)

function togglePassword() {
  showPassword.value = !showPassword.value
}

function handleLogin() {
  if (email.value && senha.value) {
    // simula autenticação
    console.log('Login com:', email.value, senha.value)
    router.push('/egressos') // redireciona para a tela principal
  } else {
    alert('Preencha os campos corretamente.')
  }
}
</script>


<style scoped>
.login-container {
  font-family: Arial, sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
}

.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;
  border-bottom: 1px solid #ddd;
  align-items: center;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo {
  width: 32px;
  height: 32px;
}

.signup-button {
  background-color: #2ec4b6;
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
}

.form-container {
  margin-top: 60px;
  width: 100%;
  max-width: 400px;
  text-align: center;
}

.form-container h2 {
  margin-bottom: 30px;
  font-size: 24px;
  font-weight: 500;
}

.input-group {
  text-align: left;
  margin-bottom: 20px;
}

.input-group label {
  display: block;
  margin-bottom: 6px;
  font-weight: 500;
}

.input-wrapper {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 30px;
  padding: 10px 15px;
  background-color: #f8f8f8;
}

.input-wrapper i {
  margin-right: 10px;
  color: #888;
}

.input-wrapper input {
  flex: 1;
  border: none;
  background: transparent;
  outline: none;
  font-size: 14px;
}

.toggle-eye {
  cursor: pointer;
  margin-left: auto;
}

.forgot-password {
  display: block;
  text-align: right;
  margin-top: 5px;
  font-size: 12px;
  color: #00aaff;
  text-decoration: none;
}

.login-button {
  width: 100%;
  background-color: #80d8d8;
  border: none;
  padding: 12px;
  border-radius: 20px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
}

.login-button:hover {
  background-color: #5bc5c5;
}
</style>
