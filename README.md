# ng5-odd-even-emit
Parent/Child component communication: @Inputs and @Outputs/EventEmitter

Emit odd and even numbers via EventEmitter...

  On odd-number emitted (parent component):
    Add odd number to OddNumberArray.
    Display odd numbers (*ngFor) via odd.component (child component).
    
  On even-number emitted: 
    Add even number to EvenNumberArray.
    Display even numbers (*ngFor) via even.component (child component).
