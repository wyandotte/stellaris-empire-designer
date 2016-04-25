<template>
  <div v-if="nothingFilledOut" class="Review__help">
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

  <h3>{{ speciesName }}</h3>

  <div>
    <p v-for="trait in chosenTraits" @mouseover="updatePreview(trait)">
      <img :src="trait.image" :alt="trait.name" class="Ethos__image">
      <span>{{ trait.name }}</span>
    </p>
  </div>
</template>

<script>
  export default {
    props: [
      'speciesName',
      'empireName',
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
      updatePreview(item) {
        this.$dispatch('preview', item);
      }
    }
  }
</script>

<style>
  .Review__help { text-align: center; }
</style>
