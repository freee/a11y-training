import React from 'react';
import type { NextPage } from 'next';
import {
  Introduction,
  Keyboard,
  ScreenReader,
  Link,
  Button,
  Form,
} from '../components/contents';
import { Title } from '../components/Title';

const Home: NextPage = () => {
  return (
    <>
      <Title />
      <Introduction />
      <Keyboard />
      <ScreenReader />
      <Link />
      <Button />
      <Form />
    </>
  );
};

export default Home;
