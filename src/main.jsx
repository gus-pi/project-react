import ReactDOM from 'react-dom/client';

import { seedLocalDatabase } from '@/api/data/seed';
import ThemeProvider from '@/components/ThemeProvider';

import './index.css';
import Router from './Router';
import { Provider } from 'react-redux';
import { store } from './state/store';
import AuthProvider from './components/AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// DO NOT REMOVE: Seeds the local storage database with data
seedLocalDatabase();

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <Provider store={store}>
        <AuthProvider>
          <Router />
        </AuthProvider>
      </Provider>
    </ThemeProvider>
  </QueryClientProvider>,
);
