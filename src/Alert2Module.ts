import { NativeModule, requireNativeModule } from 'expo';

import { Alert2ModuleEvents } from './Alert2.types';

declare class Alert2Module extends NativeModule<Alert2ModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<Alert2Module>('Alert2');
