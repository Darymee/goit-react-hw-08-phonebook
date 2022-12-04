import { useState } from 'react';

import { useDispatch } from 'react-redux';

import { motion } from 'framer-motion';

import { VscKey, VscMail } from 'react-icons/vsc';

import { logIn } from 'redux/auth/authOperations';

import { Title } from 'components/UI/Title/Title';
import { Button } from 'components/UI/Button/Button';
import { Wrapper } from 'components/UI/Wrapper/Wrapper';

import { Form, Input, InputWrapp, Label } from './LogIn.styled';

const LogIn = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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

    dispatch(logIn({ email, password }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
    >
      <Wrapper width={'380px'} heigth={'380px'}>
        <Title
          text={'Enter your email and password'}
          size={'25px'}
          mb={'30px'}
        />
        <Form onSubmit={handleSubmit}>
          <InputWrapp>
            <Input type="email" name="email" required onChange={handleChange} />
            <Label>Email</Label>
            <VscMail />
          </InputWrapp>
          <InputWrapp>
            <Input
              type="password"
              name="password"
              required
              onChange={handleChange}
              minLength={3}
            />
            <Label>Password</Label>
            <VscKey />
          </InputWrapp>
          {email && password && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <Button type="submit" text={'Sign in'} />
            </motion.div>
          )}
        </Form>
      </Wrapper>
    </motion.div>
  );
};
export default LogIn;
