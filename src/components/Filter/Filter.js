import PropTypes from 'prop-types';
import s from './Filter.module.scss';

function Filter({ value, onChange }) {
  return (
    <label className={s.Label}>
      <p>Find contacs by name</p>
      <input
        className={s.Input}
        onChange={onChange}
        value={value}
        type="text"
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
