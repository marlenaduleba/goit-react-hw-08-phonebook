import { RegisterForm } from 'components/Forms/RegisterForm.jsx';
import { Section } from 'components/Section/Section.jsx';
import { Helmet } from 'react-helmet-async';

export default function Register() {
  return (
    <>
    <Helmet>
        <title>Register</title>
      </Helmet>
      <Section title="Register">
      <RegisterForm />
    </Section>
    </>
  
  );
}
