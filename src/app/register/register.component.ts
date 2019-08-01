import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerDetails } from '../CustomerDetails';
import { CustomerserviceService } from '../customerservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  [x: string]: any;

  rf : FormGroup;
  submitted:boolean = false;
  rg:CustomerDetails=new CustomerDetails();

  constructor(private fb:FormBuilder,private _RegService:CustomerserviceService,private router:Router) {
    this.buildRegForm();
  }
  buildRegForm()
{
  this.rf = this.fb.group({
    'C_fname': this.fb.control('', [Validators.required,Validators.minLength(2),Validators.maxLength(10)]),
    'C_lname': this.fb.control('', Validators.required),
    'C_emailid': this.fb.control('', Validators.required),
    'C_password':   this.fb.control('', [Validators.required,Validators.minLength(5),Validators.maxLength(10)]),
    'C_city':  this.fb.control('', Validators.required),
    'C_country':this.fb.control('', Validators.required),
    'C_contact':this.fb.control('', [Validators.required,Validators.minLength(10),Validators.maxLength(10)])

})
}
get C_fname() {
  return this.rf.get('C_fname'); //notice this
}
get C_lname() {
  return this.rf.get('C_lname');  //and this too
}
get C_emailid(){

  return this.rf.get('C_emailid');
}
get C_password(){

  return this.rf.get('C_password');
}
get C_country(){

  return this.rf.get('C_country');
}
get C_city(){

  return this.rf.get('C_city');
}
get C_contact(){

  return this.rf.get('C_contact');
}
onSubmit(buildRegForm:FormGroup){
  this.submitted = true;
  if (!buildRegForm.valid)
  return;
  this.mapFormValues(buildRegForm);
  this._RegService.saveCustomer(this.rg).subscribe(data=>console.log(data));


this.router.navigate(['/login']);

}
mapFormValues(form: FormGroup){
  this.rg.C_fname = form.controls['C_fname'].value;
  this.rg.C_lname = form.controls['C_lname'].value;
  this.rg.C_emailid = form.controls['C_emailid'].value;
  this.rg.C_password= form.controls['C_password'].value;
  this.rg.C_country = form.controls['C_country'].value;
  this.rg.C_city = form.controls['C_city'].value;
  this.rg.C_contact = form.controls['C_contact'].value;
}
ngOnInit() {
    this.buildRegForm( );
  }

}


