import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { register } from 'redux/auth/authOperations';

import { BiUser } from 'react-icons/bi';
import { VscKey, VscMail } from 'react-icons/vsc';

import { Title } from 'components/UI/Title/Title';
// import { Message } from 'components/Message/Message';

import {
  Wrapper,
  Form,
  Label,
  Input,
  InputWrapp,
  Button,
} from './Register.styled';
import { selectUser } from 'redux/auth/authSelectors';

export const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const asd = useSelector(selectUser);

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
    console.log(asd);
    dispatch(register({ name, email, password }));
    // setName('');
    // setEmail('');
    // setPassword('');
  };

  return (
    <Wrapper>
      <Title text={'Registration form'} />
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
        <Button type="submit">Create account</Button>
        {/* <Message text={'Check your email or password'} /> */}
      </Form>
    </Wrapper>
  );
};