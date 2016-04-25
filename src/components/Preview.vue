<template>
  <div class="Preview">
    <div class="Preview__content">
      <strong>{{ preview.name }}</strong>
      <p>
        <em>{{ preview.rulerTitle }}</em>
      </p>
      <p v-if="preview.cost">
        Cost: {{ preview.cost | pluralize ' point' }}
      </p>
      <p>
        {{ preview.description }}
      </p>
      <p v-if="preview.effects">
        Effects:
        <ul>
          <li v-for="effect in preview.effects">
            {{ effect.name }}<span v-if="effect.value">:</span> <span :class="[{'green': effect.positive, 'red': !effect.positive}]"><span v-if="effect.value > 0">+</span>{{ effect.value }}{{ effect.postfix}}</span>
          </li>
        </ul>
      </p>
      <p v-if="preview.unlocked && preview.unlocked.length > 0">
        Unlocked if:
        <ul>
          <li v-for="unlock in preview.unlocked">
            {{ unlock }}
          </li>
        </ul>
      </p>
      <p v-if="preview.locked">
        Locked if:
        <ul>
          <li v-for="lock in preview.locked">
            {{ lock }}
          </li>
        </ul>
      </p>
      <p v-if="preview.excludes && preview.excludes.length > 0">
        Excludes:
        <ul>
          <li v-for="exclude in preview.excludes">
            {{ exclude }}
          </li>
        </ul>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['preview'],

    data() {
      return {

      }
    },

    filters: {
      pluralize(points, label) {
        if (points === 1 || points === -1) {
          return points + label;
        }

        return points + label + 's';
      }
    }
  }
</script>

<style>
  .Preview {
    position: absolute;
    top: 15%;
    left: 10%;
  }

  .Preview__content {
    position: fixed;
    width: 300px;
  }
</style>
