interface LinkProps {
  children: React.ReactNode;
  to: string;
  className?: string;
  target?: string
}

const Link = ({ children, to, className, target }: LinkProps) => {
  return (
    <a href={to} className={className} target={target}>
      {children}
    </a>
  );
};

export default Link;
