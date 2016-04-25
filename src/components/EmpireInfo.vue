<template>
  <div class="EmpireInfo">
    <div class="EmpireInfo__item">
      <input type="text" name="speciesName" value="" placeholder="Species name">
    </div>
    <div class="EmpireInfo__item">
      <input type="text" name="empireName" value="" placeholder="Empire name">
    </div>
  </div>
</template>

<script>
export default {
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
</style>
