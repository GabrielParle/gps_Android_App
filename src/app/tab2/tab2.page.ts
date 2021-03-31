import { Component } from '@angular/core';
import { LoadGpxService } from '../service/load-gpx.service';
import { GpxService } from '../service/gpx.service';
import * as L from 'leaflet';
import * as omnivore from 'leaflet-omnivore';
import { DistanceService } from '../service/distance.service';
import { RefreshListComponent } from './refresh-list/refresh-list.component'



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public map;
  public savedList;
  private location;
  dist = [];

  // async loadFileNames() {
  //   let file =  await this.loadgpxservice.loadSaved();
  //
  //   this.savedList = file.files;
  //
  //
  // }

  private initMap(): void {

    this.map = L.map('mapid', {
      center: [ 0, 0 ],
      zoom: 10
    });
        const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      });

      tiles.addTo(this.map);
  }

  // private async gpxAdd(filename) {
  //   let file = await this.loadgpxservice.fileRead(filename);
  //   console.log(file.data);
  //   let gpx = omnivore.gpx.parse(file.data).addTo(this.map);
  //   this.map.fitBounds(gpx.getBounds());
  //
  //
  // }

  // private async getStaticDist(filename) {
  //   let file = await this.loadgpxservice.fileRead(filename);
  //   console.log(file);
  //   let distance = this.distanceservice.distanceStatic(file);
  //   this.dist.push(distance);
  //   return distance;
  //   console.log(distance);
  // }

  // delete(filename): void {
  //   this.loadgpxservice.fileDelete(filename);
  //   alert("Deleted" + filename);
  // }

  // async testing() {
  //   let file = await this.loadgpxservice.fileRead('1599055920037.gpx');
  //   console.log(file);
  //   console.log('one');
  //   drawer(file);
  //   }
  //   //this.drawgpx();
  getloc(): void {
    this.location = this.gpxservice.getLocation();
    console.log(this.location);

  }
  // rollOn() {
  //     for(let i in this.savedList){
  //       this.getStaticDist(this.savedList[i]);
  //     }
  //   }


  constructor(private loadgpxservice: LoadGpxService, private gpxservice: GpxService, private distanceservice: DistanceService) {}

  ngOnInit() {



  }

  ngAfterViewInit() {
  setTimeout(() => {
    this.initMap();


  }
      , 200);
}

}


// omnivore.gpx('a.gpx').addTo(map);
