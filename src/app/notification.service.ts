import { Injectable } from '@angular/core';
   
import { ToastrService } from 'ngx-toastr';
   
@Injectable({
  providedIn: 'root'
})
export class NotificationService {
   
  constructor(private toastr: ToastrService) { }
   
 
   
  showInfo(message: string | undefined){
      this.toastr.info(message)
  }
   
  
   
}