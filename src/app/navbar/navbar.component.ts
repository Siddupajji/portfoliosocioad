import { Component, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { OwlOptions } from 'ngx-owl-carousel-o';
import * as $ from 'jquery';






declare const slick:any
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {

  faEnvelope = faEnvelope
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    autoWidth:true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 5000,
    autoplay:true,
    center:true,
    autoplayTimeout: 2000,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }
 

  customOptions1: OwlOptions = {
    loop: true,
    mouseDrag: true,
    autoWidth:true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 5000,
    autoplay:true,
    center:true,
    autoplayTimeout: 2000,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  customOptions2: OwlOptions = {
    loop: true,
    mouseDrag: true,
    autoWidth:true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 5000,
    autoplay:true,
    center:true,
    autoplayTimeout: 2000,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  customOptions3: OwlOptions = {
    loop: true,
    mouseDrag: true,
    autoWidth:true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 5000,
    autoplay:true,
    center:true,
    autoplayTimeout: 2000,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  constructor() {
    
   }
   
 

  ngOnInit(): void {

      
   

  }

}
