import { FC, useMemo, useState } from 'react';
import { AvatarProps } from '@radix-ui/react-avatar';
import { Avatar, AvatarFallback } from './avatar';
import Image from './image';

interface UserAvatarProps extends AvatarProps {
  user:
    | {
        name?: string | null | undefined;
        email?: string | null | undefined;
        image?: string | null | undefined;
      }
    | undefined
    | null;
}

const UserAvatar: FC<UserAvatarProps> = ({ user, ...props }) => {
  const [imageError, setImageError] = useState(false);
  const image = user?.image;

  // Memoize random color selection
  const randomBackgroundColor = useMemo(() => {
    const userAvatarColors = [
      'linear-gradient(135deg, #6332d2, #361b85)',
      '#00DFA2',
      '#0079FF',
      '#FF9A00',
      '#FF165D',
      '#F6FA70',
    ];

    return userAvatarColors[
      Math.floor(Math.random() * userAvatarColors.length)
    ];
  }, []); // No dependencies needed here

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <Avatar {...props} key={user?.email}>
      {image && !imageError ? (
        <Image
          src={image}
          alt={user?.name ?? 'avatar'}
          width={96}
          height={96}
          className='object-cover object-center'
          onError={handleImageError}
        />
      ) : (
        <AvatarFallback
          className='border border-dark text-white'
          style={{ background: randomBackgroundColor }}
        >
          {user?.name?.slice(0, 1)}
        </AvatarFallback>
      )}
    </Avatar>
  );
};

export default UserAvatar;
