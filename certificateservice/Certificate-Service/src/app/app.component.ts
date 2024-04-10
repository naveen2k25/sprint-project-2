import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CeritificateService } from  './certificate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ceritificate-module';
constructor(private certificateService: CeritificateService){
  this.getCeritificateDetails();
}

  register(registerForm: NgForm){
    this.certificateService.registerCertificate(registerForm.value).subscribe(
      (resp: any)=>{
        console.log(resp);
        registerForm.reset();
        this.getCeritificateDetails();

      },(err: any)=>{
        console.log(err);
      }
    );
  }

  getCeritificateDetails(){
    this.certificateService.getcertificate().subscribe(
      (resp)=>{
        console.log(resp);
        this.ceritificateDetails=resp;
      }, (err)=>{
        console.log(err);
      }
    );
  }

  ceritificateDetails= null as any;

  deleteCertificate(ceritificate: any){
    this.certificateService.deleteCertificate(ceritificate.sid).subscribe(
      (resp)=>{
        console.log(resp);
        this.getCeritificateDetails();
      },(err)=>{
        console.log(err);
      }
    );
  }
 
  ceritificateToUpdate={
    C_id: "",
    C_name: "",
    C_dept: "",
    desig:"",
    city: "", 
  };

  edit(certificate: any){
    this.ceritificateToUpdate=certificate;
  }
  updateCeritificate(){
    this.certificateService.updateCertificate(this.ceritificateToUpdate).subscribe(
      (resp)=>{
        console.log(resp);
      },(err)=>{
        console.log(err);
      }
    );
  }
  
}
