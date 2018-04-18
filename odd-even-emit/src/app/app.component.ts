import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    numberEmitted = 0;
    oddNumberArray: number[] = [];
    evenNumberArray: number[] = [];

    oddEvenComponentArray: Component[] = [];

    onEventEmitted(numberEmitted) {
        (numberEmitted % 2 === 0) ? this.evenNumberArray.push(numberEmitted) : this.oddNumberArray.push(numberEmitted);
        this.numberEmitted = numberEmitted;
    }

    onResetEvenArrayEmitted(evenArray) {
        this.evenNumberArray = evenArray;
    }

    onResetOddArrayEmitted(oddArray) {
        this.oddNumberArray = oddArray;
    }
}
