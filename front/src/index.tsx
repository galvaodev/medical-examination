import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Modal from 'react-modal';
import 'react-toastify/dist/ReactToastify.css';
import reportWebVitals from 'reportWebVitals';
import Router from 'routes/router';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

Modal.setAppElement('#root');
root.render(
  <ThemeProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Router />
    </QueryClientProvider>
  </ThemeProvider>,
);
reportWebVitals();
