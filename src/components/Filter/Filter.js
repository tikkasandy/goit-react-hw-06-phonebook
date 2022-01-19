import { useDispatch, useSelector } from 'react-redux';
import contactActions from '../../redux/contacts/contacts-actions';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import s from './Filter.module.scss';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = e => dispatch(contactActions.changeFilter(e.target.value));

  return (
    <label className={s.Label}>
      <p>Find contacs by name</p>
      <input
        className={s.Input}
        onChange={onChange}
        value={value}
        type="text"
      />
    </label >);
};

export default Filter;

