import { Outlet } from 'react-router-dom';
import  {AppBar}  from './AppBar/AppBar.js';
import { Suspense } from 'react';
import { Container } from '@mui/material';

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <Container>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </div>
  );
};