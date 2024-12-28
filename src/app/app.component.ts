import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrementaContador, defineContador, IAppState, incrementaContador } from './store/app.state';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngrx-estudo';

  constructor(private store: Store<{ app: IAppState }>) { }

  counter$ = this.store.select('app')
    .pipe(
      map(state => state.counter)
    );

  decrementar() {
    this.store.dispatch(decrementaContador())
  }

  incrementar() {
    this.store.dispatch(incrementaContador())
  }

  defineContador(value: string) {
    const valorTratado = parseFloat(value);

    this.store.dispatch(defineContador({ payload: valorTratado }))
  }

  // string$ = this.store.select('app2')
  // .pipe(
  //   map(state => state.teste)
  // )
}
