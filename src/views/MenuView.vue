<template>
  <div class="menu-view">
    <div class="header">
      <h1 class="title gradient-title">La Carte</h1>
    </div>
    <div class="menu-content">
      <div class="main-menu">
        <img :src="menu1" alt="Menu Principal" class="menu-image" />
      </div>
      <div class="drinks-menu">
        <img :src="menu2" alt="Carte des Boissons" class="menu-image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuView',
  data() {
    return {
      menu1: require('@/assets/menu1.jpg'),
      menu2: require('@/assets/menu2.jpg'),
    };
  },
};
</script>

<style scoped>
.menu-view {
  margin-top: 20px;
  padding: 0 15px; /* Ajout de padding pour petits écrans */
}

.header {
  text-align: center;
  margin-bottom: 20px;
}

.menu-content {
  display: flex;
  gap: 20px;
}

.main-menu {
  flex: 6;
  background-color: #f8f8f8;
  padding: 10px;
  border-radius: 10px;
}

.drinks-menu {
  flex: 3;
  background-color: #f1f1f1;
  padding: 10px;
  border-radius: 10px;
}

.menu-image {
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
}

/* Styles pour les petits écrans */
@media screen and (max-width: 768px) {
  .menu-content {
    flex-direction: column; /* Empile les sections */
    gap: 15px;
  }

  .main-menu, .drinks-menu {
    flex: 1; /* Chaque section prend toute la largeur */
  }

  .menu-image {
    height: auto; /* Ajuste la hauteur pour les petits écrans */
  }

  .header h1 {
    font-size: 1.5rem; /* Réduit la taille du titre */
  }
}
</style>
