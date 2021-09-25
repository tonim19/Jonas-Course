<template>
  <form @submit.prevent="passItems()" action="#">
    <h2>Add new transaction</h2>
    <hr />
    <label for="item">Item</label>
    <input type="text" v-model="item" id="item" />
    <label for="amount">Amount</label>
    <input type="text" id="amount" v-model="amount" required />
    <div id="selection">
      <input
        @click="toggleIncome"
        :style="btnIncome === true ? 'background-color: rgb(46, 255, 46)' : ''"
        class="btnIncome"
        type="button"
        value="INCOME"
      />
      <input
        @click="toggleExpense"
        :style="btnExpense === true ? 'background-color: rgb(255, 55, 55)' : ''"
        class="btnExpense"
        type="button"
        value="EXPENSE"
      />
    </div>
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
      btnIncome: false,
      btnExpense: false,
    };
  },
  methods: {
    passItems: function() {
      if (this.btnExpense && Math.sign(this.amount) === 1) {
        this.amount = -this.amount;
      } else if (this.btnIncome && Math.sign(this.amount) === -1) {
        this.amount = Math.abs(this.amount);
      }
      this.$emit("passItems", this.item, Number.parseFloat(this.amount));
      this.item = "";
      this.amount = "";
    },
    toggleIncome() {
      if (!this.btnExpense) {
        this.btnIncome = !this.btnIncome;
      } else {
        this.btnIncome = !this.btnIncome;
        this.btnExpense = !this.btnExpense;
      }
    },
    toggleExpense() {
      if (!this.btnIncome) {
        this.btnExpense = !this.btnExpense;
      } else {
        this.btnIncome = !this.btnIncome;
        this.btnExpense = !this.btnExpense;
      }
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
#selection {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
}
.btnIncome {
  padding: 0.8rem 0;
  margin-right: 0.2rem;
  background-color: rgb(46, 221, 46);
  color: #fff;
  cursor: pointer;
}
.btnExpense {
  padding: 0.8rem 0;
  background-color: rgb(201, 55, 55);
  color: #fff;
  cursor: pointer;
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
