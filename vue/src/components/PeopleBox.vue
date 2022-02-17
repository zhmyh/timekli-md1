<template>
  <div class="uk-box-shadow-small uk-tile uk-padding-small uk-flex">
    <div class="name uk-tile uk-flex uk-width-1-6 uk-tile-primary uk-border-rounded uk-padding-small uk-flex-middle  uk-margin-small-right uk-text-center">
      <span class="uk-width-1-1">{{ uppercase(data.name) }}</span>
    </div>
    <div class="add-info uk-flex uk-flex-column uk-width-1-1">
      <div class="email uk-flex uk-flex-column">
        <span class="uk-text-small uk-text-bold">Email</span>
        <span>{{ data.email }}</span>
      </div>
      <div class="email uk-flex uk-flex-column">
        <span class="uk-text-small uk-text-bold">Has been in</span>
        <div class="uk-flex">
          <div v-for="c in countries" :key="c.id" class="name uk-tile uk-padding-small uk-flex uk-tile-muted uk-border-rounded uk-margin-small-right">
            <span class="uk-margin-small-right">{{ c.flag }}</span>
            <span>{{ c.name?.common }}</span>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PeopleBox",
  inject: ["$http"],
  props: {
    data: {
      type: Object,
    },
  },
  computed: {
    uppercase() {
      return (v) => {
        return v.toUpperCase();
      };
    },
  },
  data() {
    return {
      countries: null,
    };
  },
  mounted() {
    this.$http
      .get("http://localhost:3000/countries" , {params: {"id" : this.data.countries}})
      .then((response) => (this.countries = response?.data));
  },
};
</script>

