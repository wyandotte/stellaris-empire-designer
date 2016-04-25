<template>
  <div class="EmpireInfo">
    <div class="EmpireInfo__item">
      <input type="text" name="empireName" v-model="empireName" placeholder="Empire name" class="EmpireInfo__item__input">
    </div>
    <div class="EmpireInfo__item">
      <input type="text" name="speciesName" v-model="speciesName" placeholder="Species name" class="EmpireInfo__item__input">
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'speciesName',
    'empireName'
  ],

  data () {
    return {
      //
    }
  }
}
</script>

<style>
  .EmpireInfo { text-align: center; }

  .EmpireInfo__item {
    margin-bottom: 10px;
  }

  .EmpireInfo__item__input {
    border: 1px solid #ddd;
    padding: 15px;
    border-radius: 3px;
    width: 400px;
  }
</style>
