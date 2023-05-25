import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar.jsx';
import { Suspense } from 'react';
import { Container } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from './Loader/Loader.jsx';
import { Footer } from './Footer/Footer.jsx';


export const Layout = () => {
  return (
    <div style={{display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    justifyContent: 'space-between'}} >
      <AppBar />
      <Container component="main">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
        <ToastContainer
          autoClose={2000}
          theme="colored"
          style={{
            top: 'calc(60px + 10px)',
          }}
        />
      <Footer />
    </div>
  );
};
