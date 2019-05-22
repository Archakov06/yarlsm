class Store {
  private listeners: Array<{ actionType: String; fn: Function }> = [];
  private reducers: Object;
  private state: Object;

  constructor(reducers: Object, initialState: Object = {}) {
    this.reducers = reducers;
    this.state = initialState;
  }

  get getState() {
    return this.state;
  }

  public dispatch(type: String, data: any) {
    this.reduce(type, data);
    for (let i = 0; i < this.listeners.length; i++) {
      const { actionType, fn } = this.listeners[i];
      if (actionType === '@listener' || actionType === type) {
        fn({ type, data, state: this.getState });
      }
    }
  }

  public listen(fn: Function, type?: String) {
    this.listeners.push({ actionType: type || '@listener', fn });
  }

  private reduce(type: String, payload: any) {
    let newState = Object.assign({}, this.state);
    for (const key in this.reducers) {
      newState[key] = this.reducers[key](this.getState[key], type, payload);
    }
    this.state = newState;
  }
}

export default Store;
