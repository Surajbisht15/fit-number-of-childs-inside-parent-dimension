import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {
  widgetData: any[] = [
    {id: 1, name: 'Gender Age'},
    {id: 2, name: 'Face Match'},
    {id: 3, name: 'People Count'},
    {id: 4, name: 'Crowd Count'},
    {id: 5, name: 'Opportunity to See'},
    {id: 6, name: 'Face Recognition'},
    {id: 7, name: 'in-store performance'},
    {id: 8, name: 'Enhancing public safety'},
    {id: 9, name: 'Security'},
    {id: 10, name: 'Monitor'},
  ];
  widgetImageUrl: any[] = [
    {id: 1, url: 'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png'},
    {id: 2, url: 'https://homepages.cae.wisc.edu/~ece533/images/barbara.png'},
    {id: 3, url: 'https://homepages.cae.wisc.edu/~ece533/images/baboon.png'},
    {id: 4, url: 'https://homepages.cae.wisc.edu/~ece533/images/boat.png'},
    {id: 5, url: 'https://homepages.cae.wisc.edu/~ece533/images/tulips.png'},
    {id: 6, url: 'https://homepages.cae.wisc.edu/~ece533/images/fruits.png'},
    {id: 7, url: 'https://homepages.cae.wisc.edu/~ece533/images/frymire.png'},
    {id: 8, url: 'https://homepages.cae.wisc.edu/~ece533/images/girl.png'},
    {id: 9, url: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png'},
    {id: 10, url: 'https://homepages.cae.wisc.edu/~ece533/images/monarch.png'},
  ];
  selectedWidgets: any[];
  imagesPath: any[] = [];
  aspectRatioSelected= true;
  constructor() { } 
  ngOnInit() { 
    this.selectedWidgets = this.widgetData.filter((elem)=> elem.id === 1 );
    this.getImages();
  }
  getImages(event=null) {
    const selectedUrl = [];
    this.selectedWidgets.forEach((data)=>{
      selectedUrl.push(this.widgetImageUrl.find((elem)=>elem.id === data.id));
      this.imagesPath = [...new Set(selectedUrl)];
    })
  }
  selectWidget(elements) {
    this.getImages(elements);
    this.selectedWidgets = elements.value;
  }
  setAspectRatio() {
    this.aspectRatioSelected = true;
  }
  fitToScreen() {
    this.aspectRatioSelected = false;
  }
}