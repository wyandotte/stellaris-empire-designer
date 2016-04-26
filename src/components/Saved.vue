<template>
  <h2>Saved Empires</h2>
  <p>
    Here you can load your saved empire configurations.
  </p>

  <ul v-if="saved" class="Saved">
    <li v-for="item in saved" class="Saved__item">
      {{ item.empireName }} ({{ item.speciesName }})
      <span class="Saved__buttons">
        <a @click="loadItem(item)" class="Button">Load</a>
        <a @click="deleteItem(item)" class="Button Button--delete">Delete</a>
      </span>
    </li>
  </ul>
</template>

<script>
  export default {
    props: [
      'speciesName',
      'empireName',
      'chosenEthics',
      'chosenGovernment',
      'chosenTraits'
    ],

    data() {
      return {
        saved: []
      }
    },

    ready() {
      for (let i = 0; i < localStorage.length; i++ ) {
        this.saved.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
      }
    },

    methods: {
      loadItem(item) {
        this.speciesName = item.speciesName;
        this.empireName = item.empireName;
        this.chosenEthics = item.chosenEthics;
        this.chosenGovernment = item.chosenGovernment;
        this.chosenTraits = item.chosenTraits;
      },

      deleteItem(item) {
        localStorage.removeItem(item.key);

        let deleteKey;

        _.each(this.saved, function(value, key) {
          if (value.key === item.key) {
            deleteKey = key;
          }
        });

        this.saved.splice(deleteKey, 1);
      }
    }
  }
</script>

<style scoped>
  h2, p { text-align: center; }

  .Saved {
    padding-left: 0;
    list-style: none;
  }

  .Saved__item {
    line-height: 40px;
    padding-bottom: 5px;
    margin-bottom: 10px;
  }

  .Saved__item:not(:last-child) { border-bottom: 1px solid #eee; }

  .Saved__buttons { float: right; }

  .Button {
    font-size: 1rem;
    padding: 8px;
    line-height: 20px;
  }
</style>
