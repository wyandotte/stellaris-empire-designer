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

import _ from 'lodash';

export default {
  props: ['chosenTraits'],

  components: { Chosen },

  data () {
    return {
      points: 2,

      choices: 4 - this.chosenTraits.length,

      traits: [
        {
          name: 'Positive',
          components: [
            {
              name: 'Adaptive',
              description: 'This species is highly adaptive when it comes to foreign environments.',
              image: 'http://www.stellariswiki.com/images/1/10/Adaptive.png',
              excludes: ['Extremely Adaptive', 'Nonadaptive'],
              cost: 2,
              effects: [
                { name: 'Habitability', value: 10, postfix: '%', positive: true},
              ]
            },
            {
              name: 'Agrarian',
              description: 'This species has a deep connection to the land and make expert farmers and gardeners.',
              image: 'http://www.stellariswiki.com/images/c/ca/Agrarian.png',
              excludes: [],
              cost: 2,
              effects: [
                { name: 'Food output', value: 1, positive: true},
              ]
            },
            {
              name: 'Charismatic',
              description: 'Members of this species have a special charisma and are generally considered pleasant to be around.',
              image: 'http://www.stellariswiki.com/images/d/d8/Charismatic.png',
              excludes: ['Repugnant'],
              cost: 1,
              effects: [
                { name: 'Other Species Happiness', value: 1, postfix: '%', positive: true},
              ]
            },
            {
              name: 'Communal',
              description: 'Members of this species are highly communal and quite used to living in close proximity to others.',
              image: 'http://www.stellariswiki.com/images/b/b5/Communal.png',
              excludes: ['Solitary'],
              cost: 1,
              effects: [
                { name: 'Happiness', value: 5, postfix: '%', positive: true},
              ]
            },
            {
              name: 'Conformists',
              description: 'These people always seek consensus and are more likely to conform to the governing ethics.',
              image: 'http://www.stellariswiki.com/images/d/db/Conformists.png',
              excludes: [],
              cost: 2,
              effects: [
                { name: ' Ethics Divergence', value: -20, postfix: '%', positive: true},
              ]
            },
            {
              name: 'Enduring',
              description: 'Lifespans in this species are unusually long.',
              image: 'http://www.stellariswiki.com/images/9/91/Enduring.png',
              excludes: ['Venerable'],
              cost: 1,
              effects: [
                { name: 'Leader Lifespan', value: 30, positive: true},
              ]
             },
            {
              name: 'Extremely Adaptive',
              description: 'This species is remarkably adept at adopting to any foreign environments.',
              image: 'http://www.stellariswiki.com/images/2/26/Extremely_Adaptive.png',
              excludes: ['Adaptive', 'Nonadaptive'],
              cost: 5,
              effects: [
                { name: 'Habitability', value: 20, postfix: '%', positive: true},
              ]
            },
            {
              name: 'Industrious',
              description: 'Members of this species are known for their diligence and hard-working nature, always going above and beyond.',
              image: 'http://www.stellariswiki.com/images/2/27/Industrious.png',
              excludes: [],
              cost: 2,
              effects: [
                { name: 'Minerals', value: 15, postfix: '%', positive: true},
              ]
            },
            {
              name: 'Intelligent',
              description: 'This species is highly intelligent and enjoys faster technological progress.',
              image: 'http://www.stellariswiki.com/images/6/6d/Intelligent.png',
              excludes: [],
              cost: 2,
              effects: [
                { name: 'Engineering Output', value: 10, postfix: '%', positive: true},
                { name: 'Physics Output', value: 10, postfix: '%', positive: true},
                { name: 'Society Output', value: 10, postfix: '%', positive: true},
              ]
            },
            {
              name: 'Natural Engineers',
              description: 'Members of this species have a natural inclination towards engineering and the material sciences.',
              image: 'http://www.stellariswiki.com/images/9/9a/Natural_Engineers.png',
              excludes: ['Natural Physicists', 'Natural Sociologists'],
              cost: 1,
              effects: [
                { name: 'Engineering Output', value: 15, postfix: '%', positive: true},
              ]
            },
            {
              name: 'Natural Physicists',
              description: 'Members of this species have a natural inclination towards theoretical physics and astral phenomena.',
              image: 'http://www.stellariswiki.com/images/1/14/Natural_Physicists.png',
              excludes: ['Natural Engineers', 'Natural Sociologists'],
              cost: 1,
              effects: [
                { name: 'Physics Output', value: 15, postfix: '%', positive: true},
              ]
            },
            {
              name: 'Natural Sociologists',
              description: 'Members of this species have a natural inclination towards sociology and biological studies.',
              image: 'http://www.stellariswiki.com/images/6/61/Natural_Sociologists.png',
              excludes: ['Natural Engineers', 'Natural Physicists'],
              cost: 1,
              effects: [
                { name: 'Society Output', value: 15, postfix: '%', positive: true},
              ]
            },
            {
              name: 'Nomadic',
              description: 'This species has a nomadic past, and its members often think nothing when relocation to another world.',
              image: 'http://www.stellariswiki.com/images/b/b8/Nomadic.png',
              excludes: ['Sedentary'],
              cost: 1,
              effects: [
                { name: 'Migration Time', value: -50, postfix: '%', positive: true},
              ]
            },
            {
              name: 'Quick Learners',
              description: 'Members of this species are quick to learn from experiences.',
              image: 'http://www.stellariswiki.com/images/2/25/Quick_Learners.png',
              excludes: ['Slow Learners'],
              cost: 1,
              effects: [
                { name: 'Leader Experience Gain', value: 25, postfix: '%', positive: true},
              ]
            },
            {
              name: 'Rapid Breeders',
              description: 'This species reproduces at a very rapid rate, increasing population growth.',
              image: 'http://www.stellariswiki.com/images/e/ed/Rapid_Breeders.png',
              excludes: ['Slow Breeders'],
              cost: 1,
              effects: [
                { name: 'Growth Time', value: -10, postfix: '%', positive: true},
              ]
            },
            {
              name: 'Resilient',
              description: 'Members of this species are physiologically resilient and will fight like enraged brood mothers to defend their worlds.',
              image: 'http://www.stellariswiki.com/images/d/d7/Resilient.png',
              excludes: [],
              cost: 1,
              effects: [
                { name: 'Militia Health', value: 100, postfix: '%', positive: true},
                { name: 'Bombardment Resistance', value: 200, postfix: '%', positive: true},
              ]
            },
            {
              name: 'Strong',
              description: 'Members of this species possess great physical strength, making them formidable fighters on the ground.',
              image: 'http://www.stellariswiki.com/images/e/eb/Strong.png',
              excludes: ['Very Strong', 'Weak'],
              cost: 1,
              effects: [
                { name: 'Army Damage', value: 20, postfix: '%', positive: true},
                { name: 'Minerals', value: 5, postfix: '%', positive: true},
              ]
            },
            {
              name: 'Talented',
              description: 'Members of this species are born with a natural aptitude.',
              image: 'http://www.stellariswiki.com/images/3/3c/Talented.png',
              excludes: [],
              cost: 2,
              effects: [
                { name: 'Leader Skill Levels', value: 1, positive: true},
              ]
            },
            {
              name: 'Thrifty',
              description: 'Members of this species are instinctively economical and are always looking to make a good profit, whatever corners need cutting.',
              image: 'http://www.stellariswiki.com/images/9/9f/Thrifty.png',
              excludes: [],
              cost: 2,
              effects: [
                { name: 'Energy Credits', value: 15, postfix: '%', positive: true},
              ]
            },
            {
              name: 'Venerable',
              description: 'This species can grow to an age that commands dignity and respect.',
              image: 'http://www.stellariswiki.com/images/8/85/Venerable.png',
              excludes: ['Enduring'],
              cost: 4,
              effects: [
                { name: 'Leader Lifespan', value: 120, positive: true},
              ]
            },
            {
              name: 'Very Strong',
              description: 'Members of this species possess a strength that almost defies the laws of physics.',
              image: 'http://www.stellariswiki.com/images/8/8f/Very_Strong.png',
              excludes: ['Strong', 'Weak'],
              cost: 4,
              effects: [
                { name: 'Army Damage', value: 40, postfix: '%', positive: true},
                { name: 'Minerals', value: 10, postfix: '%', positive: true},
              ]
            },
          ]
        },
        {
          name: 'Negative',
          components: [
            {
              name: 'Decadent',
              description: 'This species requires slaves or servants to feel content.',
              image: 'http://www.stellariswiki.com/images/a/a1/Decadent.png',
              excludes: [],
              cost: -1,
              effects: [
                { name: 'Resource Output without Slaves', value: -10, postfix: '%', positive: false},
              ]
            },
            {
              name: 'Nonadaptive',
              description: 'This species does not adapt well to foreign environments. ',
              image: 'http://www.stellariswiki.com/images/5/5f/Nonadaptive.png',
              excludes: ['Adaptive', 'Extremely Adaptive'],
              cost: -1,
              effects: [
                { name: 'Habitability', value: -10, postfix: '%', positive: false},
              ]
            },
            {
              name: 'Repugnant',
              description: 'The physical appearance and customs of this species are considered offensive to most others and few appreciate them as neighbors.',
              image: 'http://www.stellariswiki.com/images/5/5e/Repugnant.png',
              excludes: ['Charismatic'],
              cost: -1,
              effects: [
                { name: 'Other Species Happiness', value: -1, postfix: '%', positive: false},
              ]
            },
            {
              name: 'Sedentary',
              description: 'This species has a sedentary past, and its members are reluctant to migrate away from where they grew up.',
              image: 'http://www.stellariswiki.com/images/7/7c/Sedentary.png',
              excludes: ['Nomadic'],
              cost: -1,
              effects: [
                { name: 'Migration Time', value: 50, postfix: '%', positive: false},
              ]
            },
            {
              name: 'Slow Breeders',
              description: 'This species reproduces at a slow rate, lowering population growth.',
              image: 'http://www.stellariswiki.com/images/7/79/Slow_Breeders.png',
              excludes: ['Rapid Breeders'],
              cost: -1,
              effects: [
                { name: 'Growth Time', value: 15, postfix: '%', positive: false},
              ]
            },
            {
              name: 'Slow Learners',
              description: 'Members of this species are slow to learn from their experiences.',
              image: 'http://www.stellariswiki.com/images/6/69/Slow_Learners.png',
              excludes: ['Quick Learners'],
              cost: -1,
              effects: [
                { name: 'Leader Experience Gain', value: -25, postfix: '%', positive: false},
              ]
            },
            {
              name: 'Solitary',
              description: 'Members of this species tend to be solitary and territorial, often becoming agitated in crowded conditions.',
              image: 'http://www.stellariswiki.com/images/5/54/Solitary.png',
              excludes: ['Communal'],
              cost: -1,
              effects: [
                { name: 'Happiness', value: -5, postfix: '%', positive: false},
              ]
            },
            {
              name: 'Weak',
              description: 'Members of this species are physically weaker than average, making them poor fighters on the ground.',
              image: 'http://www.stellariswiki.com/images/e/e9/Weak.png',
              excludes: ['Strong', 'Very Strong'],
              cost: -1,
              effects: [
                { name: 'Army Damage', value: -20, postfix: '%', positive: false},
              ]
            },
          ]
        },
      ],
    }
  },

  ready() {
    for (let trait of this.chosenTraits) {
      this.points -= trait.cost;
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
          this.points += trait.cost;

          this.choices += 1;

          this.deleteFromChosenTraits(trait);
        } else {
          if (((this.points - trait.cost) >= 0) && (this.choices - 1) >= 0) {
            this.chosenTraits.push(trait);

            this.points -= trait.cost;

            this.choices -= 1;
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
