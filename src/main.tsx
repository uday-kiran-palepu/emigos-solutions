import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { MotionPreference } from '@/components/motion/MotionPreference';
import { CartProvider } from '@/context/CartContext';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <MotionPreference>
        <CartProvider>
          <App />
        </CartProvider>
      </MotionPreference>
    </BrowserRouter>
  </StrictMode>
);
