import { buttonVariants } from '@/components/common/button';
import { cn } from '@/lib/utils';
import Section from '@/components/common/section';

interface NotFoundPageProps {}

const NotFoundPage = ({}: NotFoundPageProps) => {
  return (
    <Section
      id='not-found'
      className='bg-darker text-white flex-center h-screen lg:h-screen'
    >
      <div className='bg-brand flex-center w-[80%] md:w-[70%] lg:w-[60%] h-[60svh] md:h-[50svh] rounded-3xl shadow lg:-mb-32'>
        <div className='flex-col-center gap-2 lg:gap-4'>
          <p className='text-lg lg:text-xl lowercase'>OOPs! Page not found.</p>
          <div className='flex gap-2 lg:gap-4'>
            <a
              href={'/'}
              className={cn(
                'text-xs md:text-sm',
                buttonVariants({ variant: 'outline' })
              )}
            >
              Go back to homepage
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default NotFoundPage;
