<template>
  <div class="restaurant-section">
    <div class="content-left">
      <div class="logo">
      <img src="@/assets/logo.png" alt="Chez TonTon" />
    </div>
      <div class="restaurant-rating">
        <span class="rating-stars">⭐ 4.5 </span>
        <span class="rating-count"> (136 avis)</span>
      </div>
      <p class="description">Chez TonTon's, on fait les choses bien : kebabs faits maison, produits frais, et un max de saveurs. Du bon, du local, servi dans la bonne humeur. Viens te régaler !</p>
      <div class="icons">
        <div class="icon-container">
          <img src="@/assets/sur-place-icon.svg" alt="Sur place" class="icon" />
          <p>Sur place</p>
        </div>
        <div class="icon-container">
          <img src="@/assets/a-emporter-icon.svg" alt="À emporter" class="icon" />
          <p>Emporter</p>
        </div>
      </div>
      
    </div>
    <div class="content-right">
      <div class="slideshow">
        <img :src="currentImage" alt="Image du restaurant" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RestaurantView',
  data() {
    return {
      images: [
        require('@/assets/assiette_kebab.png'),
        require('@/assets/assiette_steak.png'),
        require('@/assets/assiette_steakhache.png'),
      ],
      currentIndex: 0,
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex];
    },
  },
  mounted() {
    this.startSlideshow();
  },
  methods: {
    startSlideshow() {
      setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      }, 3000); // Change l'image toutes les 3 secondes
    },
  },
};
</script>

<style scoped>
.restaurant-section {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0px;
  padding-bottom: 50px;
  gap: 33px;
  position: relative;
}

.content-left {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
}

.logo img {
  height: 150px;
  transform: translateX(13px);
}

.restaurant-rating {
  margin-top: 15px;
  margin-bottom: 20px;
  font-size: 1.2rem;
  text-align: center;
  color: #FFA500;
}

.rating-stars {
  font-weight: bold;
}

.rating-count {
  color: #333;
  font-size: 1.1rem;
}

.icons {
  display: flex;
  gap: 75px;
  margin-top: 50px;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.icon-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 13px 40px;
  background: #f53d00e6;;
  border-radius: 25%;
}

.icon-container:hover {
  transform: scale(1.01)
}

.icon {
  width: 100px;
  height: 100px;
}

.icon-container p {
  margin-top: 10px;
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
  color: white;
}

.description {
  font-size: 1.1rem;
  line-height: 1.5;
  font-weight: 600;
  padding: 0px 40px;
}

.content-right {
  width: 50%;
}

.slideshow {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.slideshow img {
  max-width: 500px;
  max-height: 500px;
}

@media screen and (max-width: 768px) {
  .restaurant-section {
    flex-direction: column;
    height: auto;
    padding: 20px;
  }

  .content-left, .content-right {
    width: 100%;
  }

  .main-title {
    font-size: 2.3rem;
    text-align: center;
  }

  .logo img {
  height: 150px;
  transform: translateX(2px);
}

  .description {
    padding: 0;
    text-align: center;
  }

  .icons {
    flex-direction: column;
    gap: 20px;
    margin-top: 30px;
  }

  .slideshow img {
    height: auto;
    max-height: 300px;
    object-fit: cover;
  }
}

@media screen and (max-width: 1024px) {
  
  .slideshow img {
    max-width: 95%;
    max-height: auto;
  }

 }

 @media screen and (max-width: 436px) { 
  .slideshow img {
  max-width: 90%;
  max-height: auto;
}
}
</style>
