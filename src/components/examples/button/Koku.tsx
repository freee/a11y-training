import * as React from 'react';
import { ExampleContainer } from '..';
import { IconButton } from '../../parts';
import { MdContentCopy, MdEdit, MdDelete } from 'react-icons/md';

export const GoodIconButtons = (): JSX.Element => (
  <ExampleContainer>
    <IconButton
      IconComponent={MdEdit}
      aria-label="編集"
      onClick={() => window.alert('編集')}
    />
    <IconButton
      IconComponent={MdContentCopy}
      aria-label="コピー"
      onClick={() => window.alert('コピー')}
    />
    <IconButton
      IconComponent={MdDelete}
      aria-label="削除"
      onClick={() => window.alert('削除')}
    />
  </ExampleContainer>
);

export const BadIconButtons = (): JSX.Element => (
  <ExampleContainer>
    <IconButton IconComponent={MdEdit} onClick={() => window.alert('編集')} />
    <IconButton
      IconComponent={MdContentCopy}
      onClick={() => window.alert('コピー')}
    />
    <IconButton IconComponent={MdDelete} onClick={() => window.alert('削除')} />
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
