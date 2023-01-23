import React from 'react';
import { TextField, FormItem, FormLabel } from '../../parts';
import { ExampleContainer } from '../ExampleContainer';
export const TelField = (): JSX.Element => (
  <ExampleContainer>
    <form
      onSubmit={() => {
        /* no-op */
      }}
    >
      <FormItem>
        <fieldset>
          <legend>
            <FormLabel>電話番号</FormLabel>
          </legend>
          <TextField
            width="tel"
            type="tel"
            autoComplete="tel-area-code"
            aria-label="市外局番"
          />{' '}
          -{' '}
          <TextField
            width="tel"
            type="tel"
            autoComplete="tel-local-prefix"
            aria-label="市内局番"
          />{' '}
          -{' '}
          <TextField
            width="tel"
            type="tel"
            autoComplete="tel-local-suffix"
            aria-label="加入者番号"
          />
        </fieldset>
      </FormItem>
    </form>
  </ExampleContainer>
);

export const BadTelField = (): JSX.Element => (
  <ExampleContainer>
    <form
      onSubmit={() => {
        /* no-op */
      }}
    >
      <FormItem>
        <fieldset>
          <legend>
            <FormLabel>電話番号</FormLabel>
          </legend>
          <TextField width="tel" type="tel" autoComplete="tel-area-code" /> -{' '}
          <TextField width="tel" type="tel" autoComplete="tel-local-prefix" /> -{' '}
          <TextField width="tel" type="tel" autoComplete="tel-local-suffix" />
        </fieldset>
      </FormItem>
    </form>
  </ExampleContainer>
);
