<template>
  <div class="reviews-view">
    <div class="header">
      <h1 class="gradient-title">Nos clients</h1>
    </div>
    <div class="reviews-carousel">
      <transition-group name="slide" tag="div" class="reviews-content" @before-enter="beforeEnter" @enter="enter">
        <div v-for="(review, index) in visibleReviews" :key="index" class="review-item">
          <h2 class="review-author">{{ review.author }}</h2>
          <div class="review-rating">
            <span v-for="n in 5" :key="n" class="star" :class="{ filled: n <= review.rating }">★</span>
          </div>
          <p class="review-text">{{ review.text }}</p>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReviewsView',
  data() {
    return {
      reviews: [
        {
          author: 'Jean Dupont',
          rating: 5,
          text: 'Excellent restaurant ! La nourriture est délicieuse et le personnel très accueillant.'
        },
        {
          author: 'Marie Leclerc',
          rating: 4,
          text: 'Très bonne expérience. Le kebab était savoureux et les portions étaient généreuses.'
        },
        {
          author: 'Pierre Martin',
          rating: 3,
          text: 'Le repas était correct, mais j’aurais aimé un peu plus de choix végétarien.'
        },
        {
          author: 'Sophie Bernard',
          rating: 5,
          text: 'Un super endroit pour manger en famille ! Les enfants ont adoré.'
        },
        {
          author: 'Lucie Moreau',
          rating: 4,
          text: 'Le service est rapide et les prix sont raisonnables. Je recommande !'
        },
        {
          author: 'Nicolas Girard',
          rating: 5,
          text: 'La meilleure expérience culinaire que j’ai eue depuis longtemps. Bravo à toute l’équipe !'
        },
        {
          author: 'Camille Dubois',
          rating: 4,
          text: 'Ambiance agréable et nourriture délicieuse. Je reviendrai sûrement.'
        },
        {
          author: 'Thomas Leroy',
          rating: 3,
          text: 'Service un peu lent, mais les plats étaient bons.'
        },
        {
          author: 'Romain Dupont',
          rating: 5,
          text: 'La meilleure expérience culinaire que j’ai eue depuis longtemps. Bravo à toute l’équipe !'
        }
      ],
      currentIndex: 0,
    };
  },
  computed: {
    visibleReviews() {
      // S'assurer qu'il y a toujours 3 avis visibles, même à la fin du tableau
      const start = this.currentIndex;
      const end = (this.currentIndex + 3) > this.reviews.length ? this.reviews.length : (this.currentIndex + 3);
      return this.reviews.slice(start, end);
    }
  },
  mounted() {
    this.startCarousel();
  },
  methods: {
    startCarousel() {
      setInterval(() => {
        if (this.currentIndex + 3 >= this.reviews.length) {
          this.currentIndex = 0;
        } else {
          this.currentIndex += 3;
        }
      }, 5000); // Change les avis toutes les 5 secondes
    },
    beforeEnter(el) {
      el.style.transform = 'translateX(100%)';
      el.style.opacity = '0';
    },
    enter(el, done) {
      el.style.transition = 'all 1s ease';
      el.style.transform = 'translateX(0)';
      el.style.opacity = '1';
      done();
    },
  },
};
</script>

<style scoped>
.reviews-view {
  padding: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgba(0, 0, 0, 0.800);
}

.title {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.reviews-carousel {
  position: relative;
  width: 90%;
  overflow: hidden;
}

.reviews-content {
  display: flex;
  transition: transform 1s ease;
  justify-content: center;
}

.review-item {
  flex: 1;
  max-width: 30%;
  background-color: #f8f8f8;
  padding: 20px;
  margin: 0 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  height: 300px;
  width: 200px;
}

.review-author {
  font-size: 1.8rem;
  margin-bottom: 10px;
}

.review-rating {
  margin-bottom: 10px;
}

.star {
  font-size: 1.5rem;
  color: #ccc;
}

.star.filled {
  color: #ffa500;
}

.review-text {
  font-size: 1.2rem;
  line-height: 1.5;
}

.slide-enter-active, .slide-leave-active {
  transition: all 1s ease;
}

.slide-enter, .slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

@media screen and (max-width: 768px) {
  .reviews-content {
    flex-direction: column;
    align-items: center;
  }

  .review-item {
    width: 100%;
    margin: 10px 0;
    max-width: 90%;
  }

  .review-author {
    font-size: 1.5rem;
  }

  .review-text {
    font-size: 1rem;
  }
}
</style>
