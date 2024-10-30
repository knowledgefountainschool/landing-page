interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  placeholder?: 'blur';
  blurDataURL?: string;
}

const Image: React.FC<ImageProps> = ({ loading = 'lazy', decoding="async", ...props }) => {
  return <img {...props} loading={loading} decoding={decoding} />;
};

export { Image as default };
