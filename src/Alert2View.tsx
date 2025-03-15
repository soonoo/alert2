import { requireNativeView } from 'expo';
import * as React from 'react';

import { Alert2ViewProps } from './Alert2.types';

const NativeView: React.ComponentType<Alert2ViewProps> =
  requireNativeView('Alert2');

export default function Alert2View(props: Alert2ViewProps) {
  return <NativeView {...props} />;
}
