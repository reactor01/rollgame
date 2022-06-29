const app = Vue.createApp({
  data() {
    return {
      playedNumbers: [],
    };
  },
  methods: {
    generateNumber() {
      const generatedNumber = Math.floor(1000 + Math.random() * 9000);
      this.playedNumbers.push(generatedNumber);
    },
  },
});

app.mount("#events");
