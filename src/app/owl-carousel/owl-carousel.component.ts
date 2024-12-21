import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
// import { CarouselModule } from 'ngx-owl-carousel-o';
// import { OwlOptions } from 'ngx-owl-carousel-o';



@Component({
  selector: 'app-owl-carousel',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './owl-carousel.component.html',
  styleUrl: './owl-carousel.component.css'
})
export class OwlCarouselComponent {
    // customOptions: OwlOptions = {};
    // products = [
    //     {
    //         id: '1000',
    //         name: 'Diabetes',
    //         description:
    //             'A diabetic foot exam can help find problems that can lead to serious infection and ...',
    //         image: 'diabetes.svg',
    //     },
    //     {
    //         id: '1001',
    //         name: 'Liver',
    //         description:
    //             'A diabetic foot exam can help find problems that can lead to serious infection and ...',
    //         image: 'liver.svg',
    //     },
    //     {
    //         id: '1002',
    //         name: 'Kidney',
    //         description:
    //             'A diabetic foot exam can help find problems that can lead to serious infection and ...',
    //         image: 'kidney.svg',
    //     },
    //     {
    //         id: '1003',
    //         name: 'Fever',
    //         description:
    //             'A diabetic foot exam can help find problems that can lead to serious infection and ...',
    //         image: 'fever.svg',
    //     },
    //     {
    //         id: '1000',
    //         name: 'Diabetes',
    //         description:
    //             'A diabetic foot exam can help find problems that can lead to serious infection and ...',
    //         image: 'diabetes.svg',
    //     },
    //     {
    //         id: '1001',
    //         name: 'Liver',
    //         description:
    //             'A diabetic foot exam can help find problems that can lead to serious infection and ...',
    //         image: 'liver.svg',
    //     },
    //     {
    //         id: '1002',
    //         name: 'Kidney',
    //         description:
    //             'A diabetic foot exam can help find problems that can lead to serious infection and ...',
    //         image: 'kidney.svg',
    //     },
    //     {
    //         id: '1003',
    //         name: 'Fever',
    //         description:
    //             'A diabetic foot exam can help find problems that can lead to serious infection and ...',
    //         image: 'fever.svg',
    //     },
    //     {
    //         id: '1000',
    //         name: 'Diabetes',
    //         description:
    //             'A diabetic foot exam can help find problems that can lead to serious infection and ...',
    //         image: 'diabetes.svg',
    //     },
    //     {
    //         id: '1001',
    //         name: 'Liver',
    //         description:
    //             'A diabetic foot exam can help find problems that can lead to serious infection and ...',
    //         image: 'liver.svg',
    //     },
    //     {
    //         id: '1002',
    //         name: 'Kidney',
    //         description:
    //             'A diabetic foot exam can help find problems that can lead to serious infection and ...',
    //         image: 'kidney.svg',
    //     },
    //     {
    //         id: '1003',
    //         name: 'Fever',
    //         description:
    //             'A diabetic foot exam can help find problems that can lead to serious infection and ...',
    //         image: 'fever.svg',
    //     },
    // ];

    // ngOnInit(): void {
    //     //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //     //Add 'implements OnInit' to the class.
    //     this.customOptions = {
    //         loop: true,
    //         mouseDrag: true,
    //         touchDrag: true,
    //         pullDrag: true,
    //         dots: true,
    //         navSpeed: 700,
    //         navText: ['', ''],
    //         responsive: {
    //             0: {
    //                 items: 1,
    //             },
    //             600: {
    //                 items: 2,
    //             },
    //             960: {
    //                 items: 3,
    //             },
    //             1280: {
    //                 items: 4,
    //             },
    //         },
    //         // nav: true
    //     };
    // }
}
