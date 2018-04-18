# ng5-odd-even-emit
Parent/child component communication: @Inputs and @Outputs/EventEmitter

Emit odd and even numbers via EventEmitter in parent component (app.component).

Start, Pause, and Stop numbers being emitted via controller component (game-control.component). 

On odd and even numbers emitted:
  - Add odd numbers to oddNumbersArray.
    Display odd numbers via child component (odd.component).
  - Add even number to evenNumbersArray.
    Display even numbers via child component (even.component).
