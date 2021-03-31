import { Component } from '@angular/core';
import { GpxService } from '../service/gpx.service';
import { DistanceService } from '../service/distance.service';




@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( private gpxservice: GpxService, private distanceservice: DistanceService) {  }

  location: object;
  saveas = 0;
  gpxName;
  speed;
  dist;
  time;
  endtime;


  locationGetter(): void {
    this.gpxservice.startLocation();
    this.timeElapsed();
  }
  locationStopper(): void {
    this.gpxservice.stopLocation();
    clearTimeout(this.endtime);
  }

  getloc(): void {
    this.location = this.gpxservice.getLocation();
    this.getdist();

    console.log(this.location);

  }

  getspd():void{
    if(!this.gpxservice.speed) {
      this.speed = "n/a"
    } else {
      this.speed = this.gpxservice.speed;
    }
  }

  getdist():void{
    if(this.gpxservice.dist == undefined) {
      this.dist = "n/a"
    } else {
      this.dist = this.gpxservice.dist;
    }
  }

  saveAs(): void {
    this.saveas = 1;
  }

  saving(): void {
    this.gpxservice.saveGpx(this.gpxName);
    this.saveas = 0;
  }

  timeElapsed():void {
    let timeStart = Date.now();
    this.endtime = setInterval(() => {
        let timeNow = Date.now();
        let diff = (timeNow - timeStart);
        let minutes = Math.floor(diff / 60000);
        let seconds = parseInt(((diff % 60000) / 1000).toFixed(0));
        this.time =  minutes + ":" + ((seconds < 10) ? '0' : '') + seconds;
    }, 1000);

  };




  ngOnInit() {
    setTimeout(() => {
      this.getspd();
      this.getdist();

    }
        , 200);
  }

  // getLocation(): void {
  //   this.gpxservice.getLocation().subscribe(location => this.location = location);
//}

}
