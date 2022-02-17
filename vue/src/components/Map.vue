<template>
    <div ref="map-root" class="uk-width-1-1 uk-height-1-1">
    </div>
</template>

<script>
  import View from 'ol/View'
  import Map from 'ol/Map'
  import TileLayer from 'ol/layer/Tile'
  import OSM from 'ol/source/OSM'
  import {fromLonLat} from 'ol/proj';

  import 'ol/ol.css'

  export default {
    name: 'Map',
    components: {},
    props: {
        coords: {
            type: Object,
        },
    },
    mounted() {
      new Map({
        target: this.$refs['map-root'],
        layers: [
          new TileLayer({
            source: new OSM()
          }),
        ],

        view: new View({
          zoom: 8,
          center: fromLonLat([this.coords[1], this.coords[0]]),
          constrainResolution: true
        }),
      })
    },
  }
</script>
