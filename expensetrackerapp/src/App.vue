<template>
  <div class="container">
    <h1>Expense Tracker</h1>
    <Balance
      :balance="totalSum"
      :income="totalIncome"
      :expense="totalExpense"
    />
    <Transactions @removeItem="removeItem" :lastItems="lastItems" />
    <Form @passItems="addItems" />
  </div>
</template>

<script>
import Balance from "./components/Balance.vue";
import Transactions from "./components/Transactions.vue";
import Form from "./components/Form.vue";

export default {
  name: "App",
  components: {
    Balance,
    Transactions,
    Form,
  },
  data() {
    return {
      history: [],
      maxId: 0,
    };
  },
  mounted() {
    if (localStorage.getItem("history")) {
      try {
        this.history = JSON.parse(localStorage.getItem("history"));
      } catch (e) {
        localStorage.removeItem("history");
      }
    }
    if (localStorage.maxId) {
      this.maxId = localStorage.maxId;
    }
  },
  methods: {
    addItems(item, amount) {
      if (!isNaN(amount)) {
        this.history.push({
          item: item,
          amount: amount,
          id: this.getNewId(),
        });
        this.saveItems();
      }
    },
    getNewId() {
      this.maxId++;
      return this.maxId;
    },
    saveItems() {
      const parsed = JSON.stringify(this.history);
      localStorage.setItem("history", parsed);
      localStorage.maxId = this.maxId;
    },
    removeItem(id) {
      const i = this.history
        .map((item) => {
          return item.id;
        })
        .indexOf(id);
      this.history.splice(i, 1);
      this.saveItems();
    },
  },
  computed: {
    lastItems() {
      const lastArr = this.history.slice(-3);
      lastArr.reverse();
      return lastArr;
    },
    totalSum() {
      return this.history
        .reduce((prev, curr) => {
          return prev + curr.amount;
        }, 0)
        .toFixed(2);
    },
    totalIncome() {
      return this.history
        .reduce((prev, curr) => {
          if (curr.amount > 0) {
            return prev + curr.amount;
          } else {
            return prev;
          }
        }, 0.0)
        .toFixed(2);
    },
    totalExpense() {
      return this.history
        .reduce((prev, curr) => {
          if (curr.amount < 0) {
            return prev + curr.amount;
          } else {
            return prev;
          }
        }, 0)
        .toFixed(2);
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
  font-family: "Montserrat", sans-serif;
  text-align: center;
  background-color: #eee;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  max-width: 350px;
  min-height: 100vh;
  margin: 0 auto;
}

h1 {
  font-size: 1.6rem;
  font-weight: 600;
  margin: 1rem 0;
}
</style>
