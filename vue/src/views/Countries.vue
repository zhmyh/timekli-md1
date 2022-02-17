<template>
  <h3>All countries</h3>
  <CountryBox v-for="c in countries" :key="c.id" :data="c" />
</template>

<script>
import CountryBox from "../components/CountryBox.vue";
export default {
  name: "Countries",
  inject: ["$http"],
  components: {
    CountryBox,
  },
  data() {
    return {
      countries: [],
      allCountries: [],
      offset: 0,
      page: 5
    };
  },
  mounted() {
    this.getNextCountries();
    this.$http
      .get("http://localhost:3000/countries")
      .then((response) => {
        this.allCountries = response?.data
        this.countries = this.allCountries.slice(this.offset, this.page);
        this.offset += this.page
      });
  },
  methods: {
    getNextCountries() {
      let that = this;
      window.onscroll = () => {
        let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
        if (bottomOfWindow) {
          that.allCountries.slice(that.offset, that.offset + that.page).forEach( v => {
            that.countries.push(v)
          })
          that.offset += that.page
        }
      }
  }
  }

};
</script>
