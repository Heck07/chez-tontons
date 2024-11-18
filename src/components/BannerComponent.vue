<template>
    <div class="banner">
      <div class="address">
        14 Pl. Couverte, 07170 Villeneuve-de-Berg
      </div>
      <div class="order-button">
        <button @click="callOrder">Commander</button>
      </div>
      <div class="opening-hours">
        <span :class="isOpen ? 'open' : 'closed'">
          {{ isOpen ? 'Ouvert' : 'Fermé' }}
        </span>
        <p>{{ openingHours }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        openingHours: "11h00 - 23h00",
      };
    },
    computed: {
      isOpen() {
        const currentHour = new Date().getHours();
        return currentHour >= 11 && currentHour <= 23; // Exemple simple
      },
    },
    methods: {
      callOrder() {
        window.location.href = "tel:+33222333444";
      },
    },
  };
  </script>
  
  <style scoped>
  
  .logo img {
    height: 60px;
  }
  
  .menu ul {
    list-style: none;
    display: flex;
    gap: 30px;
    margin: 0;
    padding: 0;
  }
  
  .menu a {
    text-decoration: none;
    color: #FFF;
    font-weight: bold;
    font-size: 1.1rem;
    transition: color 0.3s ease;
  }
  
  .menu a:hover {
    color: #FFEB3B; /* Jaune pour le survol des liens */
  }
  
  .socials {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  
  .socials a img {
    height: 30px;
    width: 30px;
    transition: transform 0.3s ease;
  }
  
  .socials a img:hover {
    transform: scale(1.2); /* Agrandir légèrement l'icône au survol */
  }
  
  .banner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 20px 30px;
    background-color: #F57C00; /* Orange vif pour la bannière */
    color: #FFF;
    font-family: 'Poppins', sans-serif;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .address, .order-button, .opening-hours {
    flex: 1;
  }
  
  .order-button {
    display: flex;
    justify-content: center; /* Centrer le bouton au centre de sa section */
  }
  
  .order-button button {
    padding: 12px 25px;
    background-color: #D32F2F; /* Rouge pour le bouton Commander */
    color: #FFF;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    font-size: 1rem;
    transition: background-color 0.3s ease;
  }
  
  .order-button button:hover {
    background-color: #B71C1C; /* Rouge plus foncé au survol */
  }
  
  .opening-hours {
    text-align: center;
  }
  
  .opening-hours p {
    margin: 3px 0;
  }
  
  .opening-hours .open {
    color: #4CAF50; /* Vert pour indiquer Ouvert */
  }
  
  .opening-hours .closed {
    color: #F44336; /* Rouge pour indiquer Fermé */
  }
  </style>
  