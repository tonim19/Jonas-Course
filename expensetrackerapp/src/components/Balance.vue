<template>
  <div class="balance">
    <div class="total">
      <h2>YOUR BALANCE</h2>
      <p>${{ balance }}</p>
    </div>
    <div class="info">
      <div class="income">
        <h2>INCOME</h2>
        <p>${{ income }}</p>
      </div>
      <div class="expense">
        <h2>EXPENSE</h2>
        <p>${{ expense }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Balance",
  props: {
    balance: String,
    income: String,
    expense: String,
  },
};
</script>
<style scoped>
.balance {
  width: 100%;
  margin: 1rem 0 0.5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.total {
  align-self: flex-start;
  text-align: left;
}

h2 {
  font-size: 1rem;
  font-weight: 500;
}

p {
  font-size: 2rem;
  font-weight: 500;
}

.info {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin: 1rem 0;
  background-color: #fff;
}

.income {
  padding: 0.5rem;
  width: 50%;
  margin: 1rem 0;
  border-right: 1px solid #eee;
}
.income p {
  font-size: 1.4rem;
  margin-top: 0.3rem;
  color: rgb(46, 221, 46);
}
.expense {
  padding: 0.5rem;
  margin: 1rem 0;
  width: 50%;
}
.expense p {
  font-size: 1.4rem;
  margin-top: 0.3rem;
  color: rgb(201, 55, 55);
}
</style>
