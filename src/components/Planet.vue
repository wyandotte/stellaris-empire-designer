<template>
  <h2>Home Planet</h2>

  <div class="planetName">
    <div class="EmpireInfo__item">
      <input type="text" name="planetName" v-model="planetName" placeholder="Home planet name" class="EmpireInfo__item__input">
    </div>
  </div>

  <div class="planetType clearfix">
    <ul class="Planet__list">
      <li v-for="planet in planets" class="Planet__list__item" @mouseover="updatePreview(planet)">
        <div :class="{'Planet__list__item--selected': isActive(planet)}" @click="pickPlanet(planet)">
          <img :src="planet.image" :alt="planet.name" class="Planet">
          <span>{{ planet.name }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import planets from '../data/planets'

  export default {
    props: [
      'planetName',
      'chosenPlanet',
    ],

    data() {
      return {
        planets: planets
      }
    },

    methods: {
      isActive(planet) {
        return this.chosenPlanet.name === planet.name;
      },

      pickPlanet(planet) {
        this.chosenPlanet = planet;
      },

      updatePreview(item) {
        this.$dispatch('preview', item);
      }
    }
  }
</script>

<style scoped>
  h2 {
    margin-top: 40px;
    text-align: center;
  }

  .planetName { text-align: center; }

  .Planet__list {
    padding-left: 0;
    list-style: none;
    display: flex;
    justify-content: center;
  }

  .Planet__list__item {
    float: left;
    margin: 10px;
    text-align: center;
    cursor: pointer;
  }

  .Planet__list__item--selected { font-weight: 700; }

  .Planet__list__item--selected img {
    border: 5px solid #0065AD;
    border-radius: 100px;
  }

  .Planet__list__item > div {
    display: flex;
    flex-direction: column;
  }

  .Planet {
    width: 110px;
  }
</style>
