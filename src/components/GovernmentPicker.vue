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

export default {
  props: [
    'chosenEthics',
    'chosenGovernment'
  ],

  components: { Chosen },

  data () {
    return {
      governments: [
        {
          name: 'Autocracies',
          components: [
            {
              name: 'Military Dictatorship',
              description: 'This government is a militaristic form of autocracy, with the ruler serving as the undisputed head of the military which is firmly in control of the state apparatus.',
              rulerTitle: 'Grand Marshal',
              image: 'http://www.stellariswiki.com/images/4/4c/Military_Dictatorship.png',
              unlocked: ['Militarist', 'Fanatic Militarist'],
              locked: ['Individualist', 'Fanatic Individualist'],
              effects: [
                { name: 'Fleet Size Limit', value: 10, positive: true},
                { name: 'Ship Upkeep', value: -10, postfix: '%', positive: true},
                { name: 'Can build an oversized ship'},
                { name: 'Admirals/generals are eligible for rulership'},
              ]
            },
            {
              name: 'Divine Mandate',
              description: 'This government is a spiritualistic form of autocracy, where the ruler is treated as a divine symbol. Organized religion is widely employed in support of the state apparatus.',
              rulerTitle: 'Archprophet',
              image: 'http://www.stellariswiki.com/images/7/7f/Divine_Mandate.png',
              unlocked: ['Spiritualist', 'Fanatic Spiritualist'],
              locked: ['Individualist', 'Fanatic Individualist'],
              effects: [
                { name: 'Slavery Tolerance', value: 50, postfix: '%', positive: true},
                { name: 'Resettlement Cost', value: -15, postfix: '%', positive: true},
                { name: 'Can build a mausoleum, which grants -10% ethics divergence on the planet on which it is built'},
              ]
            },
            {
              name: 'Despotic Hegemony',
              description: 'This government is a materialistic form of autocracy, where citizens are viewed as little more than cogs in the state machinery. Efficiency and technological progress are valued above all things.',
              rulerTitle: 'Overseer',
              image: 'http://www.stellariswiki.com/images/a/a7/Despotic_Hegemony.png',
              unlocked: ['Materialist', 'Fanatic Materialist'],
              locked: ['Individualist', 'Fanatic Individualist'],
              effects: [
                { name: 'Research Speed', value: 5, postfix: '%', positive: true},
                { name: 'Survey Speed', value: 10, postfix: '%', positive: true},
                { name: 'Can build an elite assault army'},
              ]
            },
            {
              name: 'Enlightened Monarchy',
              description: '',
              rulerTitle: '',
              image: 'http://www.stellariswiki.com/images/2/2b/Enlightened_Monarchy.png',
              unlocked: ['Pacifist', 'Fanatic Pacifist'],
              locked: ['Individualist', 'Fanatic Individualist'],
              effects: [
                { name: 'Edict Cost', value: -25, postfix: '%', positive: true},
                { name: 'Planetary Edict Duration', value: 25, postfix: '%', positive: true},
                { name: 'Core Sector Planets', value: 1, positive: true},
                { name: 'Can build a special park building, which grants +10% happiness on the planet on which it is built'},
              ]
            },
            {
              name: 'Despotic Empire',
              description: 'This government is a relatively pure form of autocracy, with an absolute ruler that governs the state with an iron gripping appendage.',
              rulerTitle: 'Emperor',
              image: 'http://www.stellariswiki.com/images/1/1d/Despotic_Empire.png',
              unlocked: [],
              locked: ['Individualist', 'Fanatic Individualist'],
              effects: [
                { name: 'Building Cost', value: -15, postfix: '%', positive: true},
                { name: 'Slave Mineral Output', value: 10, postfix: '%', positive: true},
                { name: 'Slave Food Output', value: 10, postfix: '%', positive: true},
                { name: 'Can build an oversized military station'},
              ]
            },
          ]
        },
        {
          name: 'Oligarchies',
          components: [
            {
              name: 'Military Junta',
              description: 'This government is a militaristic form of oligarchy, where power rests with a council of high-ranking military officers who oversee all matters of state.',
              rulerTitle: 'Archon',
              image: 'http://www.stellariswiki.com/images/9/9a/Military_Junta.png',
              unlocked: ['Militarist', 'Fanatic Militarist'],
              locked: ['Fanatic Collectivist', 'Fanatic Individualist'],
              effects: [
                { name: 'Ship Cost', value: -10, postfix: '%', positive: true},
                { name: 'Ship Upgrade Cost', value: -25, postfix: '%', positive: true},
                { name: 'Admirals/generals are eligible for rulership'},
              ]
            },
            {
              name: 'Theocratic Oligarchy',
              description: '',
              rulerTitle: 'Inquisitor',
              image: 'http://www.stellariswiki.com/images/5/57/Theocratic_Oligarchy.png',
              unlocked: ['Spiritualist', 'Fanatic Spiritualist'],
              locked: ['Fanatic Collectivist', 'Fanatic Individualist'],
              effects: [
                { name: 'Ethics Divergence', value: -10, postfix: '%', positive: true},
              ]
            },
            {
              name: 'Science Directorate',
              description: 'This government is a materialist form of oligarchy, where a committee of scientists supervises the government apparatus for maximum efficiency.',
              rulerTitle: 'Director',
              image: 'http://www.stellariswiki.com/images/c/cd/Science_Directorate.png',
              unlocked: ['Materialist', 'Fanatic Materialist'],
              locked: ['Fanatic Collectivist', 'Fanatic Individualist'],
              effects: [
                { name: 'Research alternatives', value: 1, positive: true},
                { name: 'Scientists are eligible for rulership'},
              ]
            },
            {
              name: 'Peaceful Bureaucracy',
              description: 'This government is a pacifist form of oligarchy, where a complicated system of bureaucracy governs all aspects of society to ensure the safety of the citizenry.',
              rulerTitle: 'Coordinator',
              image: 'http://www.stellariswiki.com/images/c/cd/Peaceful_Bureaucracy.png',
              unlocked: ['Pacifist', 'Fanatic Pacifist'],
              locked: ['Fanatic Collectivist', 'Fanatic Individualist'],
              effects: [
                { name: 'Leader capacity', value: 4, positive: true},
                { name: 'Leader Recruitment Cost', value: -15, postfix: '%', positive: true},
              ]
            },
            {
              name: 'Plutocratic Oligarchy',
              description: 'This is a plutocratic form of oligarchy, ruled by a wealthy elite. A citizen\'s personal wealth translates directly into political power.',
              rulerTitle: 'Executive',
              image: 'http://www.stellariswiki.com/images/3/3e/Plutocratic_Oligarchy.png',
              unlocked: [],
              locked: ['Fanatic Collectivist', 'Fanatic Individualist'],
              effects: [
                { name: 'Energy credits', value: 5, postfix: '%', positive: true},
                { name: 'Minerals', value: 5, postfix: '%', positive: true},
              ]
            },
          ]
        },
        {
          name: 'Democracies',
          components: [
            {
              name: 'Military Republic',
              description: '',
              rulerTitle: 'Consul',
              image: 'http://www.stellariswiki.com/images/b/b8/Military_Republic.png',
              unlocked: ['Militarist', 'Fanatic Militarist'],
              locked: ['Collectivist', 'Fanatic Collectivist'],
              effects: [
                { name: 'Army Upkeep', value: -15, postfix: '%', positive: true},
                { name: 'Ship Upkeep', value: -15, postfix: '%', positive: true},
                { name: 'War Tolerance', value: 25, postfix: '%', positive: true},
                { name: 'Admirals/generals are eligible for rulership'},
              ]
            },
            {
              name: 'Theocratic Republic',
              description: '',
              rulerTitle: '',
              image: 'http://www.stellariswiki.com/images/9/9f/Theocratic_Republic.png',
              unlocked: ['Spiritualist', 'Fanatic Spiritualist'],
              locked: ['Collectivist', 'Fanatic Collectivist'],
              effects: [
                { name: 'Ethics Divergence', value: -10, postfix: '%', positive: true},
              ]
            },
            {
              name: 'Direct Democracy',
              description: 'This government is a materialistic form of democracy, where citizens use computer networks to vote directly on most matters regarding the state.',
              rulerTitle: 'Chancellor',
              image: 'http://www.stellariswiki.com/images/0/02/Direct_Democracy.png',
              unlocked: ['Materialist', 'Fanatic Materialist'],
              locked: ['Collectivist', 'Fanatic Collectivist'],
              effects: [
                { name: ' Core Sector Planets', value: 4, positive: true},
              ]
            },
            {
              name: 'Moral Democracy',
              description: 'This government is a pacifistic form of democracy, firmly guided by moralist principles and non-violence.',
              rulerTitle: '',
              image: 'http://www.stellariswiki.com/images/6/67/Moral_Democracy.png',
              unlocked: ['Pacifist', 'Fanatic Pacifist'],
              locked: ['Collectivist', 'Fanatic Collectivist'],
              effects: [
                { name: 'Happiness', value: 10, postfix: '%', positive: true},
              ]
            },
            {
              name: 'Indirect Democracy',
              description: 'This government is an indirect democracy, where citizens vote on officials who are elected to represent them.',
              rulerTitle: 'President',
              image: 'http://www.stellariswiki.com/images/a/a1/Indirect_Democracy.png',
              unlocked: [],
              locked: ['Collectivist', 'Fanatic Collectivist'],
              effects: [
                { name: 'Leader Skill Levels', value: 1, positive: true},
                { name: 'Leader Recruitment Costs', value: -10, postfix: '%', positive: true},
              ]
            },
          ]
        },
      ]
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
