<template>
  <div class="overlay">
    <div class="container">
      <Searchbox @getWeather="getWeather" />
      <Display :weather="weather" />
    </div>
  </div>
</template>

<script>
import Searchbox from "./components/Searchbox.vue";
import Display from "./components/Display.vue";

export default {
  name: "App",
  components: {
    Searchbox,
    Display,
  },
  data() {
    return {
      weather: {},
      apiKey: "0da2286fe6432927ecad0c7ded979ac0",
    };
  },

  methods: {
    async getWeather(location) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${this.apiKey}&units=metric`
      )
        .then((res) => res.json())
        .then((data) => this.injectData(data));
    },
    injectData(data) {
      this.weather = data;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: url("./assets/mountains-6540497_1280.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  font-family: "Montserrat", sans-serif;
  min-height: 100vh;
  position: relative;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  z-index: 1;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 70vw;
  margin: 0 auto;
  z-index: 10;
}
</style>
