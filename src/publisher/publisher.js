import { EventEmitter } from 'events';

class Publisher extends EventEmitter {
  constructor() {
    super();
    this.publish = this.publish.bind(this);
    this.subscribe = this.subscribe.bind(this);
  }

  publish(event, ...args) {
    this.emit(event, ...args);
  }

  subscribe(event, callback) {
    this.removeListener(event, callback);
    this.on(event, callback);
  }
}

export default Publisher;