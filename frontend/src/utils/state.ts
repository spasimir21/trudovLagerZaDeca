import { createContext, useCallback, useContext, useEffect, useState } from 'react';

class State<T, TScope extends string | number | symbol> {
  private callbacks: Record<TScope, Set<(value: T) => void>> = {} as any;
  private _value: T;

  constructor(initialValue: T) {
    this._value = initialValue;
  }

  get value() {
    return this._value;
  }

  modify<TArgs extends [...any[]]>(modifier: (value: T, ...args: TArgs) => T, args: TArgs, scopes: TScope[]) {
    this._value = modifier(this._value, ...args);
    const callbacks = new Set<(value: T) => void>();

    for (const scope of scopes) {
      if (!(scope in this.callbacks)) continue;
      for (const callback of this.callbacks[scope]) callbacks.add(callback);
    }

    for (const callback of callbacks) callback(this._value);
  }

  subscribe(callback: (value: T) => void, scopes: TScope[]) {
    for (const scope of scopes) {
      if (!(scope in this.callbacks)) this.callbacks[scope] = new Set();
      this.callbacks[scope].add(callback);
    }
  }

  unsubscribe(callback: (value: T) => void, scopes: TScope[]) {
    for (const scope of scopes) {
      if (!(scope in this.callbacks)) continue;
      this.callbacks[scope].delete(callback);
    }
  }
}

function createState<T>(initialValue: T) {
  return new State(initialValue);
}

interface Action<T, TScope extends string | number | symbol, TArgs extends [...any[]]> {
  modifier(value: T, ...args: TArgs): T;
  scopes: TScope[];
}

interface Reducer<T, TReduced, TScope extends string | number | symbol, TArgs extends [...any[]]> {
  reduce(value: T, ...args: TArgs): TReduced;
  scopes: TScope[];
}

function Action<T, TScope extends string | number | symbol, TArgs extends [...any[]]>(
  modifier: (value: T, ...args: TArgs) => T,
  scopes: TScope[]
) {
  return { modifier, scopes } as Action<T, TScope, TArgs>;
}

function Reducer<T, TReduced, TScope extends string | number | symbol, TArgs extends [...any[]]>(
  reduce: (value: T, ...args: TArgs) => TReduced,
  scopes: TScope[]
) {
  return { reduce, scopes } as Reducer<T, TReduced, TScope, TArgs>;
}

function createStateContext<T, TScope extends string | number | symbol>() {
  return createContext<State<T, TScope>>(createState(null as any));
}

function useAction<T, TScope extends string | number | symbol, TArgs extends [...any[]]>(
  stateContext: React.Context<State<T, TScope>>,
  action: Action<T, TScope, TArgs>
) {
  const state = useContext(stateContext);

  return useCallback((...args: TArgs) => state.modify(action.modifier, args, action.scopes), []);
}

function useReducer<T, TReduced, TScope extends string | number | symbol, TArgs extends [...any[]]>(
  stateContext: React.Context<State<T, TScope>>,
  reducer: Reducer<T, TReduced, TScope, TArgs>,
  ...args: TArgs
) {
  const state = useContext(stateContext);
  const [value, setValue] = useState(reducer.reduce(state.value, ...args));

  useEffect(() => {
    const callback = (newValue: T) => setValue(reducer.reduce(newValue, ...args));

    state.subscribe(callback, reducer.scopes);

    return () => state.unsubscribe(callback, reducer.scopes);
  }, []);

  return value;
}

export { createStateContext, Action, Reducer, createState, useAction, useReducer, State };
