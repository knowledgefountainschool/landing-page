interface TitleProps {
  children: React.ReactNode;
  backButton?: boolean;
}

const Title = ({ children, backButton = true }: TitleProps) => {
  if (backButton) {
    return (
      <div className='flex items-center relative w-full py-2 font-semibold'>
        <span className='absolute-center'>{children}</span>
      </div>
    );
  } else {
    return <div className='w-full py-2 font-semibold'>{children}</div>;
  }
};

export default Title;
