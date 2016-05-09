<template>
  <div class="GovernmentPicker clearfix">
    <chosen :data="chosenGovernment"></chosen>

    <h2>Government</h2>

    <div class="Government" v-for="type in governments">
      <h3>{{ type.name }}</h3>

      <ul class="Ethos__list" v-for="government in type.components">
        <li :class="['Ethos__list__item', { 'Ethos__list__item--locked': isLocked(government), 'Ethos__list__item--selected': isActive(government) }]" @click="pickGovernment(government)" @mouseover="updatePreview(government)">
          <img :src="government.image" :alt="government.name" class="Ethos__image">
          <span>{{ government.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Chosen from './Chosen'

import _ from 'lodash'
import governments from '../data/governments'

export default {
  props: [
    'chosenEthics',
    'chosenGovernment'
  ],

  components: { Chosen },

  data () {
    return {
      governments: governments
    }
  },
  methods: {
    isActive(government) {
      if (this.chosenGovernment !== null) {
        return this.chosenGovernment.name === government.name;
      }

      return false;
    },

    isLocked (government) {
      let vm = this;

      let lockedItem;

      _.each(government.locked, function(value, key) {
        if (lockedItem === undefined) {
          lockedItem = _.find(vm.chosenEthics, function(o) { return o.name == value })
        }
      });

      let unlockedItem;

      _.each(government.unlocked, function(value, key) {
        if (unlockedItem === undefined) {
          unlockedItem = _.find(vm.chosenEthics, function(o) { return o.name == value })
        }
      });

      // Unlock only when none of locked is chosen and one of unlocked is chosen
      if (lockedItem !== undefined) {
        return true;
      } else if (unlockedItem !== undefined || government.unlocked.length === 0) {
        return false;
      }

      return true;
    },

    pickGovernment(government) {
      if (! this.isLocked(government)) {
        if (this.chosenGovernment && this.chosenGovernment.name === government.name) {
          this.chosenGovernment = [];
        } else {
          this.chosenGovernment = government;
        }
      }
    },

    updatePreview(government) {
      this.$dispatch('preview', government);
    }
  }
}
</script>

<style>
  .GovernmentPicker {
    position: relative;
    margin-top: 40px;
  }

  .Government {
    width: calc(100% / 3);
    float: left;
  }

  @media only screen and (max-width: 500px) {
    .Government { width: 100%; }
  }
</style>
