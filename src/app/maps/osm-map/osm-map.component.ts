import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { latLng, tileLayer } from 'leaflet';

@Component({
  selector: 'app-osm-map',
  templateUrl: './osm-map.component.html',
  styleUrls: ['./osm-map.component.scss'],
})
export class OsmMapComponent implements OnInit, OnDestroy, AfterViewInit {
  constructor() {}

  public ngOnInit() {}

  public ngOnDestroy() {}

  public ngAfterViewInit() {}

  public options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
      }),
    ],
    zoom: 12,
    center: latLng([52.9668, 36.0625]),
  };
}
