import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {
  player = 'Jugador 1';
  statusGame = 'stopped';

  info = {
    date: new Date(),
    duration: 0.0,
    status: 'waitingGame',
    pantalla_pulsada: 0,
    mano_cerrada: 0,
    distance: 0.0,
    help: 0,
    check: 0,
    successes: 0,
    failures: 0
  };

  constructor() {}

  ngOnInit() {}

  startGame() {
    this.statusGame = 'running';
  }

  pauseGame() {
    this.statusGame = 'paused';
  }

  continueGame() {
    this.statusGame = 'running';
  }

  resetGame() {
    this.statusGame = 'stopped';
  }

  stopGame() {
    this.statusGame = 'stopped';
  }
}
