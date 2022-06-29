import { Component, NgModule, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Birthday } from './model/birthday.model';
import { NotificationService } from './notification.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Birthday-Reminder';

  constructor(private notifyService : NotificationService) { }

  // public birthday: Birthday;

  ngOnInit() {
    
  }


  // checkBirthday(){
   

  // }
   

  showToasterInfo(){
      this.notifyService.showInfo("Nicio zi de nastere azi")

  }
   

}


function ngOnInit() {
  throw new Error('Function not implemented.');
}

