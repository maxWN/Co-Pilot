<template>
    <div>
      <!-- <h2>My Map</h2> -->
      <div id="map" class="map"></div>
    </div>
</template>

<script>
/* eslint-disable */
// use npm init -y to create an npm package.json with default settings
import { ol, fromLonLat } from 'ol'
import 'ol/ol.css'
import Map from 'ol/Map.js'
import View from 'ol/View.js'
import { Draw, Modify, Snap } from 'ol/interaction.js'
import { Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js'
import { OSM, Vector as VectorSource } from 'ol/source.js'
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style.js'
import XYZ from 'ol/source/XYZ'

export default {
  name: 'TestMap',
  mounted () {
    // TRY THIS: https://stackoverflow.com/questions/52284275/is-it-possible-to-add-openlayers-library-to-vue-cli-3
    this.$nextTick(function () {
      this.initMap();
    })
  },
  mixins: [],
  methods: {
    initMap () {
      const map = new Map({
        target: 'map',
        layers: [
          new TileLayer({
            // source: new OSM()
            // https://openlayers.org/en/latest/doc/tutorials/bundle.html
            // https://openlayers.org/en/latest/examples/xyz.html        
            source: new XYZ({
              url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
          })
        ],
        view: new View({
          center: [37.41, 8.82],
          zoom: 6
        })
      })
    }
  }
}

</script>
