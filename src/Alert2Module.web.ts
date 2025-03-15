import { registerWebModule, NativeModule } from 'expo';

import { Alert2ModuleEvents } from './Alert2.types';

class Alert2Module extends NativeModule<Alert2ModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(Alert2Module);
