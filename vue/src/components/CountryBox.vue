<template>
  <div class="uk-card uk-card-default uk-width-1-1@m uk-margin-small-bottom">
    <div class="uk-card-header">
        <div class="uk-grid-small uk-flex-middle" uk-grid>
            <div class="uk-width-auto">
                {{ data.flag }}
            </div>
            <div class="uk-width-expand">
                <h3 class="uk-card-title uk-margin-remove-bottom">{{ data.name.common }}</h3>
                <p class="uk-text-meta uk-margin-remove-top">{{ data.cca3 }}</p>
            </div>
        </div>
    </div>
    <div class="uk-card-body">
        <p>This country has area <b>{{ data.area }} km²</b>, capital(s): <b>{{ data.capital.join(', ') }}</b></p>
        <ul uk-accordion>
          <li>
              <a class="uk-accordion-title" href="#">Add info</a>
              <div class="uk-accordion-content">
                <div class="uk-child-width-1-4@s uk-text-center uk-grid-column-small uk-grid-match uk-flex-center" uk-grid>
                  <div>
                      <div class="uk-card uk-card-default uk-card-small uk-card-body">
                        <h3 class="uk-card-title">Independence status</h3>
                        <p>{{ data.independent ? 'Yes' : 'No'}}</p>
                      </div>
                  </div>
                  <div>
                      <div class="uk-card uk-card-default uk-card-small uk-card-body">
                        <h3 class="uk-card-title">UN member status</h3>
                        <p>{{ data.unMember ? 'Yes' : 'No'}}</p>
                      </div>
                  </div>
                  <div>
                      <div class="uk-card uk-card-default uk-card-small uk-card-body">
                        <h3 class="uk-card-title">Region</h3>
                        <p>{{ data.region }}</p>
                      </div>
                  </div>
                  <div>
                      <div class="uk-card uk-card-default uk-card-small uk-card-body">
                        <h3 class="uk-card-title">Subregion</h3>
                        <p>{{ data.subregion }}</p>
                      </div>
                  </div>
                  <div>
                      <div class="uk-card uk-card-default uk-card-small uk-card-body">
                        <h3 class="uk-card-title">Currencies</h3>

                        <p>{{ Object.values(data.currencies).map( x => `${x.name} (${x.symbol})`).join(', ')  }}</p>
                      </div>
                  </div>
                </div>
              </div>
          </li>
          <li>
              <a class="uk-accordion-title" href="#">On map</a>
              <div class="uk-accordion-content uk-height-large">
                  <Map :coords="data.latlng"/>
              </div>
          </li>
      </ul>
    </div>
</div>
</template>

<script>
import Map from "./Map.vue";
export default {
  name: "CountryBox",
  components: {
    Map,
  },
  props: {
    data: {
      type: Object,
    },
  },
};
</script>

