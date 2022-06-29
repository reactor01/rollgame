const app = Vue.createApp({
  data() {
    return {
      winNumber: "",
      playedNumbers: [],
    };
  },
  methods: {
    generateNumber() {
      const generatedNumber = Math.floor(1000 + Math.random() * 9000);
      this.playedNumbers.unshift(generatedNumber);
      this.winNumber = generatedNumber;
    },
  },
});

app.mount("#events");
