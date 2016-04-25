<template>
  <empire-info :species-name.sync="speciesName" :empire-name.sync="empireName"></empire-info>
  <ethos-picker :chosen-ethics.sync="chosenEthics"></ethos-picker>
  <government-picker :chosen-ethics="chosenEthics" :chosen-government.sync="chosenGovernment"></government-picker>
  <trait-picker :chosen-traits.sync="chosenTraits"></trait-picker>

  <a v-link="{ name: 'review' }" class="Button">View empire</a>

  <app-footer></app-footer>
</template>

<script>
import EmpireInfo from './EmpireInfo'
import EthosPicker from './EthosPicker'
import GovernmentPicker from './GovernmentPicker'
import TraitPicker from './TraitPicker'
import AppFooter from './AppFooter'

 export default {
   props: [
     'speciesName',
     'empireName',
     'chosenEthics',
     'chosenGovernment',
     'chosenTraits'
   ],

   components: {
     EmpireInfo,
     EthosPicker,
     GovernmentPicker,
     TraitPicker,
     AppFooter,
   },

   data() {
     return {
     }
   }
 }
</script>

<style>
  .Button {
    display: block;
    margin: 0 auto;
    margin-top: 20px;
    padding: 15px;
    border-radius: 3px;
    font-size: 1.2rem;
    background-color: #61BD6D;
    text-decoration: none;
    color: #2c3e50;
    text-align: center;
  }
</style>
