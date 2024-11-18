<template>
    <footer class="site-footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>À propos de nous</h3>
          <p>Bienvenue <strong>Chez Tonton's</strong>, votre destination pour les meilleurs kebabs, tacos et plus encore. Je vous propose des plats délicieux à base d'ingrédients frais.</p>
        </div>
        <div class="footer-section">
          <h3>Heures d'ouverture</h3>
          <ul>
            <li>Lundi - Vendredi : 11h00 - 22h00</li>
            <li>Samedi : 12h00 - 23h00</li>
            <li>Dimanche : Fermé</li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Contact</h3>
          <p>Adresse : 14Pl. Couverte, 071170 Villeneuve-de-Berg</p>
          <p>Téléphone : 01 23 4 35 67 89</p>
        </div>
        <div class="footer-section">
          <h3>Suivez-nous</h3>
          <div class="socials">
            <a href="https://facebook.com" target="_blank">
                <img src="@/assets/facebook-icon.png" alt="Facebook" />
            </a>
            <a href="https://instagram.com" target="_blank">
                <img src="@/assets/instagram-icon.png" alt="Instagram" />
            </a>
            </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 Chez Tonton's. Tous droits réservés.</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'SiteFooter',
  };
  </script>
  
  <style scoped>
  .site-footer {
    background-color: black;
    color: #fff;
    padding: 40px 0;
  }
  
  .footer-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .footer-section {
    flex: 1 1 200px;
    margin: 20px;
  }
  
  .footer-section h3 {
    margin-bottom: 15px;
    font-size: 1.5rem;
  }
  
  .footer-section p,
  .footer-section ul {
    font-size: 1rem;
    line-height: 1.6;
  }
  
  .footer-section ul {
    list-style: none;
    padding: 0;
  }
  
  .footer-section ul li {
    margin-bottom: 10px;
  }
  
.socials {
  align-items: center;
  gap: 50px;
}
  
  .footer-bottom {
    text-align: center;
    padding-top: 20px;
    border-top: 1px solid #444;
  }
  
  .footer-bottom p {
    margin: 0;
    font-size: 1rem;
  }
  
  @media (max-width: 768px) {
    .footer-content {
      flex-direction: column;
      align-items: center;
    }
  
    .footer-section {
      margin: 20px 0;
      padding: 0px 20px;
    }
  }
  </style>
  