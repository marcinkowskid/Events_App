import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';

// Components
import { App } from './components';

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
}
