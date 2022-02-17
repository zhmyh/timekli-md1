import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import View from 'ol/View'
import Map from 'ol/Map'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
import {fromLonLat} from 'ol/proj';

import 'ol/ol.css'

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {
  @Input() coords:any;
  @ViewChild('map') map:  ElementRef<HTMLInputElement> ;
  constructor() { }

  ngOnInit() : void {}
  ngAfterViewInit(): void {
    new Map({
      target: this.map.nativeElement,
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
  }

}
