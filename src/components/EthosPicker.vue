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

export default {
  props: ['chosenEthics'],

  components: { Chosen },

  data () {
    return {
      ethics: [
        {
          name: 'Collectivist - Individualist',
          components: [
            {
              type: 'CollectivistIndividualist',
              name: 'Fanatic Collectivist',
              description: 'The purpose of the individual is simple: strengthen the collective. To enter the blackness of space we move as one, and we shall not be weakened by wanton separatism.',
              image: 'http://www.stellariswiki.com/images/e/e4/Fanatic_Collectivist.png',
              points: 2,
              effects: [
                { name: 'Slavery tolerance', value: 100, postfix: '%', positive: true},
                { name: 'Food requirement', value: -10, postfix: '%', positive: true},
              ]
            },
            {
              type: 'CollectivistIndividualist',
              name: 'Collectivist',
              description: 'Society has long since evolved past the insignificant rivalries and concerns of the individuals. We are numerous but one, and the needs of the many outweigh the needs of the few. We stand truly equal.',
              image: 'http://www.stellariswiki.com/images/5/5c/Collectivist.png',
              points: 1,
              effects: [
                { name: 'Slavery tolerance', value: 50, postfix: '%', positive: true},
                { name: 'Food requirement', value: -5, postfix: '%', positive: true},
              ]
            },
            {
              type: 'CollectivistIndividualist',
              name: 'Individualist',
              description: 'Community is a means to an end, not the end itself. Only by empowering the individual to reach their maximum potential do we achieve true freedom. Freedom of thought, of speech, of movement, of trade.',
              image: 'http://www.stellariswiki.com/images/0/0c/Individualist.png',
              points: 1,
              effects: [
                { name: 'Energy credits', value: 10, postfix: '%', positive: true},
                { name: 'Slavery tolerance', value: -50, postfix: '%', positive: false},
                { name: 'Ethics divergence', value: 5, postfix: '%', positive: false},
              ]
            },
            {
              type: 'CollectivistIndividualist',
              name: 'Fanatic Individualist',
              description: 'Through history, too often has the hulking mass of the collective stifled the radiant genius of individuals. No more. Forge your own path, and let new fruits be illuminated by the sparks of clashing ambitions.',
              image: 'http://www.stellariswiki.com/images/0/0c/Fanatic_Individualist.png',
              points: 2,
              effects: [
                { name: 'Energy credits', value: 20, postfix: '%', positive: true},
                { name: 'Slavery tolerance', value: -100, postfix: '%', positive: false},
                { name: 'Ethics divergence', value: 10, postfix: '%', positive: false},
              ]
            }
          ]
        },
        {
          name: 'Xenophobe - Xenophile',
          components: [
            {
              type: 'XenophobeXenophile',
              name: 'Fanatic Xenophobe',
              description: 'Any alien influence must be ruthlessly quashed. Only by staying pure, and true to ourselves and the planet that gave us life can we guard against insidious Xeno plots. Even mastery over the Alien might not be enough to guarantee our safety...',
              image: 'http://www.stellariswiki.com/images/8/81/Fanatic_Xenophobe.png',
              points: 2,
              effects: [
                { name: 'Alien slavery tolerance', value: 100, postfix: '%', positive: true},
                { name: 'Xenophobia', value: 20, postfix: '%', positive: false},
              ]
            },
            {
              type: 'XenophobeXenophile',
              name: 'Xenophobe',
              description: 'A homogeneous society is a predictable society. A predictable society is a safe society. There is little to be gained by giving excessive attention or care for those who do not belong.',
              image: 'http://www.stellariswiki.com/images/e/ed/Xenophobe.png',
              points: 1,
              effects: [
                { name: 'Alien slavery tolerance', value: 50, postfix: '%', positive: true},
                { name: 'Xenophobia', value: 10, postfix: '%', positive: false},
              ]
            },
            {
              type: 'XenophobeXenophile',
              name: 'Xenophile',
              description: 'There exist, in all of us, a deep-seated fascination of the unknown. An adventurous spirit that rejects the familiar and glories in the unfamiliar, whatever - or whoever - it may be.',
              image: 'http://www.stellariswiki.com/images/b/b0/Xenophile.png',
              points: 1,
              effects: [
                { name: 'Xenophobia', value: -10, postfix: '%', positive: true},
              ]
            },
            {
              type: 'XenophobeXenophile',
              name: 'Fanatic Xenophile',
              description: 'If there was such a thing as an absolute moral imperative, it would be to explore the cosmos and embrace all within it. We were never meant to journey alone.',
              image: 'http://www.stellariswiki.com/images/6/68/Fanatic_Xenophile.png',
              points: 2,
              effects: [
                { name: 'Xenophobia', value: -20, postfix: '%', positive: true},
              ]
            }
          ]
        },
        {
          name: 'Militarist - Pacifist',
          components: [
            {
              type: 'MilitaristPacifist',
              name: 'Fanatic Militarist',
              description: 'The ability to project force is at paramount importance. The only way to preserve our way of life is to make everyone share it, willingly or not.',
              image: 'http://www.stellariswiki.com/images/5/55/Fanatic_Militarist.png',
              points: 2,
              effects: [
                { name: 'Rivalry influence gain', value: 50, postfix: '%', positive: true},
                { name: 'Alliance cost', value: 75, postfix: '%', positive: false},
                { name: 'Army damage', value: 20, postfix: '%', positive: true},
                { name: 'War tolerance', value: 75, postfix: '%', positive: true},
                { name: 'War happiness', value: 10, postfix: '%', positive: true},
              ]
            },
            {
              type: 'MilitaristPacifist',
              name: 'Militarist',
              description: 'The only true values are courage and discipline, and channeled properly they can overcome any obstacle. Therein lies true strength; force withheld, a promise made.',
              image: 'http://www.stellariswiki.com/images/4/44/Militarist.png',
              points: 1,
              effects: [
                { name: 'Rivalry influence gain', value: 25, postfix: '%', positive: true},
                { name: 'Alliance cost', value: 50, postfix: '%', positive: false},
                { name: 'Army damage', value: 10, postfix: '%', positive: true},
                { name: 'War tolerance', value: 50, postfix: '%', positive: true},
                { name: 'War happiness', value: 5, postfix: '%', positive: true},
              ]
            },
            {
              type: 'MilitaristPacifist',
              name: 'Pacifist',
              description: 'Conflict as a mean to an end is a ridiculous concept. It is by nature destructive, destroying what was to be obtained or giving room to grow that which was to be destroyed.',
              image: 'http://www.stellariswiki.com/images/4/4a/Pacifist.png',
              points: 1,
              effects: [
                { name: 'Maximum embassies', value: 1, positive: true},
                { name: 'Rivalry influence gain', value: -25, postfix: '%', positive: false},
                { name: 'Army damage', value: -10, postfix: '%', positive: false},
                { name: 'Food', value: 10, postfix: '%', positive: true},
                { name: 'War tolerance', value: -25, postfix: '%', positive: false},
                { name: 'War happiness', value: -10, postfix: '%', positive: false},
              ]
            },
            {
              type: 'MilitaristPacifist',
              name: 'Fanatic Pacifist',
              description: '',
              image: 'http://www.stellariswiki.com/images/a/ab/Fanatic_Pacifist.png',
              points: 2,
              effects: [
                { name: 'Maximum embassies', value: '2', positive: true},
                { name: 'Rivalry influence gain', value: -50, postfix: '%', positive: false},
                { name: 'Army damage', value: -20, postfix: '%', positive: false},
                { name: 'Food', value: 20, postfix: '%', positive: true},
                { name: 'War tolerance', value: -50, postfix: '%', positive: false},
                { name: 'War happiness', value: -20, postfix: '%', positive: false},
              ]
            }
          ]
        },
        {
          name: 'Materialist - Spiritualist',
          components: [
            {
              type: 'MaterialistSpiritualist',
              name: 'Fanatic Materialist',
              description: 'Although it hurts, we must grow up and put aside our outdated notions of morality. There is no \'divine spark\' granting special value to a living mind. No object has any intrinsic value apart from what we choose to grant it. Let us embrace the freedom of certitude, and achieve maximum efficiency in all things.',
              image: 'http://www.stellariswiki.com/images/3/3e/Fanatic_Materialist.png',
              points: 2,
              effects: [
                { name: 'Physics output', value: '10', postfix: '%', positive: true},
                { name: 'Society output', value: '10', postfix: '%', positive: true},
                { name: 'Engineering output', value: '10', postfix: '%', positive: true},
              ]
            },
            {
              type: 'MaterialistSpiritualist',
              name: 'Materialist',
              description: 'As we reach for the stars, we must put away childish things: gods, spirits and other phantasms of the brain. Reality is cruel and unforgiving, yet we must protect ourselves and secure the survival of our race through the unflinching pursuit of science and technology.',
              image: 'http://www.stellariswiki.com/images/e/ef/Materialist.png',
              points: 1,
              effects: [
                { name: 'Physics output', value: '5', postfix: '%', positive: true},
                { name: 'Society output', value: '5', postfix: '%', positive: true},
                { name: 'Engineering output', value: '5', postfix: '%', positive: true},
              ]
            },
            {
              type: 'MaterialistSpiritualist',
              name: 'Spiritualist',
              description: 'It behooves us to remember how tiny we are, how pointless our lives are in this vast uncaring universe... what nonsense! The only truth we can ever know is that of our own existence. The universe - in all its apparent glory - is but a dream we all happen to share.',
              image: 'http://www.stellariswiki.com/images/b/be/Spiritualist.png',
              points: 1,
              effects: [
                { name: 'Happiness', value: '5', postfix: '%', positive: true},
              ]
            },
            {
              type: 'MaterialistSpiritualist',
              name: 'Fanatic Spiritualist',
              description: 'Our science has proved that consciousness begets reality. We regard with patience the childlike efforts of those who delude themselves as they play with their blocks of \'hard matter\'.',
              image: 'http://www.stellariswiki.com/images/1/11/Fanatic_Spiritualist.png',
              points: 2,
              effects: [
                { name: 'Happiness', value: '5', postfix: '%', positive: true},
              ]
            }
          ]
        }
      ],
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
