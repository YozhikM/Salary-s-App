import Vue from 'vue'
import axios from 'axios'


const App = new Vue({
  el: '#app',
  data: {
    value: '',
    result: '',
    data: []
  },
  mounted() {
    let api = "https://query.yahooapis.com/v1/public/yql?q=select+*+from+yahoo.finance.xchange+where+pair+=+%22RUBKZT,RUBUSD,RUBEUR%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=";
    let vm = this
    axios.get(api)
      .then(function(response) {
        vm.data = response.data.query.results.rate
        console.log(vm.data)
      })
      .catch(function(error) {
        console.log(error)
      })
  },
  methods: {
    tng: function(data) {
      this.result = ''
      var rub = parseFloat(this.data[0].Rate)
      this.result += this.value * rub
    },
    usd: function(data) {
      this.result = ''
      var usd = parseFloat(this.data[1].Rate)
      this.result += this.value * usd
    },
    eur: function(data) {
      this.result = ''
      var eur = parseFloat(this.data[2].Rate)
      this.result += this.value * eur
    },
    rub: function() {
      this.result = ''
      this.result += this.value
    }
  },
  computed: {
    resulted: function() {
      var current = this.result
      return Math.floor(current)
    },
    perHour: function() {      
      return this.resulted = (this.resulted / 184).toFixed(2)
    },
    perMonth: function() {
      return this.resulted = (this.resulted / 23).toFixed(1)
    },
    perWeek: function() {
      return this.resulted = (this.resulted  / 4)
    }
  }
  
});