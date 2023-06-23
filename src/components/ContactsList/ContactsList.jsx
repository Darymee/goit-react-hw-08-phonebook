import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';
import { useMedia } from 'react-use';

import { motion } from 'framer-motion';

import { selectFilteredContact } from 'redux/contacts/contactsSelectors';

import { ContactListItem } from 'components/ContactListItem/ContactListItem.jsx';
import { Filter } from 'components/Filter/Filter.jsx';
import { Title } from 'components/UI/Title/Title.jsx';
import { Wrapper } from 'components/UI/Wrapper/Wrapper.jsx';
import { Message } from 'components/UI/Message/Message.jsx';

import { Table, TableHead, TableWrapper } from './ContactsList.styled.js';

export const ContactsList = ({ toggleModal, getInfo }) => {
  const filteredContacts = useSelector(selectFilteredContact);
  const isMobile = useMedia('(max-width: 768px)');

  return (
    <Wrapper mr={'40px auto'} pd={'20px'} minw={isMobile ? null : '480px'}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <Title text={'Contacts list'} size={'25px'} mb={'20px'} />
        <Filter />
        {!filteredContacts.length ? (
          <Message text={'No results'} />
        ) : (
          <TableWrapper>
            <Table>
              <thead>
                <tr>
                  {isMobile ? null : <TableHead></TableHead>}
                  <TableHead>Name</TableHead>
                  <TableHead>Number</TableHead>
                  <TableHead>Edit</TableHead>
                  <TableHead>Remove</TableHead>
                </tr>
              </thead>
              <tbody>
                {filteredContacts.map(({ id, name, number }) => (
                  <ContactListItem
                    key={id}
                    id={id}
                    name={name}
                    number={number}
                    toggleModal={toggleModal}
                    getInfo={getInfo}
                  />
                ))}
              </tbody>
            </Table>
          </TableWrapper>
        )}
      </motion.div>
    </Wrapper>
  );
};
ContactsList.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  getInfo: PropTypes.func.isRequired,
};
