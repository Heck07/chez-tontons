<template>
  <div class="products-view">
    <div class="header">
      <h1 class="gradient-title">Les Produits</h1>
    </div>
    <div class="products-content">
      <div class="products-column">
        <div v-for="(product, index) in products.filter((_, i) => i % 2 === 0)" :key="index" class="product-item">
          <img :src="product.image" :alt="product.name" class="product-image" />
          <div class="product-details">
            <h2 class="product-name">{{ product.name }}</h2>
            <p class="product-description">{{ product.description }}</p>
          </div>
        </div>
      </div>
      <div class="products-column">
        <div v-for="(product, index) in products.filter((_, i) => i % 2 !== 0)" :key="index" class="product-item">
          <img :src="product.image" :alt="product.name" class="product-image" />
          <div class="product-details">
            <h2 class="product-name">{{ product.name }}</h2>
            <p class="product-description">{{ product.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductsView',
  data() {
    return {
      products: [
        {
          name: 'Assiette Kebab',
          description: 'Assiette composée de viande de kebab avec ses frites et une salade fraîche accompagné de sa sauce.',
          image: require('@/assets/assiette_kebab.png')
        },
        {
          name: 'Assiette Steak',
          description: 'Un steak haché grillé, accompagné de frites croustillantes et d une salade fraîche et croquante.',
          image: require('@/assets/assiette_steakhache.png'),
        },
        {
          name: 'Assiette Mixte',
          description: 'Un steak grillé, accompagné de frites fraiches et d une salade avec sa sauce maison.',
          image: require('@/assets/assiette_steak.png'),
        },
        {
          name: 'Assiette Kebab',
          description: 'Assiette composée de viande de kebab avec ses frites et une salade fraîche accompagné de sa sauce.',
          image: require('@/assets/assiette_kebab.png')
        },
        {
          name: 'Assiette Steak',
          description: 'Un steak haché grillé, accompagné de frites croustillantes et d une salade fraîche et croquante.',
          image: require('@/assets/assiette_steakhache.png'),
        },
        {
          name: 'Assiette Mixte',
          description: 'Un steak grillé, accompagné de frites fraiches et d une salade avec sa sauce maison.',
          image: require('@/assets/assiette_steak.png'),
        },
      ],
    };
  },
};
</script>

<style scoped>
.products-view {
  padding-top: 20px;
  color: rgba(0, 0, 0, 0.800);
}

.products-content {
  display: flex;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 100px;    
  justify-content: center;
  align-items: center;
  align-content: center;
}

.products-column {
  width: 48%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.product-item {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #f8f8f8b8;
  padding: 20px;
  border-radius: 10px;
  align-items: center;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.product-item:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}

.product-image {
  width: 100%;
  max-width: 200px;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
}

.product-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.product-name {
  font-size: 1.8rem;
  margin-bottom: 10px;
}

.product-description {
  font-size: 1.2rem;
  line-height: 1.5;
  margin-top: 5px;
}

@media screen and (max-width: 768px) {
  .products-view {
    padding: 10px;
  }

  .products-content {
    flex-direction: column;
    gap: 15px;
  }

  .products-column {
    width: 100%;
  }

  .product-item {
    flex-direction: column;
    align-items: center;
    padding: 15px;
  }

  .product-image {
    max-width: 150px;
  }

  .product-name {
    font-size: 1.5rem;
  }

  .product-description {
    font-size: 1rem;
  }
}
</style>
