import { createAction, createReducer, on, props } from "@ngrx/store";

export interface IAppState {
  counter: number; //interface para o objeto a ser manipulado
}

export const appInitialState: IAppState = {
  counter: 0, //define um estado/valor inicial para ele
};



export const incrementaContador = createAction('[App] Incrementar Contador'); //cria uma ação para incrementar o contador

export const decrementaContador = createAction('[App] Decrementar Contador'); //cria uma ação para decrementar o contador

export const defineContador = createAction('[App] Define Contador', props<{ payload: number }>()); //cria uma ação para definir o contador



export const appReducer = createReducer( //cria o reducer
  appInitialState, //estado/valor inicial do objeto

  on(incrementaContador, (state) => (  //define a regra de incremento do contador
    {
      ...state,
      counter: state.counter + 1
    }
  )),

  on(decrementaContador, (state) => (  //define a regra de incremento do contador
    {
      ...state,
      counter: state.counter - 1
    }
  )),

  on(defineContador, (state, parametro) => (  //define a regra de incremento do contador
    {
      ...state,
      counter: parametro.payload
    }
  )),
)










//===========================================================================

// export interface IAppStateTeste {
//     teste: string;
// }

// export const appInitialStateTeste: IAppStateTeste = {
//     teste: 'string qualquer',
// };


// export const appReducer2 = createReducer(
//     appInitialStateTeste
// )


