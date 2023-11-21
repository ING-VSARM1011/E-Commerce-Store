import { Component, Input, SimpleChange } from '@angular/core';
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

  constructor() {
    // NO ASYNC
    // Before Render
    // Run One Time
    console.log('constructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChange) {
    // Before and During Render
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes);
  }

  ngOnInit() {
    // After Render
    // Run One Time
    // Async, then, subs
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration: ', this.duration);
    console.log('message: ', this.message);
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
  }
}
