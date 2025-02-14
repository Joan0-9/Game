import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  imports: [CommonModule],
  standalone: true
})
export class GameComponent {
  grid: { status: string; revealed: boolean; disabled: boolean }[] = [];
  correctPath: number[] = [2, 6, 9, 14, 18, 22]; // Camino correcto en orden
  currentIndex: number = 0;

  constructor(private router: Router) {
    this.generateGrid();
  }

  generateGrid() {
    this.grid = Array(24).fill(null).map((_, index) => ({
      status: this.correctPath.includes(index) ? 'correct' : 'wrong',
      revealed: false,
      disabled: true 
    }));

    for (let i = 0; i < 4; i++) {
      this.grid[i].disabled = false;
    }
  }

  checkPath(index: number) {
    if (this.correctPath[this.currentIndex] === index) {
      this.grid[index].revealed = true;
      this.currentIndex++;

      if (this.currentIndex < this.correctPath.length) {
        const nextIndex = this.correctPath[this.currentIndex];
        
        const nextRowStart = Math.floor(nextIndex / 5) * 5;
        for (let i = nextRowStart; i < nextRowStart + 5; i++) {
          this.grid[i].disabled = false;
        }
      } else {
        setTimeout(() => this.router.navigate(['/app-treasure']), 500);
      }
    } else {
      this.grid[index].revealed = true;
    }
  }
}



