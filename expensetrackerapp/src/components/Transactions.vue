<template>
  <div v-if="lastItems.length > 0" class="history">
    <h2>History</h2>
    <hr />
    <ul>
      <li
        @mouseover="show = item.id"
        @mouseleave="show = false"
        :class="isPositive(item)"
        :key="item.id"
        v-for="item in lastItems"
      >
        <span class="item"
          ><span
            @click="removeItem(item.id)"
            v-if="show === item.id"
            class="delete"
            ><i class="fas fa-times"></i
          ></span>
          {{ item.item }}</span
        >
        <span class="amount"
          >{{ Math.sign(item.amount) === 1 ? "+" : "" }}{{ item.amount }}</span
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Transactions",
  data() {
    return {
      show: false,
    };
  },
  props: {
    lastItems: Array,
  },
  methods: {
    isPositive(item) {
      return Math.sign(item.amount) === 1 ? "positive" : "negative";
    },
    removeItem(id) {
      this.$emit("removeItem", id);
    },
  },
};
</script>

<style scoped>
.history {
  width: 100%;
}
h2 {
  width: 100%;
  text-align: left;
  font-size: 1.3rem;
  font-weight: 500;
}
hr {
  width: 100%;
  margin: 0.8rem 0;
}
ul {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
li {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem;
  border-bottom: 2px solid #ddd;
  margin: 0.2rem 0;
  background-color: #fff;
}
.item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.delete {
  font-size: 1.2rem;
  color: red;
  font-weight: 700;
  margin-right: 0.6rem;
  cursor: pointer;
  padding: 0.3rem;
}
.update {
  font-size: 1rem;
  color: blue;
  font-weight: 700;
  margin-right: 0.5rem;
  cursor: pointer;
  padding: 0.3rem;
}
.positive {
  border-right: 6px solid rgb(46, 221, 46);
}
.negative {
  border-right: 6px solid rgb(201, 55, 55);
}
</style>
