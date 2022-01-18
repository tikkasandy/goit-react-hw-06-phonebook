import PropTypes from 'prop-types';
import s from './Button.module.scss';

function Button({ label, type, onClick }) {
  return (
    <button className={s.Button} type={type} onClick={onClick}>
      {' '}
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
