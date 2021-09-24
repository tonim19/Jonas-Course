<template>
  <main v-if="weather.main">
    <h3>{{ weather.name }}, {{ weather.sys.country }}</h3>
    <p>{{ getDate }}</p>
    <h1>{{ Math.floor(weather.main.temp) }}°C</h1>
    <h2>{{ weather.weather[0].main }}</h2>
  </main>
</template>

<script>
export default {
  name: "Display",
  props: {
    weather: Object,
  },
  computed: {
    getDate: function() {
      const date = new Date();
      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const dateMonth = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const dayInWeek = days[date.getDay()];
      const day = date.getDate();
      const month = dateMonth[date.getMonth()];
      const year = date.getFullYear();
      return `${dayInWeek} ${day} ${month} ${year}`;
    },
  },
};
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  width: 100%;
  color: #fff;
}

h1 {
  font-size: 5rem;
  padding: 1.3rem;
  width: 220px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  margin: 1.3rem 0;
}

h2 {
  font-size: 2.5rem;
}

h3 {
  font-size: 1.9rem;
  margin: 2rem 0 0.2rem 0;
}

p {
  font-size: 1.2rem;
}
</style>
