/* eslint-disable jsx-a11y/label-has-associated-control */
import * as React from 'react';
import { ExampleContainer } from '../ExampleContainer';
import { FormAnnotation, FormItem, FormLabel, TextField } from '../../parts';

export const AnnotationPassword = (): JSX.Element => (
  <ExampleContainer>
    <form
      onSubmit={() => {
        /* no-op */
      }}
    >
      <FormItem>
        <label>
          <FormLabel>パスワード</FormLabel>
          <TextField type="password" aria-describedby="annotaiton-password" />
        </label>
        <FormAnnotation id="annotaiton-password">
          8文字以上の英数字で入力してください
        </FormAnnotation>
      </FormItem>
    </form>
  </ExampleContainer>
);

export const AnnotationCompany = (): JSX.Element => (
  <ExampleContainer>
    <form
      onSubmit={() => {
        /* no-op */
      }}
    >
      <FormItem>
        <label>
          <FormLabel>会社名</FormLabel>
          <TextField type="text" aria-describedby="annotation-company" />
        </label>
        <FormAnnotation id="annotation-company">
          記入例: フリー株式会社
        </FormAnnotation>
      </FormItem>
    </form>
  </ExampleContainer>
);

export const PlaceholderPassword = (): JSX.Element => (
  <ExampleContainer>
    <form
      onSubmit={() => {
        /* no-op */
      }}
    >
      <FormItem>
        <label>
          <FormLabel>パスワード</FormLabel>
          <TextField
            type="password"
            placeholder="8文字以上の英数字で入力してください"
          />
        </label>
      </FormItem>
    </form>
  </ExampleContainer>
);

export const PlaceholderCompany = (): JSX.Element => (
  <ExampleContainer>
    <form
      onSubmit={() => {
        /* no-op */
      }}
    >
      <FormItem>
        <label>
          <FormLabel>会社名</FormLabel>
          <TextField type="text" placeholder="フリー株式会社" />
        </label>
      </FormItem>
    </form>
  </ExampleContainer>
);
