import { useState } from 'react';

import { useDispatch } from 'react-redux';

import { logIn } from 'redux/auth/authOperations';

import { VscKey, VscMail } from 'react-icons/vsc';

import { Title } from 'components/UI/Title/Title';
import { Button } from 'components/UI/Button/Button';
import { Wrapper } from 'components/UI/Wrapper/Wrapper';
import { Form, Input, InputWrapp, Label } from './LogIn.styled';

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
    <Wrapper width={'380px'} heigth={'380px'}>
      <Title text={'Enter your email and password'} size={'25px'} mb={'30px'} />
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
        <Button type="submit" text={'Sing In'} />
      </Form>
    </Wrapper>
  );
};
