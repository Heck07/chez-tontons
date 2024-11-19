  <template>
    <div>
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
          <p>{{ openingHoursToday }}</p>
        </div>
      </div>

      <header class="header">
        <div class="logo">
          <img src="@/assets/logo.png" alt="Chez TonTon" />
        </div>
        <div class="burger-menu" @click="toggleMenu">
          ☰
        </div>
        <nav class="menu" :class="{ open: isMenuOpen }" ref="menu" >
          <ul>
            <li><a href="#restaurant" :class="{ active: activeSection === 'restaurant' }" @click.prevent="scrollToSection('restaurant')">Le restaurant</a></li>
            <li><a href="#menu" :class="{ active: activeSection === 'menu' }" @click.prevent="scrollToSection('menu')">La carte</a></li>
            <li><a href="#products" :class="{ active: activeSection === 'products' }" @click.prevent="scrollToSection('products')">Les produits</a></li>
            <li><a href="#map" :class="{ active: activeSection === 'map' }" @click.prevent="scrollToSection('map')">Adresse</a></li>
            <li><a href="#reviews" :class="{ active: activeSection === 'reviews' }" @click.prevent="scrollToSection('reviews')">Avis</a></li>
          </ul>
        </nav>
        <div class="socials">
          <a href="https://facebook.com" target="_blank">
            <img src="@/assets/facebook-icon.png" alt="Facebook" />
          </a>
          <a href="https://instagram.com" target="_blank">
            <img src="@/assets/instagram-icon.png" alt="Instagram" />
          </a>
        </div>
      </header>

      <section id="restaurant" class="section-other">
        <RestaurantView />
      </section>

      <section id="menu" class="section">
        <MenuView />
      </section>

      <section id="products" class="section">
        <ProductsView />
      </section>

      <section id="map" class="section">
        <FindUsView />
      </section>

      <section id="reviews" class="section">
        <ReviewsView />
      </section>
    </div>
  </template>

  <script>
  import RestaurantView from '@/views/RestaurantView.vue';
  import MenuView from '@/views/MenuView.vue';
  import ProductsView from '@/views/ProductsView.vue';
  import ReviewsView from '@/views/ReviewsView.vue';
  import FindUsView from '@/views/FindUsView.vue';

  export default {
    name: 'HeaderComponent',
    components: {
      RestaurantView,
      MenuView,
      ProductsView,
      ReviewsView,
      FindUsView,
    },
    data() {
      return {
        hours: {
          lundi: [{ start: '11:30', end: '14:00' }],
          mardi: [{ start: '11:30', end: '14:00' }, { start: '18:30', end: '21:00' }],
          mercredi: [{ start: '11:30', end: '14:00' }, { start: '18:30', end: '21:00' }],
          jeudi: [{ start: '11:30', end: '14:00' }, { start: '18:30', end: '21:00' }],
          vendredi: [{ start: '11:30', end: '14:00' }, { start: '18:30', end: '21:00' }],
          samedi: [],
          dimanche: [{ start: '18:30', end: '21:30' }],
        },
        isMenuOpen: false,
        activeSection: '',
        offsets: {
          restaurant: 150,
          menu: 75,
          products: 75,
          map: 95,
          reviews: 75,
        },
        
      };
    },
    computed: {
      isOpen() {
        const currentDay = new Date().toLocaleString('fr-FR', { weekday: 'long' }).toLowerCase();
        const currentTime = new Date().getHours() * 60 + new Date().getMinutes();
        return this.hours[currentDay]?.some(({ start, end }) => {
          const [startHour, startMinute] = start.split(':').map(Number);
          const [endHour, endMinute] = end.split(':').map(Number);
          return currentTime >= startHour * 60 + startMinute && currentTime <= endHour * 60 + endMinute;
        });
      },
      openingHoursToday() {
        const currentDay = new Date().toLocaleString('fr-FR', { weekday: 'long' }).toLowerCase();
        return this.hours[currentDay]?.map(({ start, end }) => `${start} - ${end}`).join(', ') || 'Fermé';
      },
    },
    methods: {
      callOrder() {
        window.location.href = 'tel:+33222333444';
      },
      scrollToSection(sectionId) {
        const offset = this.offsets[sectionId] || 66;
        const element = document.getElementById(sectionId);
        if (element) {
          const scrollOffset = element.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: scrollOffset, behavior: 'smooth' });
          this.activeSection = sectionId;

          setTimeout(() => {
            this.isMenuOpen = false;
          }, 100); // Délai de 300ms
        }
      },
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;

      },
      handleOutsideClick(event) {
        const menu = this.$refs.menu; // Référence à l'élément nav.menu
        if (menu && !menu.contains(event.target)) {
          this.isMenuOpen = false;
          document.removeEventListener('click', this.handleOutsideClick); // Nettoyez le gestionnaire
        }
      },
      updateActiveSection() {
        const sections = document.querySelectorAll('section');
        let currentSection = '';

        sections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          const offset = -130;

          // Vérifie si 50 pixels plus bas dans la section sont visibles
          if (rect.top <= window.innerHeight / 2 + offset && rect.bottom >= window.innerHeight / 2 + offset) {
            currentSection = section.id;
          }
        });

        this.activeSection = currentSection; // Met à jour la section active
      },
      updateOffsets() {
        if (window.innerWidth <= 436) {
          this.offsets = { restaurant: 150, menu: 95, products: 105, map: 115, reviews: 95 };
        } else if (window.innerWidth <= 768) {
          this.offsets = { restaurant: 150, menu: 75, products: 85, map: 95, reviews: 75 };
        } else {
          this.offsets = { restaurant: 150, menu: 75, products: 75, map: 95, reviews: 75 };
        }
      },
    },
    mounted() {
      window.addEventListener('resize', this.updateOffsets);
      window.addEventListener('scroll', this.updateActiveSection);
      this.updateOffsets();
      this.updateActiveSection();
    },
    beforeUnmount() {
      document.removeEventListener('click', this.handleOutsideClick);
      window.removeEventListener('resize', this.updateOffsets);
      window.removeEventListener('scroll', this.updateActiveSection);
    },
  };
  </script>
    <style scoped>
    .banner {
      position: sticky;
      top: 0;
      z-index: 1000;
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-align: center;
      padding: 10px 20px;
      background-color: #000000;
      color: #FFF;
      font-family: 'Poppins', sans-serif;
    }

    .header {
      position: sticky;
      top: 63px;
      z-index: 999;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 75px;
      gap: 50px;
      margin-bottom: 0px;
      background-color: #f53d00e6;
    }

    .logo img {
      height: 50px;
    }

    .burger-menu {
      display: none;
      font-size: 2rem;
      cursor: pointer;
      position: absolute;
      right: 20px;
    }

    .menu {
      display: flex;
      gap: 30px;
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
    
    .menu a:hover,    
    .menu a.active {
      color: #FFEB3B;
    }

    .socials {
      display: flex;
      align-items: center;
      gap: 15px;
    }

    .socials a img {
      height: 33px;
      width: 33px;
      transition: transform 0.3s ease;
    }

    .socials a img:hover {
      transform: scale(1.2);
    }

    .address, .order-button, .opening-hours {
      flex: 1;
    }

    .order-button {
      display: flex;
      justify-content: center;
    }

    .order-button button {
      padding: 6px 25px;
      background-color: #f57c00;
      background-image: linear-gradient(160deg, #f57b00ba 0%, #ffeb3bb8 100%);
      color: #FFF;
      border: 2px solid white;
      border-radius: 10px;
      cursor: pointer;
      font-weight: bold;
      font-size: 1rem;
      transition: background-color 0.3s ease;
    }

    .order-button button:hover {
      background-color: #f57c00;
      background-image: linear-gradient(160deg, #f57b00 0%, #ffeb3b 100%);
    }

    .opening-hours {
      text-align: center;
    }

    .opening-hours p {
      margin: 3px 0;
    }

    .opening-hours .open {
      color: #4CAF50;
    }

    .opening-hours .closed {
      color: #F44336;
    }

    @media screen and (max-width: 1200px) {
  .menu ul {
    align-items: center;
    justify-content: center;
  }
}

@media screen and (max-width: 836px) {
  .socials {
    display: none;
  }
}

@media screen and (max-width: 768px) {
  .banner {
    font-size: 1rem;
  }
  .address {
    display: none;
  }
  .header {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: +100px;
  }

  .burger-menu {
    display: block;
    text-align: center;
  }

  .menu {
    display: none;
    position: fixed;
    top: 63px;
    left: 0;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.9);
    gap: 20px;
    z-index: 2000;
  }

  .menu.open {
    display: flex;
    justify-content: baseline;
  }

  .menu ul {
    flex-direction: column;
    align-items: center;
  }

  .menu a {
    font-size: 1.5rem;
    color: #FFF;
  }

  .socials {
    display: none;
  }
}

@media screen and (max-width: 436px) {
  .header {
    position: fixed; /* Assurez-vous que la position est correcte */
    top: 100px;
  }
  .banner {
    font-size: 0.5rem;
  }
}
    </style>

