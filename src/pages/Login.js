import LoginForm  from 'components/LoginForm/LoginForm.js';
import { Helmet } from 'react-helmet';
import { Container } from '@mui/system';

export default function Login() {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Container maxWidth='sm' sx={{paddingBottom: 10}} >
        <LoginForm />
      </Container>
    </div>
  );
}