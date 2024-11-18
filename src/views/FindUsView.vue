<template>
  <div class="find-us-view">
    <div class="header">
        <h1 class="gradient-title">Adresse</h1>
      </div>
    <div class="content">
      <div class="image-section">
        <img src="@/assets/restaurant.jpg" alt="Restaurant Chez TonTon" class="restaurant-image" />
        <div class="horaire-section">
          <h3 class="horaire-title">Les horaires</h3>
          <div class="hours-list">
            <div class="hours-item"><span class="day">Lundi</span><span class="time">11h30 - 14h00</span></div>
            <div class="hours-item"><span class="day">Mardi</span><span class="time">11h30 - 14h00, 18h30 - 21h00</span></div>
            <div class="hours-item"><span class="day">Mercredi</span><span class="time">11h30 - 14h00, 18h30 - 21h00</span></div>
            <div class="hours-item"><span class="day">Jeudi</span><span class="time">11h30 - 14h00, 18h30 - 21h00</span></div>
            <div class="hours-item"><span class="day">Vendredi</span><span class="time">11h30 - 14h00, 18h30 - 21h00</span></div>
            <div class="hours-item"><span class="day">Samedi</span><span class="time">Fermé</span></div>
            <div class="hours-item"><span class="day">Dimanche</span><span class="time">18h30 - 21h30</span></div>
          </div>
        </div>
      </div>
      <div class="map-section">
        <iframe
          class="restaurant-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2842.970547429009!2d4.5007054!3d44.5567071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b519155f31ea8d%3A0x5c43bae167f6f359!2sKebab%20Chez%20Ton-Ton&#39;s!5e0!3m2!1sfr!2sfr!4v1730979540250!5m2!1sfr!2sfr"
          width="100%"
          height="280"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FindUsView',
};
</script>

<style scoped>
.find-us-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgba(0, 0, 0, 0.800);
}

.content {
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100%;
  max-width: 1200px;
}

.image-section {
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.map-section {
  flex: 3;
}

.restaurant-image {
  width: 100%;
  height: 250px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

.restaurant-image:hover {
  transform: scale(1.05);
}

.restaurant-map {
  width: 100%;
  height: 520px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.horaire-title {
  margin-bottom: 15px;
  margin-top: 0px;
}

.hours-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0px 25px;
}

.hours-item {
  display: flex;
  justify-content: space-between;
  font-size: 1.1rem;
}

.day {
  font-weight: bold;
}

.time {
  text-align: right;
}

.title {
  font-size: 2.5rem;
  color: #D32F2F;
  margin-bottom: 20px;
}

@media screen and (max-width: 768px) {
  .content {
    flex-direction: column;
    gap: 30px;
  }

  .image-section {
    order: 2;
  }

  .map-section {
    order: 1;
  }

  .restaurant-map {
    height: 300px;
  }

  .hours-list {
    padding: 0;
    gap: 5px;
  }

  .hours-item {
    font-size: 1rem;
  }
}
</style>
