import { Radio, Tv } from './device';
import { RemoteControl, RemoteControlWithVolume } from './remote-control';

function clientCode(abstraction: RemoteControl | RemoteControlWithVolume): void {
  abstraction.togglePower(); // true

  // Type Guard
  if (!('volumeUp' in abstraction)) return;

  abstraction.volumeUp(); // 20
  abstraction.volumeUp(); // 30
  abstraction.volumeDown(); // 30
}

const tv = new Tv();
const tvRemoteControl = new RemoteControlWithVolume(tv);
clientCode(tvRemoteControl);

const radio = new Radio();
const radioRemoteControl = new RemoteControl(radio);
clientCode(radioRemoteControl);
