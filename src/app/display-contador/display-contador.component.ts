import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { IAppState } from '../store/app.state';

@Component({
  selector: 'app-display-contador',
  templateUrl: './display-contador.component.html',
  styleUrl: './display-contador.component.scss'
})
export class DisplayContadorComponent {

  constructor(private store:Store<{app:IAppState}>){}

  counter$ = this.store.select('app')
  .pipe(
    map(state => state.counter)
  );

}
