<template>
  <form @submit.prevent="passItems()" action="#">
    <h2>Add new transaction</h2>
    <hr />
    <label for="item">Item</label>
    <input type="text" v-model="item" id="item" required />
    <label for="amount">Amount</label>
    <input type="text" id="amount" v-model="amount" required />
    <button type="submit">Add Transaction</button>
  </form>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      item: "",
      amount: "",
    };
  },
  methods: {
    passItems: function() {
      this.$emit("passItems", this.item, Number.parseFloat(this.amount));
      this.item = "";
      this.amount = "";
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin: 0.5rem 0 1rem 0;
}
h2 {
  width: 100%;
  text-align: left;
  font-size: 1.3rem;
  margin: 0.4rem 0;
  font-weight: 500;
}
hr {
  width: 100%;
  margin: 0.2rem 0 1rem 0;
}
label {
  font-weight: 500;
  text-align: left;
  width: 100%;
  margin: 0.5rem 0;
}

input {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
}
button {
  border: 1px solid #b154f7;
  background-color: #b154f7;
  outline: #7134a0bb solid 1px;
  width: 100%;
  padding: 0.7rem 0.8rem;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
}
</style>
