import { useDispatch } from 'react-redux';

import { TbTrash, TbPencil, TbUser } from 'react-icons/tb';

import { deleteContact } from 'redux/contacts/contactsOperations';

import { TableCell, BtnTool } from './ContactListItem.styled';

export const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const onDelete = () => dispatch(deleteContact(id));

  return (
    <tr>
      <TableCell>
        <TbUser />
      </TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{number}</TableCell>
      <TableCell>
        <BtnTool type="button">
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
