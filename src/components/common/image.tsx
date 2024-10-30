interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  placeholder?: 'blur';
  blurDataURL?: string;
}

const Image: React.FC<ImageProps> = ({ loading = 'lazy', ...props }) => {
  return <img {...props} loading={loading} decoding='async' />;
};

export { Image as default };
