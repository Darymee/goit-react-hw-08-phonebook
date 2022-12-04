import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { TbUserPlus } from 'react-icons/tb';

import { addContact } from 'redux/contacts/contactsOperations';
import { selectContacts } from 'redux/contacts/contactsSelectors';

import { Button } from 'components/UI/Button/Button';
import { Title } from 'components/UI/Title/Title';

import {
  FormWrap,
  Form,
  InputWrap,
  Input,
  NumberInput,
} from './ContactForm.styled';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    for (const contact of contacts) {
      if (contact.name.toLowerCase() === name.toLowerCase()) {
        toast.warning(`${name} is already in contacts`, {
          position: toast.POSITION.TOP_RIGHT,
          theme: 'colored',
          pauseOnHover: true,
        });
      }
    }
    dispatch(addContact({ name, number }));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormWrap>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <Title text={'Create new contact'} size={'25px'} mb={'20px'} />
        <Form onSubmit={handleSubmit}>
          <InputWrap>
            <TbUserPlus />
            <Input
              placeholder="Enter contact name"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              onChange={e => {
                setName(e.currentTarget.value);
              }}
              value={name}
              required
            />
          </InputWrap>

          <NumberInput
            defaultCountry="UA"
            onChange={value => {
              if (!value) {
                return;
              }
              setNumber(value);
            }}
            region="Europe"
            title="Number"
            type="tel"
            name="number"
            international
            maxLength="16"
            value={number}
            required
          />

          <Button type="submit" text={'Add contact'} />
        </Form>
      </motion.div>
    </FormWrap>
  );
};
