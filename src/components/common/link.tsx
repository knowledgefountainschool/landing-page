interface LinkProps {
  children: React.ReactNode;
  to: string;
  className?: string;
  target?: string;
  onClick?: () => void;
}

const Link = ({ children, to, className, target, onClick }: LinkProps) => {
  return (
    <a href={to} className={className} target={target} onClick={onClick}>
      {children}
    </a>
  );
};

export default Link;
