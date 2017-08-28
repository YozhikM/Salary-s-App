import Vue from 'vue'
import axios from 'axios'


const App = new Vue({
  el: "#app",
  data: {
    value: "",
    result: "",
    data: []
  },
  mounted() {
    let api =
      "https://www.cbr-xml-daily.ru/daily_json.js";
    let vm = this;
    axios
      .get(api)
      .then((response) => {
        vm.data = response.data.Valute;
        console.log(vm.data);
    })
      .catch((error) => {
        console.log(error);
    });
  },
  methods: {
    tng: function(data) {
      this.result = "";
      var kzt = Number(this.data.KZT.Value);
      this.result += (this.value / kzt) * 100;
    },
    usd: function(data) {
      this.result = "";
      var usd = Number(this.data.USD.Value);
      this.result += this.value / usd;
    },
    eur: function(data) {
      this.result = "";
      var eur = Number(this.data.EUR.Value);
      this.result += this.value / eur;
    },
    rub: function() {
      this.result = "";
      this.result += this.value;
    }
  },
  computed: {
    resulted: function() {
      var current = this.result;
      return Math.floor(current);
    },
    perHour: function() {
      return (this.resulted = (this.resulted / 184).toFixed(2));
    },
    perMonth: function() {
      return (this.resulted = (this.resulted / 23).toFixed(1));
    },
    perWeek: function() {
      return (this.resulted = this.resulted / 4);
    }
  }
});
