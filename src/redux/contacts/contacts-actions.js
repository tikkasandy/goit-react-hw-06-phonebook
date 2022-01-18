import { nanoid } from 'nanoid';
import types from './contacts-types';

const addContact = ({ name, number }) => ({
    type: types.ADD,
    payload: {
        id: nanoid(),
        name,
        number,
    }
});

const deleteContact = id => ({
    type: types.DELETE,
    payload: id,
});

const changeFilter = value => ({
    type: types.CHANGE_FILTER,
    payload: value,
});

export default { addContact, deleteContact, changeFilter };