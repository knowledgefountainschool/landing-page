interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  placeholder?: 'blur';
  blurDataURL?: string;
}

const Image: React.FC<ImageProps> = ({ ...props }) => {
  return <img {...props} loading='lazy' decoding='async' />;
};

export { Image as default };
