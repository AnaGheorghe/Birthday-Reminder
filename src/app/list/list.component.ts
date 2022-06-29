import { Component, OnInit } from '@angular/core';
import { Birthday } from '../model/birthday.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor() { }

  public BirthdayList :Birthday [] =[];

  ngOnInit() {
  }

  addBirthday(){
    this.BirthdayList.push(new Birthday());
   
  }

  removeBirthday(index:number){
    if(index > -1){
      this.BirthdayList.splice(index,1);
    } 
  }



  
  
}