<template>
  <div class="cadastro-container">
    <header class="header">
      <div class="logo-container">
        <!--<img src="@/assets/logo.svg" alt="Logo" class="logo" />-->
        <h1>Sistema de Egressos</h1>
      </div>
      <RouterLink to="/login" class="signup-button">Voltar</RouterLink>
    </header>

    <main class="form-cadastro">
      <h2>Cadastre-se</h2>

      <form @submit.prevent="handleCadastro">
        <div class="form-grid">
          <div class="input-group">
            <label for="nome">Nome*</label>
            <input id="nome" v-model="nome" type="text" placeholder="Digite seu nome" required />
          </div>

          <div class="input-group">
            <label for="sobrenome">Sobrenome*</label>
            <input id="sobrenome" v-model="sobrenome" type="text" placeholder="Digite seu sobrenome" required />
          </div>

          <div class="input-group">
            <label for="email">E-mail*</label>
            <input id="email" v-model="email" type="email" placeholder="exemplo@email.com" required />
          </div>

          <div class="input-group">
            <label for="telefone">Telefone*</label>
            <input id="telefone" v-model="telefone" type="tel" placeholder="(00) 00000-0000" required />
          </div>

          <div class="input-group">
            <label for="senha">Senha*</label>
            <input id="senha" v-model="senha" type="password" placeholder="Digite sua senha" required />
          </div>

          <div class="input-group">
            <label for="confirmarSenha">Confirmar Senha*</label>
            <input id="confirmarSenha" v-model="confirmarSenha" type="password" placeholder="Repita a senha" required />
          </div>
        </div>

        <div class="button-group">
          <RouterLink to="/login" class="back-button">Voltar</RouterLink>
          <button type="submit" class="login-button">Cadastrar</button>
        </div>
      </form>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, RouterLink } from 'vue-router'

const router = useRouter()

const nome = ref('')
const sobrenome = ref('')
const email = ref('')
const telefone = ref('')
const senha = ref('')
const confirmarSenha = ref('')

function handleCadastro() {
  if (senha.value !== confirmarSenha.value) {
    alert('As senhas não coincidem!')
    return
  }

  // Aqui você pode enviar os dados para a API futuramente
  console.log({
    nome: nome.value,
    sobrenome: sobrenome.value,
    email: email.value,
    telefone: telefone.value,
    senha: senha.value
  })

  alert('Cadastro realizado com sucesso!')
  router.push('/login')
}
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  background: #fff;
  margin: 0;
  padding: 0;
}

.cadastro-container {
  display: flex;
  flex-direction: column;
  align-items: center;
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

.form-cadastro {
  margin-top: 60px;
  max-width: 800px;
  width: 90%;
  text-align: center;
}

.form-cadastro h2 {
  margin-bottom: 40px;
  font-size: 24px;
  font-weight: 500;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px 20px;
}

.input-group {
  text-align: left;
}

.input-group label {
  font-size: 14px;
  margin-bottom: 5px;
  display: block;
}

.input-group input {
  width: 100%;
  padding: 12px 15px;
  border-radius: 30px;
  border: 1px solid #ccc;
  background-color: #f8f8f8;
  outline: none;
  font-size: 14px;
}

.button-group {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.back-button {
  background-color: white;
  border: 2px solid #2ec4b6;
  color: #2ec4b6;
  padding: 10px 30px;
  border-radius: 30px;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
}

.login-button {
  background-color: #2ec4b6;
  border: none;
  color: white;
  padding: 12px 40px;
  border-radius: 30px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
}

.login-button:hover {
  background-color: #28b0a4;
}
</style>
