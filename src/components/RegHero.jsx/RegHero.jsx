import css from './RegHero.module.css';

const RegHero = () => {
  return (
    <div className={css.hero}>
      <span className={css.img}></span>
      <p className={css.text}>Word · Translation · Grammar · Progress</p>
    </div>
  );
};

export default RegHero;
