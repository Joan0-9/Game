import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { QRCodeModule } from 'angularx-qrcode';
import gsap from 'gsap';

@Component({
  selector: 'app-treasure',
  templateUrl: './treasure.component.html',
  styleUrls: ['./treasure.component.css'],
  imports: [QRCodeModule,CommonModule],
  standalone: true
})
export class TreasureComponent implements OnInit {

  constructor() { }

  showAnimation: boolean = true;
  audio = new Audio('../../../../docs/assets/meme.mp3');

  ngOnInit(): void {
    this.playSound();
    gsap.fromTo("#congrats-img", { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1.2, duration: 1 });

    setTimeout(() => {
      gsap.to("#congrats-img", { opacity: 0, scale: 0.5, duration: 1, onComplete: () => {
        this.showAnimation = false;
        this.audio.pause();
      }});
    }, 3000);
  }
  mostrarQR = false;
  whatsappLink = 'https://wa.me/573112113626';
  
  toggleQR() {
    this.mostrarQR = !this.mostrarQR; 
  }
  playSound() {
    this.audio.play().catch(error => console.error("Error al reproducir el sonido:", error));
  }
 

}
