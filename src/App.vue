<template>
  <div id="app">
    <h1>Stellaris Empire Designer</h1>

    <preview :preview="preview"></preview>

    <ul class="Navigation">
      <li class="Navigation__item">
        <a v-link="{ name: 'editor', exact: true }" class="Navigation__item__link" @click="preview = {}">Editor</a>
      </li>
      <li class="Navigation__item">
        <a v-link="{ name: 'review' }" class="Navigation__item__link" @click="preview = {}">View Empire</a>
      </li>
      <li class="Navigation__item">
        <a v-link="{ name: 'saved' }" class="Navigation__item__link" @click="preview = {}">Saved</a>
      </li>
    </ul>

    <router-view
      :species-name.sync="speciesName"
      :empire-name.sync="empireName"
      :empire-description.sync="empireDescription"
      :planet-name.sync="planetName"
      :chosen-planet.sync="chosenPlanet"
      :chosen-ethics.sync="chosenEthics"
      :chosen-government.sync="chosenGovernment"
      :chosen-traits.sync="chosenTraits"
    ></router-view>
  </div>
</template>

<script>
import Preview from './components/Preview'

export default {
  components: {
    Preview,
  },

  data() {
    return {
      preview: {},
      speciesName: '',
      empireName: '',
      empireDescription: '',
      planetName: '',
      chosenPlanet: {},
      chosenEthics: [],
      chosenGovernment: [],
      chosenTraits: [],
    }
  },

  events: {
    preview(item) {
      this.preview = item;
    },

    reset() {
      this.speciesName = '';
      this.empireName = '';
      this.empireDescription = '';
      this.planetName = '';
      this.chosenPlanet = {};
      this.chosenEthics = [];
      this.chosenGovernment = [];
      this.chosenTraits = [];

      this.preview = {};
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

.Navigation {
  width: 100%;
  padding-left: 0;
  list-style: none;
  height: 60px;
  display: flex;
  justify-content: center;
}

.Navigation__item { line-height: 60px; }

.Navigation__item__link {
  padding: 15px;
  text-decoration: none;
  color: #0065AD;
}

.Navigation__item__link--current {
  border: 2px solid #0065AD;
  border-radius: 3px;
}

.Navigation__item:not(:first-child) { margin-left: 20px; }

.Button {
  padding: 15px;
  border-radius: 3px;
  font-size: 1.2rem;
  background-color: #61BD6D;
  text-decoration: none;
  color: #fff;
  text-align: center;
  cursor: pointer;
}

.Button:hover { background-color: #39BA48; }

.Button--block {
  margin-top: 20px;
  display: block;
  margin: 0 auto;
}

.Button--delete { background-color: #D10000; }
.Button--delete:hover { background-color: #AA0000; }
</style>
