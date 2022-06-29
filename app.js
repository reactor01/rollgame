const app = Vue.createApp({
  data() {
    return {
      randomNumber: "- - - - -",
    };
  },
  methods: {
    generateNumber: function () {
      const returnedNumber = Math.floor(1000 + Math.random() * 9000);
      this.randomNumber = returnedNumber;
      return returnedNumber;
    },
  },
});

app.mount("#events");
