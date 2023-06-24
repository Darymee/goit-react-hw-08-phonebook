import { useDispatch } from 'react-redux';
import { useMedia } from 'react-use';

import { TbTrash, TbPencil, TbUser } from 'react-icons/tb';

import { deleteContact } from 'redux/contacts/contactsOperations';

import { TableCell, BtnTool } from './ContactListItem.styled';

export const ContactListItem = ({ name, number, id, toggleModal, getInfo }) => {
  const dispatch = useDispatch();
  const isMobile = useMedia('(max-width: 768px)');
  const onDelete = () => dispatch(deleteContact(id));

  const sendInfo = () => {
    const contact = { id, name, number };
    toggleModal();
    getInfo(contact);
  };

  return (
    <tr>
      {isMobile ? null : (
        <TableCell isMobile={isMobile}>
          <TbUser />
        </TableCell>
      )}

      <TableCell isMobile={isMobile}>{name}</TableCell>
      <TableCell isMobile={isMobile}>{number}</TableCell>
      <TableCell isMobile={isMobile}>
        <BtnTool type="button" onClick={sendInfo} isMobile={isMobile}>
          <TbPencil />
        </BtnTool>
      </TableCell>
      <TableCell isMobile={isMobile}>
        <BtnTool type="button" onClick={onDelete} isMobile={isMobile}>
          <TbTrash />
        </BtnTool>
      </TableCell>
    </tr>
  );
};
