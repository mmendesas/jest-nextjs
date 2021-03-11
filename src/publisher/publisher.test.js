import Publisher from './publisher';

describe('[Publisher]', () => {

  it('should initiate empty', () => {
    const publisher = new Publisher();
    expect(publisher.listeners()).toEqual([])
  });

  it('should publish an event and call listener', () => {
    const publisher = new Publisher();
    const listener = jest.fn();
    publisher.removeAllListeners();
    publisher.subscribe('event', listener);

    publisher.publish('event', {});
    expect(listener).toHaveBeenCalledTimes(1);
    expect(listener).toHaveBeenCalledWith({});
    expect(listener).toHaveReturned();
  });


  it('should add event listeners correctly', () => {
    const publisher = new Publisher();
    const callback1 = () => { };
    const callback2 = () => { };

    publisher.subscribe('my-event', callback1);
    expect(publisher.listeners('my-event')).toEqual([callback1]);
    expect(publisher.listenerCount('my-event')).toEqual(1);

    publisher.subscribe('my-event', callback2);
    expect(publisher.listeners('my-event')).toEqual([callback1, callback2]);
    expect(publisher.listenerCount('my-event')).toEqual(2);
  });

  it('should not publish an event if it not exists', () => {
    const publisher = new Publisher();
    publisher.emit = jest.fn();
    publisher.publish('nonExist', {});

    expect(publisher.emit).toHaveBeenCalledTimes(1);
    expect(publisher.emit).toHaveBeenCalledWith('nonExist', {});
    expect(publisher.emit).toHaveReturned();
  });
});