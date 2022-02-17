<template>
  <h3>All people</h3>
  <ul uk-accordion>
    <li>
        <a class="uk-accordion-title" href="#">Add</a>
        <div class="uk-accordion-content">
            <AddPeopleForm @addedPeople="getAll"/>
        </div>
    </li>
</ul>
  <PeopleBox v-for="p in people" :key="p.id" :data="p" />
</template>

<script>
import PeopleBox from "../components/PeopleBox.vue";
import AddPeopleForm from "../components/AddPeopleForm.vue";
export default {
  name: "People",
  inject: ["$http"],
  components: {
    PeopleBox,
    AddPeopleForm,
  },
  data() {
    return {
      people: null,
    };
  },
  mounted() {
    this.getAll()
  },

  methods: {
    getAll() {
      this.$http
        .get("http://localhost:3000/people")
        .then((response) => (this.people = response?.data));
    }
  }
};
</script>
