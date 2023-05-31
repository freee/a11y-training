import * as React from 'react';
import { TextField, FormItem, FormLabel, Button, P } from '../parts';
import styled from 'styled-components';


const ErrorMessage = styled(P)`
  color: #dc1e32;
`
export const FieldWithBadErrorMessage = ({fieldAriaLabel}:{fieldAriaLabel?: string}):JSX.Element => {
  const [value, setValue] = React.useState('１４１-００３２');
  const [message, setMessage] = React.useState('');

  return (
    <form
      onSubmit={(e) => {
        /* no-op */
        e.preventDefault();
      }}
    >
      <P>数字は全角で、ハイフンは半角で入力してください</P>
      <FormItem style={{marginTop: '1rem'}}>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label>
          <FormLabel>郵便番号</FormLabel>
          <TextField
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            aria-label={fieldAriaLabel}
          />
        </label>
        <Button
          type="button"
          style={{ marginLeft: '1rem' }}
          onClick={() =>
            setMessage(
              !value.match(/^[０-９]{3}-[０-９]{4}$/)
                ? '入力形式が正しくありません'
                : ''
            )
          }
        >
          入力内容の確認
        </Button>
        {message && <ErrorMessage>{message}</ErrorMessage>}
      </FormItem>
    </form>
  );
};
