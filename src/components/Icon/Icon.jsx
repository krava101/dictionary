import icons from '../../assets/icons.svg';

function Icon({ name, stroke }) {
  return (
    <svg stroke={stroke}>
      <use href={`${icons}#icon-${name}`}></use>
    </svg>
  );
}

export default Icon;
