import { requireNativeModule } from 'expo';
import { Alert2 } from './Alert2.types';
import { Appearance } from 'react-native';

const module = requireNativeModule<Alert2>('Alert2');

export default {
  alert: async (title: string, message: string, buttons: { text: string; onPress?: Function; style?: 'default' | 'cancel' | 'destructive'; isPreferred?: boolean; }[], options?: { cancelable?: boolean; userInterfaceStyle?: 'light' | 'dark'; onDismiss?: Function; }) => {
    const theme = Appearance.getColorScheme() ?? "light";
    const buttonIndex = await module.alert(title, message, buttons.map((button) => ({
      text: button.text,
      style: button.style || 'cancel',
      isPreferred: button.isPreferred || false,
    })), {
      ...options,
      userInterfaceStyle: theme,
    });
    return buttons[buttonIndex].onPress?.();
  },
};
