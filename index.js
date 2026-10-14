import { registerRootComponent } from 'expo';

import App from './App';

// registerRootComponent llama a AppRegistry.registerComponent('main', () => App)
// y ademas se asegura de que el entorno funcione igual en Expo Go y en un build nativo.
registerRootComponent(App);
