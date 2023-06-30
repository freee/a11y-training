import * as React from 'react';
import { IconButton } from '../../parts';
import { ExampleContainer } from '../ExampleContainer';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import styled from 'styled-components';

const Notification = styled.output`
  color: #6e6b6b;
  font-size: 1rem;
`;

const Stack = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`;
const LikeButton = ({
  defaultLiked,
  aria,
  notification,
}: {
  defaultLiked: boolean;
  aria: boolean;
  notification: boolean;
}): JSX.Element => {
  const [liked, setLiked] = React.useState<boolean>(false);
  const [message, setMessage] = React.useState<string>('');

  React.useEffect(() => {
    setLiked(defaultLiked);
  }, [defaultLiked]);

  React.useEffect(() => {
    if (message) {
      const id = setTimeout(() => {
        setMessage('');
      }, 5000);
      return () => clearTimeout(id);
    }
  }, [message]);

  return (
    <Stack>
      <IconButton
        IconComponent={liked ? MdFavorite : MdFavoriteBorder}
        aria-label="いいね"
        pressed={liked}
        aria-pressed={aria ? liked : undefined}
        onClick={() => {
          setMessage(
            liked ? '「いいね」を取り消しました' : '「いいね」しました'
          );
          setLiked(!liked);
        }}
      />
      {notification ? <Notification>{message}</Notification> : <Notification as="div">{message}</Notification>}
    </Stack>
  );
};

export const GoodPressed = (): JSX.Element => (
  <>
    <ExampleContainer>
      <LikeButton defaultLiked={false} aria={true} notification={true} />
    </ExampleContainer>
    <ExampleContainer>
      <LikeButton defaultLiked={true} aria={true} notification={true} />
    </ExampleContainer>
  </>
);

export const BadPressed = (): JSX.Element => (
  <>
    <ExampleContainer>
      <LikeButton defaultLiked={false} aria={false} notification={true} />
    </ExampleContainer>
    <ExampleContainer>
      <LikeButton defaultLiked={true} aria={false} notification={true} />
    </ExampleContainer>
  </>
);

export const BadStatusMessage = (): JSX.Element => (
  <>
    <ExampleContainer>
      <LikeButton defaultLiked={false} aria={true} notification={false} />
    </ExampleContainer>
    <ExampleContainer>
      <LikeButton defaultLiked={true} aria={true} notification={false} />
    </ExampleContainer>
  </>
);
