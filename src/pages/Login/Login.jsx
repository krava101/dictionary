import LoginForm from '../../components/LoginForm/LoginForm';
import RegHero from '../../components/RegHero.jsx/RegHero';
import css from './Login.module.css';

function Login() {
  return (
    <section className={css.login}>
      <RegHero />
      <LoginForm />
    </section>
  );
}

export default Login;
