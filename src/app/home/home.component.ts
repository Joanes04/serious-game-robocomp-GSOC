import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment } from '@env/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLoading = false;
  playerForm!: FormGroup;
  gamesArray: any = [];

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {}

  selectPlayer() {
    console.log('Seleccionamos el jugador');
    console.log(this.playerForm);
  }

  addGame() {
    console.log('Añadimos un game');
    // tslint:disable: no-string-literal
    console.log(this.playerForm.controls['game'].value);
    if (
      this.gamesArray.indexOf(this.playerForm.controls['game'].value) === -1
    ) {
      this.gamesArray.push(this.playerForm.controls['game'].value);
    }
    this.playerForm.controls.game.setValue(null);
  }

  removeGame(element: string) {
    console.log(element);
    const index = this.gamesArray.indexOf(element); // <-- Not supported in <IE9
    if (index !== -1) {
      this.gamesArray.splice(index, 1);
    }
  }

  private createForm() {
    this.playerForm = this.formBuilder.group({
      player: [null, Validators.required],
      game: [null, Validators.required]
    });
  }
}
