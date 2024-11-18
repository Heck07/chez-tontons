<template>
    <div class="news-view">
      <div class="header">
        <h1 class="gradient-title">Actualités</h1>
      </div>
      <div class="news-content">
        <div v-for="(newsItem, index) in newsList" :key="index" class="news-item">
          <h2 class="news-title">{{ newsItem.title }}</h2>
          <p class="news-date">{{ newsItem.date }}</p>
          <p class="news-description">{{ newsItem.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NewsView',
    data() {
      return {
        newsList: [
          {
            title: 'Nouvelle ouverture de Chez TonTon',
            date: '2024-11-01',
            description: 'Nous sommes heureux d’annoncer l’ouverture de notre nouveau restaurant situé au cœur de Rennes. Venez découvrir nos délicieuses spécialités !',
          },
          {
            title: 'Promotion Spéciale sur les Menus',
            date: '2024-11-10',
            description: 'Profitez de notre offre spéciale : un menu acheté, une boisson offerte pendant tout le mois de novembre.',
          },
          {
            title: 'Nouveaux Plats Disponibles',
            date: '2024-11-15',
            description: 'Nous avons ajouté de nouveaux plats à notre carte, incluant des options végétariennes pour satisfaire tous nos clients.',
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
 .news-view {
  padding: 20px;
  color: rgba(0, 0, 0, 0.800);
}


/* Conteneur des actualités */
.news-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Éléments individuels des actualités */
.news-item {
  background-color: #f8f8f8;
  padding: 20px;
  margin: 0 auto; /* Centrer horizontalement */
  max-width: 800px; /* Limiter la largeur maximale sur les grands écrans */
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  box-sizing: border-box; /* Assure que le padding est inclus dans la largeur totale */
}

.news-title {
  font-size: 1.8rem;
  margin-bottom: 10px;
}

.news-date {
  font-size: 1rem;
  color: #888;
  margin-bottom: 10px;
}

.news-description {
  font-size: 1.2rem;
  line-height: 1.5;
}

/* Styles pour les écrans de taille moyenne */
@media (max-width: 1024px) {
  .news-item {
    padding: 15px;
    margin: 0 40px;
    max-width: none;
  }

  .news-title {
    font-size: 1.6rem;
  }

  .news-description {
    font-size: 1.1rem;
  }
}

/* Styles pour les écrans mobiles */
@media (max-width: 768px) {
  .news-item {
    padding: 10px;
    margin: 0 20px;
  }

  .news-title {
    font-size: 1.4rem;
  }

  .news-description {
    font-size: 1rem;
  }
}

/* Styles pour les très petits écrans */
@media (max-width: 480px) {
  .news-item {
    margin: 0 10px;
  }

  .news-title {
    font-size: 1.2rem;
  }

  .news-description {
    font-size: 0.9rem;
  }
}
</style>