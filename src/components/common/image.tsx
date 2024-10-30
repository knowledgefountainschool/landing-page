interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const Image: React.FC<ImageProps> = ({
  loading = 'lazy',
  decoding = 'async',
  ...props
}) => {
  return <img {...props} loading={loading} decoding={decoding} />;
};

export { Image as default };
