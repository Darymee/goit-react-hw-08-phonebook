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
  return (
    <Wrapper>
      <Title text={'Enter your email and password'} />
      <Form>
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
        <Button type="submit">Sing In</Button>
        <Message text={'Check your email or password'} />
      </Form>
    </Wrapper>
  );
};
