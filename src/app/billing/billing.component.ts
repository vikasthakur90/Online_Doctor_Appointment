import { HttpClient } from '@angular/common/http';
import { Component,OnInit,ViewChild,ElementRef} from '@angular/core';

import {FormGroup,FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';

import {jsPDF} from 'jspdf';

@Component({

  selector: 'app-billing',

  templateUrl: './billing.component.html',

  styleUrls: ['./billing.component.css']

})

export class BillingComponent implements OnInit {

  @ViewChild('pdfTable',{static:false}) el!:ElementRef;



  constructor(private fb:FormBuilder,private route:Router,public http:HttpClient){}
  
  
  
  ConsultancyFee:string="750.00";
  
  PatientName:string=sessionStorage.getItem('pemail');
  
  DoctorName:string=sessionStorage.getItem('doctorName');;
  
  BillNo:string="101";
  
  Amount:string="800.00";
  
  Subtotal:string="750.00";
  
  Gst:string="50.00"
  
  Total:string="800.00"
  
  
  
   date1: Date = new Date();  
  
    date2:any=this.date1.toDateString();
  
    time1:any=this.date1.toLocaleTimeString();
  
  firstform!:FormGroup;
  
  
  
    ngOnInit(): void {
  
      this.loadStripe();
     
    this.http.get<any>("")
 
      this.firstform=this.fb.group({
  
        id:[''],
  
        PatientName:[''],
  
        BillNo:[''],
  
        Amount:['']
  
      })
  
    }
  
   
  
   
  
    onSubmit(){}
  
  
  
    generateInvoiceDetails(){}
  
    makePDF(){
  
     let pdf = new jsPDF('p','pt','a1');
  
   
  
   
  
     pdf.html(this.el.nativeElement,{
  
      callback:(pdf)=>{pdf.save("AppointmentInvoice.pdf");
  
      pdf.deletePage(3);
  
    }
  
     });
  
     
  
    //  pdf.text("hello OSTechHelp",10,10);
  
    //  pdf.save();
  
    }
  
    handler:any = null;
  
  
  
   
  
    pay(amount: any) {    
  
   
  
      var handler = (<any>window).StripeCheckout.configure({
  
        key: 'pk_test_51MOezKSHI2jVJwDheiDVJMifdcPNoYXAdQYANetcNSpBvcuvK4wKeDCUNYAVWi6nDLONQdWAGWQnBxliiqNxa4V700XZFfyJnk',
  
        locale: 'auto',
  
         function (token: any) {
  
          // You can access the token ID with `token.id`.
  
          // Get the token ID to your server-side code for use.
  
          console.log(token)
  
          alert('Payment Successfull: Doctor will contact you at time between 10:00Am to 1:00Pm so please be available for Consultation');
        
          
        }
        

      });
      this.route.navigate(['patient-dash'])
  
   
  
      handler.open({
  
        name: 'Payment',
  
        description: '',
  
        amount: amount * 100
  
      });
  
   
  
    }
  
   
  
    loadStripe() {
  
       
  
      if(!window.document.getElementById('stripe-script')) {
  
        var s = window.document.createElement("script");
  
        s.id = "stripe-script";
  
        s.type = "text/javascript";
  
        s.src = "https://checkout.stripe.com/checkout.js";
  
        s.onload = () => {
  
          this.handler = (<any>window).StripeCheckout.configure({
  
            key: 'pk_test_51MOezKSHI2jVJwDheiDVJMifdcPNoYXAdQYANetcNSpBvcuvK4wKeDCUNYAVWi6nDLONQdWAGWQnBxliiqNxa4V700XZFfyJnk',
  
            locale: 'auto',
  
            token: function (token: any) {
  
              // You can access the token ID with `token.id`.
  
              // Get the token ID to your server-side code for use.
  
              console.log(token)
  
              alert('Payment Success!!');
  
            }
  
          });
  
        }
  
         
  
        window.document.body.appendChild(s);
  
      }
  
    }

}