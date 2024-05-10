import * as React from 'react';
import { ExampleContainer } from '..';
import { IconButton } from '../../parts';
import { MdContentCopy, MdEdit, MdDelete } from 'react-icons/md';

export const GoodIconButtons = (): JSX.Element => (
  <ExampleContainer>
    <IconButton
      IconComponent={MdEdit}
      type="button"
      aria-label="編集"
      onClick={() => window.alert('編集')}
    />
    <IconButton
      IconComponent={MdContentCopy}
      type="button"
      aria-label="コピー"
      onClick={() => window.alert('コピー')}
    />
    <IconButton
      IconComponent={MdDelete}
      type="button"
      aria-label="削除"
      onClick={() => window.alert('削除')}
    />
  </ExampleContainer>
);

export const BadIconButtons = (): JSX.Element => (
  <ExampleContainer>
    <IconButton
      type="button"
      IconComponent={MdEdit}
      onClick={() => window.alert('編集')}
    />
    <IconButton
      type="button"
      IconComponent={MdContentCopy}
      onClick={() => window.alert('コピー')}
    />
    <IconButton
      type="button"
      IconComponent={MdDelete}
      onClick={() => window.alert('削除')}
    />
  </ExampleContainer>
);

export const Koku = (): JSX.Element => (
  <ExampleContainer>
    <IconButton
      as="span"
      IconComponent={MdEdit}
      onClick={() => window.alert('編集')}
    />
    <IconButton
      as="span"
      IconComponent={MdContentCopy}
      onClick={() => window.alert('コピー')}
    />
    <IconButton
      as="span"
      IconComponent={MdDelete}
      onClick={() => window.alert('削除')}
    />
  </ExampleContainer>
);

export const IconAndLabel = (): JSX.Element => (
  <ExampleContainer>
    <IconButton
      text="編集"
      type="button"
      IconComponent={MdEdit}
      onClick={() => window.alert('編集')}
    />
    <IconButton
      IconComponent={MdContentCopy}
      text="コピー"
      type="button"
      onClick={() => window.alert('コピー')}
    />
    <IconButton
      IconComponent={MdDelete}
      text="削除"
      type="button"
      onClick={() => window.alert('削除')}
    />
  </ExampleContainer>
);

export const BadIconAndLabel = (): JSX.Element => (
  <ExampleContainer>
    <IconButton
      text="編集"
      iconLabel="編集"
      type="button"
      IconComponent={MdEdit}
      onClick={() => window.alert('編集')}
    />
    <IconButton
      IconComponent={MdContentCopy}
      text="コピー"
      iconLabel="コピー"
      type="button"
      onClick={() => window.alert('コピー')}
    />
    <IconButton
      IconComponent={MdDelete}
      text="削除"
      iconLabel="削除"
      type="button"
      onClick={() => window.alert('削除')}
    />
  </ExampleContainer>
);
