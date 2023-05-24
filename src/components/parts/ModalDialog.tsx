import React, { useEffect, useRef } from 'react';
import { MdClose } from 'react-icons/md';
import styled from 'styled-components';

const Dialog = styled.dialog`
  padding: 3rem;
  border: 0;
  box-shadow: 0.25rem 0.25rem 0.5rem rgba(0, 0, 0, 0.1),
    -0.125rem 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
  position: relative;
  border-radius: 0.25rem;

  ::backdrop {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const CloseButton = styled.button`
  display: flex;
  width: 1.75rem;
  height: 1.75rem;
  padding: 0.125rem;
  border: 0;
  border-radius: 50%;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  font-size: 1.5rem;
  background-color: transparent;
  cursor: pointer;
  color: #8c8989;
  transition-duration: 0.22s;
  transition-property: color background-color;

  :hover {
    background-color: #dce8ff;
    color: #2864f0;
  }
`;

export const ModalDialog = ({
  children,
  open,
  ...props
}: { children: React.ReactNode; open: boolean } & Omit<
  React.ComponentPropsWithoutRef<typeof Dialog>,
  'children' | 'open'
>): JSX.Element => {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (open) {
      if (!ref.current?.open) {
        ref.current?.showModal();
      }
    } else {
      if (ref.current?.open) {
        ref.current?.close();
      }
    }
  }, [open]);

  return (
    <Dialog ref={ref} {...props}>
      {children}
      <CloseButton onClick={() => ref.current?.close()} aria-label="閉じる">
        <MdClose />
      </CloseButton>
    </Dialog>
  );
};
