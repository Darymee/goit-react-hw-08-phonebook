import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

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

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    for (const contact of contacts) {
      if (contact.name.toLowerCase() === name.toLowerCase()) {
        alert(`${name} is already in contacts`);
        return;
      }
    }
    console.log({ name, number });
    dispatch(addContact({ name, number }));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormWrap>
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
            console.log(value);
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
    </FormWrap>
  );
}
