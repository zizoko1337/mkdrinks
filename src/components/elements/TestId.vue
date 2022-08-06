<template>
  <div>
    <p>test id's</p>
    <p>{{ arr }}</p>
    <p>{{arr.length}}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      id: 11007,
      arr: [],
    };
  },
  methods: {
    testIds(i) {
      axios
        .get(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${i}`
        )
        .then((response) => {
           
          if (response.data.drinks == null) {
            this.id++;
          } else {
             console.log(response.data.drinks[0].strDrink);
            this.arr.push(i);
          }
          this.id++;
        })

    },
  },
  mounted() {
    for (var i = 11007; i < 19707; i++) {
      this.testIds(i);
    }
  },
};
</script>

<style>

</style>
