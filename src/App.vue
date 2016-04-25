<template>
  <div id="app">
    <h1>Stellaris Empire Designer</h1>

    <preview :preview="preview"></preview>

    <empire-info></empire-info>
    <ethos-picker :chosen-ethics.sync="chosenEthics"></ethos-picker>
    <government-picker :chosen-ethics="chosenEthics"></government-picker>
    <trait-picker></trait-picker>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Preview from './components/Preview'
import EmpireInfo from './components/EmpireInfo'
import EthosPicker from './components/EthosPicker'
import GovernmentPicker from './components/GovernmentPicker'
import TraitPicker from './components/TraitPicker'
import AppFooter from './components/AppFooter'

export default {
  components: {
    Preview,
    EmpireInfo,
    EthosPicker,
    GovernmentPicker,
    TraitPicker,
    AppFooter
  },

  data() {
    return {
      preview: {},
      chosenEthics: []
    }
  },

  events: {
    preview(item) {
      this.preview = item;
    }
  }
}
</script>

<style>
* { box-sizing: border-box; }

html { height: 100%; }

body {
  margin: 0;
  display: flex;
  align-items: top;
  justify-content: center;
  height: 100%;
}

#app {
  width: 1000px;
  padding: 10px;
  font-family: 'Source Sans Pro', Helvetica, sans-serif;
  color: #2c3e50;
}

#app h1 { text-align: center; }

.clearfix:after {
  content: "";
  display: table;
  clear: both;
}

.green { color: green; }
.red { color: red; }
</style>
