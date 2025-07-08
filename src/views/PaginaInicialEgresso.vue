<template>
  <div class="egressos-container">
    <header class="header">
      <div class="logo-container">
        <!-- <img src="@/assets/logo.svg" alt="Logo" class="logo" />-->
        <h1>Sistema de Egressos</h1>
      </div>
      <div class="nav-icons">
        <!--<img src="@/assets/user-icon.svg" alt="Usuário" />-->
        <div class="notification">
          <!--<img src="@/assets/bell-icon.svg" alt="Notificações" />-->
          <span class="notification-count">2</span>
        </div>
        <!--<img src="@/assets/help-icon.svg" alt="Ajuda" />-->
        <!--<img src="@/assets/logout-icon.svg" alt="Sair" />-->
      </div>
    </header>

    <nav class="nav-tabs">
      <button class="tab active">Egressos</button>
      <button class="tab">Dashboard</button>
      <button class="tab">Relatórios</button>
    </nav>

    <main class="egressos-main">
      <h2>Buscar Egresso</h2>

      <div class="search-container">
        <div class="search-box">
          <span class="icon">🔍</span>
          <input type="text" placeholder="Pesquisar Egresso" />
        </div>
        <div class="filter-container">
          <button class="filter-button">⚙️ Filtro</button>
          <button class="add-filter">+ Adicionar Filtro</button>
        </div>
      </div>

      <div class="empty-state">
        <div class="empty-card">
          <span style="font-size: 32px;">☹️</span>
          <p>Nenhuma Informação Encontrada</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
// No script setup você pode futuramente adicionar lógica reativa, filtros, etc.
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  background-color: #fff;
  margin: 0;
  padding: 0;
}

.egressos-container {
  width: 100%;
}

.header {
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

.nav-icons {
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative;
}

.notification {
  position: relative;
}

.notification-count {
  background-color: red;
  color: white;
  font-size: 10px;
  border-radius: 50%;
  padding: 2px 6px;
  position: absolute;
  top: -5px;
  right: -10px;
}

.nav-tabs {
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 20px 0;
}

.tab {
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  color: #2ec4b6;
  padding: 10px 20px;
  border-radius: 20px;
}

.tab.active {
  background-color: #2ec4b6;
  color: white;
}

.egressos-main {
  text-align: center;
  margin-top: 20px;
}

.egressos-main h2 {
  margin-bottom: 30px;
  font-size: 22px;
}

.search-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.search-box {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  background-color: #f8f8f8;
  border-radius: 30px;
  padding: 10px 20px;
  width: 50%;
  max-width: 500px;
}

.search-box .icon {
  margin-right: 10px;
}

.search-box input {
  border: none;
  background: transparent;
  width: 100%;
  font-size: 14px;
  outline: none;
}

.filter-container {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 10px;
}

.filter-button {
  background: none;
  border: none;
  font-size: 14px;
  cursor: pointer;
}

.add-filter {
  background-color: #2ec4b6;
  color: white;
  padding: 8px 18px;
  border-radius: 20px;
  border: none;
  font-size: 14px;
  cursor: pointer;
}

.empty-state {
  margin-top: 60px;
}

.empty-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  border: 1px solid #eee;
  border-radius: 20px;
  max-width: 300px;
  margin: 0 auto;
  color: #888;
}
</style>
