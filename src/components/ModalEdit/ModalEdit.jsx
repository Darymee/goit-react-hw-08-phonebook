import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { TbCheck, TbUserSearch } from 'react-icons/tb';
import { MdOutlineClose } from 'react-icons/md';

import { editContact } from 'redux/contacts/contactsOperations';

import { Title } from 'components/UI/Title/Title';

import {
  Backdrop,
  ModalWindow,
  BtnClose,
  InputWrapp,
  Input,
  NumberInput,
  BtnSubmit,
} from './ModalEdit.styled';

export const ModalEdit = ({ onClose, toggle, info }) => {
  const [name, setName] = useState(info.name);
  const [number, setNumber] = useState(info.number);

  const dispatch = useDispatch();

  const onBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (name === info.name && number === info.number) {
      toast.info(`Edit name or number`, {
        position: toast.POSITION.TOP_RIGHT,
        theme: 'colored',
        pauseOnHover: true,
      });
      return;
    }

    dispatch(editContact({ id: info.id, name, number }));
    onClose();
  };

  return (
    <>
      {toggle && (
        <Backdrop onClick={onBackdropClick}>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <ModalWindow>
              <BtnClose type="button" onClick={onClose}>
                <MdOutlineClose />
              </BtnClose>
              <Title text={'Edit contact'} size={'25px'} mb={'20px'} />
              <form onSubmit={handleSubmit}>
                <InputWrapp>
                  <TbUserSearch />
                  <Input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    value={name}
                    onChange={e => {
                      setName(e.currentTarget.value);
                    }}
                    required
                  />
                </InputWrapp>
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
                <BtnSubmit type="submit">
                  <TbCheck />
                </BtnSubmit>
              </form>
            </ModalWindow>
          </motion.div>
        </Backdrop>
      )}
    </>
  );
};
