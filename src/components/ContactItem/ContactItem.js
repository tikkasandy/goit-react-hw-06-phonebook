import PropTypes from 'prop-types';
import Button from '../Button/Button';
import s from './ContactItem.module.scss';

function ContactItem({ id, name, number, onClick }) {
  return (
    <>
      <p className={s.Contact}>
        {name}: {number}
      </p>
      <Button label="Delete" type="button" onClick={() => onClick(id)} />
    </>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ContactItem;
