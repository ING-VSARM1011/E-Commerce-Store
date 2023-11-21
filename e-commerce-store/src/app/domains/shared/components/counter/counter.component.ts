import { Component, Input, SimpleChanges, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({ required:true }) duration = 0;
  @Input({ required: true }) message = '';
  counter = signal(0);
  counterRef: number | undefined;

  constructor() {
    // NO ASYNC
    // Before Render
    // Run One Time
    console.log('constructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges) {
    // Before and During Render
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes);
    const duration = changes['duration'];
    if (duration && (duration.currentValue !== duration.previousValue)) {
      this.doSomething();
    }
  }

  ngOnInit() {
    // After Render
    // Run One Time
    // Async, then, subs
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration: ', this.duration);
    console.log('message: ', this.message);
    this.counterRef = window.setInterval(() => {
      console.log('run interval');
      this.counter.update(statePrev => statePrev + 1);
    }, 1000);
  }

  ngAfterViewInit() {
    // After Render
    // Children Have Already Been Rendered
    console.log('ngAfterOnInit');
    console.log('-'.repeat(10));
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
    window.clearInterval(this.counterRef); // Destruye el intervalo.
  }

  doSomething() {
    console.log('change duration');
    // Async
  }
}
