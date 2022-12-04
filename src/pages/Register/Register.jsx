import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { motion } from 'framer-motion';
import { toast } from 'react-toastify';

import { register } from 'redux/auth/authOperations';

import { BiUser } from 'react-icons/bi';
import { VscKey, VscMail } from 'react-icons/vsc';

import { Title } from 'components/UI/Title/Title';
import { Button } from 'components/UI/Button/Button';
import { Wrapper } from 'components/UI/Wrapper/Wrapper';

import { Form, Label, Input, InputWrapp } from './Register.styled';

const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (password.length < 7) {
      toast.warning(`Password must contain at least 6 characters !`, {
        position: toast.POSITION.TOP_RIGHT,
        theme: 'colored',
        pauseOnHover: true,
      });
      return;
    }

    dispatch(register({ name, email, password }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
    >
      <Wrapper width={'380px'} heigth={'400px'}>
        <Title text={'Registration form'} size={'25px'} mb={'30px'} />
        <Form onSubmit={handleSubmit}>
          <InputWrapp>
            <Input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              required
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Your name may contain more than 3 characters"
            />
            <Label>Name</Label>
            <BiUser />
          </InputWrapp>
          <InputWrapp>
            <Input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              required
            />
            <Label>Email</Label>
            <VscMail />
          </InputWrapp>
          <InputWrapp>
            <Input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              required
            />
            <Label>Password</Label>
            <VscKey />
          </InputWrapp>

          {name && email && password && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <Button type="submit" text={'Create account'} />
            </motion.div>
          )}
        </Form>
      </Wrapper>
    </motion.div>
  );
};

export default Register;
