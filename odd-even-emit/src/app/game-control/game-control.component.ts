import {
    Component,
    OnInit,
    Input,
    EventEmitter,
    Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {

    @Input() oddNumArray: number[];
    @Input() evenNumArray: number[];

    @Output() intervalEmitted = new EventEmitter<number>();
    @Output() resetEvenArrayEmitted = new EventEmitter<number[]>();
    @Output() resetOddArrayEmitted = new EventEmitter<number[]>();

    interval;
    lastNumber = 0;
    clicked = true;

    constructor() { }

    ngOnInit() {
    }

    onStartClicked() {
        if (this.clicked) {
            this.interval = setInterval(() => {
                this.intervalEmitted.emit(this.lastNumber + 1);
                this.lastNumber++;
            }, 1000);
        }
        this.clicked = false;
    }

    onPauseClicked() {
        clearInterval(this.interval);
        this.clicked = true;
    }

    onStopClicked() {
        clearInterval(this.interval);
        this.interval = 0;
        this.lastNumber = 0;
        this.resetEvenArray();
        this.resetOddArray();
        this.clicked = true;
    }

    resetEvenArray() {
        this.resetEvenArrayEmitted.emit(this.evenNumArray = []);
    }

    resetOddArray() {
        this.resetOddArrayEmitted.emit(this.oddNumArray = []);
    }
}
