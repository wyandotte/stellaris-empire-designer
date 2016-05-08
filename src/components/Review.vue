<template>
  <a href="#" class="Button" v-if="empireName && speciesName" @click="saveEmpire()" @mouseover="updatePreview({name: 'Save Empire', description: 'An exisiting empire with the same name will be overwritten'})">Save</a>

  <div v-show="nothingFilledOut" class="Review__help">
    Here all aspects of your Empire will be shown.
  </div>

  <h2>{{ empireName }}</h2>

  <p @mouseover="updatePreview(chosenGovernment)">
    {{ chosenGovernment.name }}
  </p>

  <div>
    <span v-for="ethos in chosenEthics">
      <img :src="ethos.image" :alt="ethos.name" class="Ethos__image" @mouseover="updatePreview(ethos)">
    </span>
  </div>

  <div class="clearfix">
    <div class="half">
      <h3 @mouseover="updatePreview({name: 'Species name'})">{{ speciesName }}</h3>

      <p v-for="trait in chosenTraits" @mouseover="updatePreview(trait)">
        <img :src="trait.image" :alt="trait.name" class="Ethos__image">
        <span>{{ trait.name }}</span>
      </p>
    </div>
    <div class="half">
      <h3 @mouseover="updatePreview({name: 'Home Planet name'})">{{ planetName }}</h3>

      <img :src="chosenPlanet.image" alt="chosenPlanet.name" class="Planet" @mouseover="updatePreview(chosenPlanet)">
    </div>
  </div>
</template>

<script>
  export default {
    props: [
      'speciesName',
      'empireName',
      'empireDescription',
      'planetName',
      'chosenPlanet',
      'chosenEthics',
      'chosenGovernment',
      'chosenTraits'
    ],

    computed: {
      nothingFilledOut() {
        return !this.speciesName && !this.empireName && this.chosenEthics.length === 0 && this.chosenGovernment.length === 0 && this.chosenTraits.length === 0;
      }
    },

    methods: {
      saveEmpire() {
        let key = null;

        for (let i = 0; i < localStorage.length; i++ ) {
          let item = JSON.parse(localStorage.getItem(localStorage.key(i)));
          if (item.empireName === this.empireName) {
            key = item.key;
          }
        }

        if (!key) {
          key = 'empire_' + (localStorage.length + 1);
        }

        localStorage.setItem(key, JSON.stringify({
          version: 2,
          key: key,
          speciesName: this.speciesName,
          empireName: this.empireName,
          empireDescription: this.empireDescription,
          planetName: this.planetName,
          chosenPlanet: this.chosenPlanet,
          chosenEthics: this.chosenEthics,
          chosenGovernment: this.chosenGovernment,
          chosenTraits: this.chosenTraits
        }));
      },

      updatePreview(item) {
        this.$dispatch('preview', item);
      }
    }
  }
</script>

<style scoped>
  .Review__help { text-align: center; }

  .Button { float: right; }

  .clearfix {
    width: 100%;
    margin-top: 40px;
  }

  .half {
    width: 50%;
    float: left;
  }

  .Planet { width: 200px; }
</style>
