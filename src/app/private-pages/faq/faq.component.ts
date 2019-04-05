import { FetchFAQService } from './fetch-faq.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})


export class FaqComponent implements OnInit {

  //An Object which will receive array of question and answers
  faqData: Object; 


  constructor(private myService:FetchFAQService) { }

  ngOnInit() {
  
    this.myService.fetchFAQ().subscribe(response => {
    this.faqData = response;})  //getting response from the method fetchFAQ() 
  }
}
