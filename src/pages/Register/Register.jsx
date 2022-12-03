import { useState } from 'react';

import { useDispatch } from 'react-redux';

import { register } from 'redux/auth/authOperations';

import { BiUser } from 'react-icons/bi';
import { VscKey, VscMail } from 'react-icons/vsc';

import { Title } from 'components/UI/Title/Title';
import { Button } from 'components/UI/Button/Button';
import { Wrapper } from 'components/UI/Wrapper/Wrapper';

import { Form, Label, Input, InputWrapp } from './Register.styled';

export const Register = () => {
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
    dispatch(register({ name, email, password }));
  };

  return (
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
        <Button type="submit" text={'Create account'} />
      </Form>
    </Wrapper>
  );
};
