import { useState } from 'react';

import { useDispatch } from 'react-redux';

import { logIn } from 'redux/auth/operations';

import { VscKey, VscMail } from 'react-icons/vsc';

import { Title } from 'components/UI/Title/Title';
import {
  Wrapper,
  Form,
  Label,
  Input,
  InputWrapp,
  Button,
} from './LogIn.styled';
import { Message } from 'components/Message/Message';

export const LogIn = () => {
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
    setEmail('');
    setPassword('');
  };

  return (
    <Wrapper>
      <Title text={'Enter your email and password'} />
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
          />
          <Label>Password</Label>
          <VscKey />
        </InputWrapp>
        <Button type="submit">Sing In</Button>
        <Message text={'Check your email or password'} />
      </Form>
    </Wrapper>
  );
};
