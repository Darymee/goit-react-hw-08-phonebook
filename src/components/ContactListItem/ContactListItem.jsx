import { useDispatch } from 'react-redux';

import { TbTrash, TbPencil, TbUser } from 'react-icons/tb';

import { deleteContact } from 'redux/contacts/contactsOperations';

import { TableCell, BtnTool } from './ContactListItem.styled';

export const ContactListItem = ({ name, number, id, toggleModal, getInfo }) => {
  const dispatch = useDispatch();
  const onDelete = () => dispatch(deleteContact(id));

  const sendInfo = () => {
    const contact = { id, name, number };
    toggleModal();
    getInfo(contact);
  };

  return (
    <tr>
      <TableCell>
        <TbUser />
      </TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{number}</TableCell>
      <TableCell>
        <BtnTool type="button" onClick={sendInfo}>
          <TbPencil />
        </BtnTool>
      </TableCell>
      <TableCell>
        <BtnTool type="button" onClick={onDelete}>
          <TbTrash />
        </BtnTool>
      </TableCell>
    </tr>
  );
};
