import type { StyleProp, ViewStyle } from 'react-native';

export interface Alert2 {
  alert(
    title: string,
    message?: string,
    buttons?: {
      text: string;
      onPress?: Function;
      style?: 'default' | 'cancel' | 'destructive';
      isPreferred?: boolean;
    }[],
    options?: {
      cancelable?: boolean;
      userInterfaceStyle?: 'light' | 'dark';
      onDismiss?: Function;
    }
  )
}