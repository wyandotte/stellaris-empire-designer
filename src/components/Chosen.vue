<template>
  <div class="Chosen">
    <div v-if="data.name">
      {{ data.name }}

      <ul>
        <li v-for="effect in data.effects">
          {{ effect.name }}<span v-if="effect.value">:</span> <span :class="[{'green': effect.positive, 'red': !effect.positive}]"><span v-if="effect.value > 0">+</span>{{ effect.value }}{{ effect.postfix}}</span>
        </li>
      </ul>
    </div>

    <div v-for="item in data">
      {{ item.name }}

      <ul>
        <li v-for="effect in item.effects">
          {{ effect.name }}<span v-if="effect.value">:</span> <span :class="[{'green': effect.positive, 'red': !effect.positive}]"><span v-if="effect.value > 0">+</span>{{ effect.value }}{{ effect.postfix}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['data']
  }
</script>

<style>
  .Chosen {
    position: absolute;
    top: 0;
    right: -250px;
    width: 300px;
  }
</style>
