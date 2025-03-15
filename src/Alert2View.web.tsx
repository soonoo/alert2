import * as React from 'react';

import { Alert2ViewProps } from './Alert2.types';

export default function Alert2View(props: Alert2ViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
