<template>
  <Form class="uk-form-stacked" @submit="onSubmit">

      <div class="uk-margin">
          <label class="uk-form-label" for="form-stacked-text">Name</label>
          <div class="uk-form-controls">
              <Field class="uk-input" name="name" type="text" placeholder="Some text..." :rules="nameRules"/>
              <ErrorMessage name="name"/>
          </div>
      </div>

      <div class="uk-margin">
          <label class="uk-form-label" for="form-stacked-text">Email</label>
          <div class="uk-form-controls">
              <Field class="uk-input" name="email" type="text" placeholder="Some text..." :rules="emailRules"/>
              <ErrorMessage name="email"/>
          </div>
      </div>

      <div class="uk-margin">
          <label class="uk-form-label" for="form-stacked-select">Select</label>
          <div class="uk-form-controls">
              <Field class="uk-select" as="select" name="countries" id="form-stacked-select" multiple uk-form-custom="target: true" :rules="countriesRules">
                  <option v-for="c in allCountries" :key="c.id" :value="c.id">{{ c.name.common }}</option>
              </Field>
              <ErrorMessage name="countries"/>
          </div>
      </div>

      <div class="uk-margin">
          <button class="uk-button uk-button-primary" href="#">Save</button>
      </div>


  </Form>
</template>

<script>
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
export default {
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  name: "AddPeopleForm",
  inject: ["$http"],
  data() {
    return {
      nameRules: yup.string().required().min(5),
      emailRules: yup.string().required().email(),
      countriesRules: yup.array().required().min(1),
      allCountries: []
    };
  },
  mounted() {
    this.$http
        .get("http://localhost:3000/countries")
        .then((response) => (this.allCountries = response?.data));
  },
  methods: {
    onSubmit(values) {
      const that = this
      this.$http.post('http://localhost:3000/people', values)
        .then(function () {
          that.$emit('addedPeople')
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

