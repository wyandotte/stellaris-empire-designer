<template>
  <div class="EmpireInfo">
    <div class="EmpireInfo__item">
      <input type="text" name="empireName" v-model="empireName" placeholder="Empire name" class="EmpireInfo__item__input">
    </div>
    <div class="EmpireInfo__item">
      <input type="text" name="speciesName" v-model="speciesName" placeholder="Species name" class="EmpireInfo__item__input">
    </div>
    <div class="EmpireInfo__item">
      <textarea type="text" name="empireDescription" v-model="empireDescription" placeholder="Empire description" class="EmpireInfo__item__input" rows="20" maxlength="2000"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'speciesName',
    'empireName',
    'empireDescription',
  ],

  data () {
    return {
      //
    }
  }
}
</script>

<style scoped>
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

  .EmpireInfo__item textarea::placeholder, .EmpireInfo__item textarea {
    font-family: sans-serif;
    font-size: 0.8rem;
  }
</style>
