<template>
  <h2>Share</h2>
</template>

<script>
  import querystring from 'querystring'

  import planets from '../data/planets'
  import ethics from '../data/ethics'
  import governments from '../data/governments'
  import traits from '../data/traits'

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

    ready() {
      // Reset everything
      this.$dispatch('reset');

      const configQueryString = this.$route.params.config;

      const sharedEmpireConfiguration = querystring.parse(configQueryString);

      this.speciesName = sharedEmpireConfiguration.speciesName;
      this.empireName = sharedEmpireConfiguration.empireName;
      this.empireDescription = sharedEmpireConfiguration.empireDescription;
      this.planetName = sharedEmpireConfiguration.planetName;

      let vm = this;

      // set chosen planet
      if (sharedEmpireConfiguration.chosenPlanet) {
        for (let i = 0; i < planets.length; i++ ) {
          if (planets[i].name === sharedEmpireConfiguration.chosenPlanet) {
            vm.chosenPlanet = planets[i];
          }
        }
      }

      // set chosen ethics
      if (sharedEmpireConfiguration.chosenEthics) {
        for (let e = 0; e < sharedEmpireConfiguration.chosenEthics.length; e++) {
          for (let i = 0; i < ethics.length; i++ ) {
            for (let j = 0; j < ethics[i].components.length; j++) {
              if (ethics[i].components[j].name === sharedEmpireConfiguration.chosenEthics[e]) {
                vm.chosenEthics.push(ethics[i].components[j]);
              }
            }
          }
        }
      }

      // set chosen government
      if (sharedEmpireConfiguration.chosenGovernment) {
        for (let i = 0; i < governments.length; i++ ) {
          for (let j = 0; j < governments[i].components.length; j++) {
            if (governments[i].components[j].name === sharedEmpireConfiguration.chosenGovernment) {
              vm.chosenGovernment = governments[i].components[j];
            }
          }
        }
      }

      // set chosen traits
      if (sharedEmpireConfiguration.chosenTraits) {
        for (let t = 0; t < sharedEmpireConfiguration.chosenTraits.length; t++) {
          for (let i = 0; i < traits.length; i++ ) {
            for (let j = 0; j < traits[i].components.length; j++) {
              if (traits[i].components[j].name === sharedEmpireConfiguration.chosenTraits[t]) {
                vm.chosenTraits.push(traits[i].components[j]);
              }
            }
          }
        }
      }

      this.$router.go({name: 'review'});
    }
  }
</script>
