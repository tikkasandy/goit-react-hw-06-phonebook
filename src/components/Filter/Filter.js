import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import contactActions from '../../redux/contacts/contacts-actions';
import s from './Filter.module.scss';

const Filter = ({ value, onChange }) => (
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


Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  console.log('state', state.contacts.filter);
  return {
    value: state.contacts.filter,
  }
};

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(contactActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

