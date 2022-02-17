<template>
<div class="uk-margin-top">
  <ul class="uk-flex-center" uk-tab>
      <li class="uk-active uk-text-large">
        <router-link to="/">People</router-link>
      </li>
      <li>
        <router-link to="/about">Countries</router-link>
      </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>
