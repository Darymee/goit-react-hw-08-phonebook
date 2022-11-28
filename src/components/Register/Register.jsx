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

export const Register = () => {
  return (
    <Wrapper>
      <Title text={'Registration form'} />
      <Form>
        <InputWrapp>
          <Input type="text" name="name" required />
          <Label>Name</Label>
          <BiUser />
        </InputWrapp>
        <InputWrapp>
          <Input type="text" name="email" required />
          <Label>Email</Label>
          <VscMail />
        </InputWrapp>
        <InputWrapp>
          <Input type="password" name="password" required />
          <Label>Password</Label>
          <VscKey />
        </InputWrapp>
        <Button type="submit">Create account</Button>
        {/* <Message text={'Check your email or password'} /> */}
      </Form>
    </Wrapper>
  );
};
