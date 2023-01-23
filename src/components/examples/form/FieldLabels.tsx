import * as React from 'react';
import { ExampleContainer } from '../ExampleContainer';
import {
  FormItem,
  FormLabel,
  TextField,
  CheckBox,
  RadioButton,
} from '../../parts';

export const FieldLabelsNest = (): JSX.Element => (
  /* eslint-disable jsx-a11y/label-has-associated-control */
  <ExampleContainer>
    <form
      onSubmit={() => {
        /* no-op */
      }}
    >
      <FormItem>
        <label>
          <FormLabel>氏名</FormLabel>
          <TextField type="text" />
        </label>
      </FormItem>
      <FormItem>
        <label>
          <FormLabel>メールアドレス</FormLabel>
          <TextField type="email" />
        </label>
      </FormItem>
      <FormItem>
        <fieldset>
          <legend>
            <FormLabel>性別</FormLabel>
          </legend>
          <label>
            <RadioButton name="sex" value="1">
              男性
            </RadioButton>
          </label>
          <label>
            <RadioButton name="sex" value="2">
              女性
            </RadioButton>
          </label>
          <label>
            <RadioButton name="sex" value="9">
              その他
            </RadioButton>
          </label>
        </fieldset>
      </FormItem>
      <FormItem>
        <label>
          <CheckBox name="toc" value="agree">
            利用規約に同意する
          </CheckBox>
        </label>
      </FormItem>
    </form>
  </ExampleContainer>
  /* eslint-enable jsx-a11y/label-has-associated-control */
);

export const FieldLabelsFor = (): JSX.Element => (
  <ExampleContainer>
    <form
      onSubmit={() => {
        /* no-op */
      }}
    >
      <FormItem>
        <label htmlFor="form-example-label-for-name">
          <FormLabel>氏名</FormLabel>
        </label>
        <TextField type="text" id="form-example-label-for-name" />
      </FormItem>
      <FormItem>
        <label htmlFor="form-example-label-for-email">
          <FormLabel>メールアドレス</FormLabel>
        </label>
        <TextField type="email" id="form-example-label-for-email" />
      </FormItem>
      <FormItem>
        <fieldset>
          <legend>
            <FormLabel>性別</FormLabel>
          </legend>
          <RadioButton name="sex" value="1" id="form-example-label-for-sex-1">
            <label htmlFor="form-example-label-for-sex-1">男性</label>
          </RadioButton>
          <RadioButton name="sex" value="2" id="form-example-label-for-sex-2">
            <label htmlFor="form-example-label-for-sex-2">女性</label>
          </RadioButton>
          <RadioButton name="sex" value="9" id="form-example-label-for-sex-9">
            <label htmlFor="form-example-label-for-sex-9">その他</label>
          </RadioButton>
        </fieldset>
      </FormItem>
      <FormItem>
        <CheckBox
          name="toc"
          value="agree"
          id="form-example-label-for-toc-agree"
        >
          <label htmlFor="form-example-label-for-toc-agree">
            利用規約に同意する
          </label>
        </CheckBox>
      </FormItem>
    </form>
  </ExampleContainer>
);

export const NoLabel = (): JSX.Element => (
  <ExampleContainer>
    <form
      onSubmit={() => {
        /* no-op */
      }}
    >
      <FormItem>
        <FormLabel>氏名</FormLabel>
        <TextField type="text" />
      </FormItem>
      <FormItem>
        <FormLabel>メールアドレス</FormLabel>
        <TextField type="email" />
      </FormItem>
      <FormItem>
        <fieldset>
          <legend>
            <FormLabel>性別</FormLabel>
          </legend>
          <RadioButton name="sex" value="1">
            男性
          </RadioButton>
          <RadioButton name="sex" value="2">
            女性
          </RadioButton>
          <RadioButton name="sex" value="9">
            その他
          </RadioButton>
        </fieldset>
      </FormItem>
      <FormItem>
        <CheckBox name="toc" value="agree">
          利用規約に同意する
        </CheckBox>
      </FormItem>
    </form>
  </ExampleContainer>
);
