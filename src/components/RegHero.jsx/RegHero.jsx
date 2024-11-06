import { regBgSmall } from '../../assets/imgs';
import css from './RegHero.module.css';

const RegHero = () => {
  return (
    <div className={css.hero}>
      <img src={regBgSmall} alt="Background image" />
      <p>Word · Translation · Grammar · Progress</p>
    </div>
  );
};

export default RegHero;
