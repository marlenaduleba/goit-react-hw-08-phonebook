import LoginForm from 'components/Forms/LoginForm.jsx';
import { Helmet } from 'react-helmet-async';
import { Section } from 'components/Section/Section.jsx';

export default function Login() {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>

      <Section title="Log In">
        <LoginForm />
      </Section>
    </div>
  );
}
