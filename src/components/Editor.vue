<template>
  <p class="Buttons">
    <a class="Button Button--delete" @click="reset()" @mouseover="$dispatch('preview', {'name': 'Clear selection', description: 'This will reset everything'})" v-if="empireName || speciesName || chosenEthics.length > 0 || chosenGovernment.length > 0 || chosenTraits.length > 0">Reset</a>
    <a class="Button" @click="save()" @mouseover="$dispatch('preview', {'name': 'Save Empire', description: 'An exisiting empire with the same name will be overwritten'})" v-if="empireName && speciesName">Save</a>
  </p>

  <empire-info :species-name.sync="speciesName" :empire-name.sync="empireName" :empire-description.sync="empireDescription"></empire-info>
  <planet :planet-name.sync="planetName" :chosen-planet.sync="chosenPlanet"></planet>
  <ethos-picker :chosen-ethics.sync="chosenEthics"></ethos-picker>
  <government-picker :chosen-ethics="chosenEthics" :chosen-government.sync="chosenGovernment"></government-picker>
  <trait-picker :chosen-traits.sync="chosenTraits"></trait-picker>

  <a v-link="{ name: 'review' }" class="Button Button--block" @click="$dispatch('preview', {})">View empire</a>

  <app-footer></app-footer>
</template>

<script>
import EmpireInfo from './EmpireInfo'
import Planet from './Planet'
import EthosPicker from './EthosPicker'
import GovernmentPicker from './GovernmentPicker'
import TraitPicker from './TraitPicker'
import AppFooter from './AppFooter'

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

   components: {
     EmpireInfo,
     Planet,
     EthosPicker,
     GovernmentPicker,
     TraitPicker,
     AppFooter,
   },

   methods: {
     reset() {
       this.$dispatch('reset');
     },

     save() {
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
     }
   }
 }
</script>

<style scoped>
  p.Buttons {
    display: flex;
    justify-content: center;
    margin: 30px;
  }

  .Button:not(:first-child) { margin-left: 20px; }
</style>
