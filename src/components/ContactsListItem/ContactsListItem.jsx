import PropTypes from 'prop-types';

import { ImUser } from 'react-icons/im';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import {
  ContactItem,
  Name,
  Number,
  ButtonDelete,
} from './ContactsListItem.styled.js';

export const ContactsListItem = ({ name, phone, id }) => {
  const dispatch = useDispatch();

  const onDelete = () => dispatch(deleteContact(id));

  return (
    <ContactItem>
      <Name>
        <ImUser />
        {name}:
      </Name>
      <Number>{phone}</Number>
      <ButtonDelete type="button" onClick={onDelete}>
        Delete
      </ButtonDelete>
    </ContactItem>
  );
};

ContactsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
