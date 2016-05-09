<template>
  <div class="EthosPicker clearfix">
    <chosen :data="chosenEthics"></chosen>

    <h2>Ethos</h2>
    <p>
      Points: {{ points }}
    </p>

    <div class="Ethos" v-for="type in ethics">
      <h3>{{ type.name }}</h3>

      <ul class="Ethos__list" v-for="ethos in type.components">
        <li :class="['Ethos__list__item', { 'Ethos__list__item--selected': isActive(ethos) }]" @click="pickEthos(ethos)" @mouseover="updatePreview(ethos)">
          <img :src="ethos.image" :alt="ethos.name" class="Ethos__image">
          <span>{{ ethos.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Chosen from './Chosen'

import _ from 'lodash'
import ethics from '../data/ethics'

export default {
  props: ['chosenEthics'],

  components: { Chosen },

  data () {
    return {
      ethics: ethics
    }
  },

  computed: {
    points() {
      let points = 3;
      for (let ethos of this.chosenEthics) {
        points -= ethos.points;
      }

      return points;
    }
  },

  methods: {
    isActive(ethos) {
      return _.find(this.chosenEthics, {name: ethos.name});
    },

    pickEthos (ethos) {
      // De-select if selected
      if (this.isActive(ethos)) {
        this.deleteFromChosenEthics(ethos);
      } else {
        let sameType = _.find(this.chosenEthics, {type: ethos.type});

        if (sameType) {
          if ((this.points + sameType.points - ethos.points) >= 0) {
            this.deleteSameType(ethos);
            this.addEthos(ethos);
          }
        } else if ((this.points - ethos.points >= 0)) {
          this.addEthos(ethos);
        }
      }
    },

    deleteFromChosenEthics(ethos) {
      let deleteKey;

      _.each(this.chosenEthics, function(value, key) {
        if (value.name === ethos.name) {
          deleteKey = key;
        }
      });

      this.chosenEthics.splice(deleteKey, 1);
    },

    addEthos(ethos) {
      // Add new ethos to chosen ethics
      this.chosenEthics.push(ethos);
    },

    deleteSameType(ethos) {
      // Only one ethos per type allowed, delete if another of this type is chosen
      let sameType = _.find(this.chosenEthics, {type: ethos.type});

      if(sameType) {
        _.remove(this.chosenEthics, function(item) {
          return item.type === ethos.type;
        });
      }
    },

    updatePreview(ethos) {
      this.$dispatch('preview', ethos);
    }
  },
}
</script>

<style>
  .EthosPicker { position: relative; }

  .Ethos {
    width: 50%;
    float: left;
  }

  @media only screen and (max-width: 500px) {
    .Ethos { width: 100%; }
  }

  .Ethos__list {
    padding-left: 0;
    list-style: none;
  }

  .Ethos__image { vertical-align: middle; }

  .Ethos__list__item {
    margin: 10px 0;
    height: 40px;
  }

  .Ethos__list__item--selected { font-weight: 700; }
  .Ethos__list__item--selected .Ethos__image {
    border-radius: 40px;
    border: 4px solid #0065AD;
  }

  .Ethos__list__item:hover {
    cursor: pointer;
    color: black;
  }

  .Ethos__list__item--locked { color: #aaa; }
  .Ethos__list__item--locked:hover {
    cursor: default;
    color: #aaa;
  }

  .Ethos__image { width: 40px; }
</style>
