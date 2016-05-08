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
  export default {
    props: [
      'planetName',
      'chosenPlanet',
    ],

    data() {
      return {
        planets: [
          {
            'name': 'Arctic',
            'description': 'Frigid, rocky world with a nitrogen-oxygen atmosphere. Significant water deposits can be found permanently frozen as glacial ice. Some life signs and vegetation, most of it clustered around the slightly warmer equatorial regions.',
            'image': 'http://www.stellariswiki.com/images/6/6a/Arctic.png',
          },
          {
            'name': 'Ocean',
            'description': 'Rocky world with a nitrogen-oxygen atmosphere and a significant hydrosphere. Oceans cover more than 95% of the surface, with scattered islands making up the remaining percentage. Abundant life signs, the vast majority aquatic.',
            'image': 'http://www.stellariswiki.com/images/8/89/Ocean.png',
          },
          {
            'name': 'Continental',
            'description': 'Rocky world with a nitrogen-oxygen atmosphere. Active and stable hydrosphere. Landmasses are separated by vast oceans, with large climate variations depending on temperature and precipitation. Significant biosphere.',
            'image': 'http://www.stellariswiki.com/images/d/df/Continental.png',
          },
          {
            'name': 'Tropical',
            'description': 'Humid, rocky world with a nitrogen-oxygen atmosphere. Seasons with significant precipitation are interchanged with drier periods. Most landmasses are covered in dense vegetation and there are abundant life signs.',
            'image': 'http://www.stellariswiki.com/images/0/01/Tropical.png',
          },
          {
            'name': 'Desert',
            'description': 'Dry, rocky world with a nitrogen-oxygen atmosphere. Precipitation and major bodies of surface water are relatively rare. Significant temperature variations between day and night cycles. Scarce vegetation, with moderate life signs.',
            'image': 'http://www.stellariswiki.com/images/6/6d/Desert.png',
          },
          {
            'name': 'Arid',
            'description': 'Dry, rocky world with a nitrogen-oxygen atmosphere. The dust-covered terrain consists largely of mesas and canyons. Forests can be found in the more temperate polar regions, but vegetation is otherwise scarce. Moderate life signs detected.',
            'image': 'http://www.stellariswiki.com/images/6/6a/Arid.png',
          },
          {
            'name': 'Tundra',
            'description': 'Cold and rocky world with a nitrogen-oxygen atmosphere. Permafrost covers most of the surface except for the more temperate regions by the equator. A stable biosphere exists but vegetation is mostly limited to mosses and lichens.',
            'image': 'http://www.stellariswiki.com/images/1/17/Tundra.png',
          },
        ]
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
