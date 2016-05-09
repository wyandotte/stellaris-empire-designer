<template>
  <div class="TraitPicker clearfix">
    <chosen :data="chosenTraits"></chosen>

    <h2>Traits</h2>
    <p>
      Points: {{ points }}, Remaining choices: {{ choices }}
    </p>

    <div class="Trait" v-for="type in traits">
      <h3>{{ type.name }}</h3>

      <ul class="Ethos__list" v-for="trait in type.components">
        <li :class="['Ethos__list__item', { 'Ethos__list__item--locked': isLocked(trait), 'Ethos__list__item--selected': isActive(trait) }]" @click="pickTrait(trait)" @mouseover="updatePreview(trait)">
          <img :src="trait.image" :alt="trait.name" class="Ethos__image">
          <span>{{ trait.name }}</span> <span class="cost">{{ trait.cost}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Chosen from './Chosen'

import _ from 'lodash'
import traits from '../data/traits'

export default {
  props: ['chosenTraits'],

  components: { Chosen },

  data () {
    return {
      traits: traits
    }
  },

  computed: {
    points() {
      let points = 2;

      for (let trait of this.chosenTraits) {
        points -= trait.cost;
      }

      return points;
    },

    choices() {
      return 4 - this.chosenTraits.length;
    }
  },

  methods: {
    isActive(trait) {
      return _.find(this.chosenTraits, {name: trait.name});
    },

    isLocked(trait) {
      let vm = this;

      let lockedItem;

      _.each(trait.excludes, function(value, key) {
        if (lockedItem === undefined) {
          lockedItem = _.find(vm.chosenTraits, function(o) { return o.name == value })
        }
      });

      if (lockedItem !== undefined) {
        return true;
      }

      return false;
    },

    pickTrait(trait) {
      if (! this.isLocked(trait)) {
        // De-select if selected
        if (this.isActive(trait)) {
          this.deleteFromChosenTraits(trait);
        } else {
          if (((this.points - trait.cost) >= 0) && (this.choices - 1) >= 0) {
            this.chosenTraits.push(trait);
          }
        }
      }
    },

    deleteFromChosenTraits(trait) {
      let deleteKey;

      _.each(this.chosenTraits, function(value, key) {
        if (value.name === trait.name) {
          deleteKey = key;
        }
      });

      this.chosenTraits.splice(deleteKey, 1);
    },

    updatePreview(trait) {
      this.$dispatch('preview', trait);
    }
  }
}
</script>

<style>
  .TraitPicker {
    position: relative;
    margin-top: 40px;
  }

  .Trait {
    width: 50%;
    float: left;
  }

  @media only screen and (max-width: 500px) {
    .Trait { width: 100%; }
  }

  .cost {
    font-size: 0.9rem;
    color: #888;
  }
</style>
