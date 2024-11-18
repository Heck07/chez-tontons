<template>
    <div class="admin-container">
      <h1>Page Admin - Gestion de Chez TonTon</h1>
  
      <!-- Gestion des horaires d'ouverture -->
      <div class="admin-section">
        <h2>Horaires d'Ouverture</h2>
        <form @submit.prevent="updateOpeningHours">
          <div v-for="(day, index) in days" :key="index" class="form-group">
            <label :for="day">{{ day }}</label>
            <input type="text" v-model="openingHours[day]" :id="day" placeholder="Ex : 11h00 - 23h00" />
          </div>
          <button type="submit" class="btn">Mettre à jour les horaires</button>
        </form>
      </div>
  
      <!-- Gestion des actualités -->
      <div class="admin-section">
        <h2>Ajouter une Actualité</h2>
        <form @submit.prevent="addNews">
          <div class="form-group">
            <label for="news-title">Titre</label>
            <input type="text" v-model="news.title" id="news-title" placeholder="Titre de l'actualité" />
          </div>
          <div class="form-group">
            <label for="news-content">Contenu</label>
            <textarea v-model="news.content" id="news-content" placeholder="Contenu de l'actualité"></textarea>
          </div>
          <button type="submit" class="btn">Ajouter l'actualité</button>
        </form>
  
        <!-- Liste des actualités existantes -->
        <div class="news-list">
          <h3>Actualités Existantes</h3>
          <ul>
            <li v-for="(item, index) in newsList" :key="index">
              <h4>{{ item.title }}</h4>
              <p>{{ item.content }}</p>
              <button @click="removeNews(index)" class="btn-delete">Supprimer</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AdminView',
    data() {
      return {
        days: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
        openingHours: {
          Lundi: '11h00 - 23h00',
          Mardi: '11h00 - 23h00',
          Mercredi: '11h00 - 23h00',
          Jeudi: '11h00 - 23h00',
          Vendredi: '11h00 - 23h00',
          Samedi: '11h00 - 23h00',
          Dimanche: '11h00 - 23h00',
        },
        news: {
          title: '',
          content: '',
        },
        newsList: [],
      };
    },
    methods: {
      updateOpeningHours() {
        // Simuler la mise à jour des horaires (plus tard à relier avec une API ou back-end)
        alert('Horaires mis à jour avec succès !');
      },
      addNews() {
        if (this.news.title && this.news.content) {
          this.newsList.push({ ...this.news });
          this.news.title = '';
          this.news.content = '';
          alert('Actualité ajoutée avec succès !');
        } else {
          alert('Veuillez remplir tous les champs avant de soumettre.');
        }
      },
      removeNews(index) {
        this.newsList.splice(index, 1);
        alert('Actualité supprimée avec succès !');
      },
    },
  };
  </script>
  
  <style scoped>
  .admin-container {
    max-width: 800px;
    margin: auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  .admin-section {
    margin-bottom: 30px;
  }
  .form-group {
    margin-bottom: 15px;
  }
  .form-group label {
    display: block;
    margin-bottom: 5px;
  }
  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 10px;
    margin: 0;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .btn {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .btn:hover {
    background-color: #0056b3;
  }
  .news-list ul {
    list-style: none;
    padding: 0;
  }
  .news-list li {
    background-color: #fff;
    border: 1px solid #ccc;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 5px;
  }
  .btn-delete {
    padding: 5px 10px;
    background-color: #dc3545;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .btn-delete:hover {
    background-color: #c82333;
  }
  </style>
  