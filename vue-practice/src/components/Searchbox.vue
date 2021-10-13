<template>
  <header id="header">
    <form>
      <input
        type="text"
        v-model="location"
        @keyup.enter="getWeather"
        placeholder="Search..."
        required
      />
    </form>
  </header>
</template>

<script>
export default {
  name: "Searchbox",
  data() {
    return {
      location: "",
    };
  },
  methods: {
    getWeather(e) {
      e.preventDefault();
      this.$emit("getWeather", this.location);
      this.location = "";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  width: 100%;
  margin-top: 0.8rem;
}
form {
  display: flex;
  justify-content: center;
}

input {
  padding: 1rem;
  max-width: 360px;
  border-radius: 15px 0 15px 0;
  font-size: 1.2rem;
}
</style>
