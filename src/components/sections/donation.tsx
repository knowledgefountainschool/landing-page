import Section from '@/components/common/section';
import { Card, CardDescription, CardTitle } from '@/components/common/card';
import { ChevronRight, Gift, MessageCircle } from 'lucide-react';
import useCardAnimation from '@/hooks/use-card-animation';
import { donate, makeALegacy, siteName } from '@/config/site';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { buttonVariants } from '../common/button';
import { Icons } from '../common/icons';

interface DonationSectionProps {}

const DonationSection = ({}: DonationSectionProps) => {
  const { animatedContainer } = useCardAnimation();
  return (
    <div className='relative pt-16 lg:pt-32'>
      <div className='w-screen bg-darker absolute -top-3 h-6 py-16 lg:py-32' />
      <Section
        id='donate'
        className='bg-darker text-white relative min-h-[50svh] md:min-h-[50svh] lg:min-h-[50svh] xl:min-h-[50svh]'
      >
        <div className='flex-center text-center relative overflow-hidden h-full pb-32'>
          <div className='p-8 container mx-auto md:max-w-[40rem] lg:max-w-[55.5rem] xl:max-w-[60rem] space-y-6 md:space-y-8 lg:space-y-10 xl:space-y-12 flex flex-col justify-center items-center font-berlingske-serif font-semibold h-full'>
            <h1 className='uppercase tracking-[0.5em]'>
              Choose your way to make impact
            </h1>
            <span>
              <Icons.longArrowWhite className='size-24' />
            </span>
            <h2 className='text-xl leading-[2.25rem] md:text-2xl md:leading-[2.5rem] lg:text-3xl lg:leading-[2.75rem] xl:text-4xl xl:leading-[3rem] tracking-wider'>
              Every donation builds a better future for our students and the{' '}
              {siteName} family.
            </h2>
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-32 lg:gap-6 pb-32'>
          <Card className='bg-brand text-darker font-berlingske-serif space-y-4 flex-col-center pt-8 pb-16'>
            <div className='flex flex-row flex-shrink-0 justify-center items-center gap-2'>
              <div className={`circle-1 ${animatedContainer}`}>
                <MessageCircle className='size-20' />
              </div>
            </div>
            <CardTitle>Make a donation today</CardTitle>
            <CardDescription className='text-white font-san-francisco'>
              You can make a difference in the future of all {siteName} students
              by making a quick donation right now.
            </CardDescription>
            <Link
              to={donate}
              className={cn(
                buttonVariants({
                  size: 'lg',
                  variant: 'secondary',
                  className:
                    'font-san-francisco shadow-none border-darker border group w-fit',
                })
              )}
              target='_blank'
            >
              Donate Now{' '}
              <div className='transition-transform duration-300 group-hover:translate-x-1'>
                <ChevronRight />
              </div>
            </Link>
          </Card>

          <Card className='bg-brand text-darker font-berlingske-serif space-y-4 flex-col-center pt-8 pb-16'>
            <div className='flex flex-row flex-shrink-0 justify-center items-center gap-2'>
              <div className={`circle-2 ${animatedContainer}`}>
                <Gift className='size-20' />
              </div>
            </div>
            <CardTitle>Create your legacy</CardTitle>
            <CardDescription className='text-white font-san-francisco'>
              If you are looking to make a lasting impact on the future of{' '}
              {siteName}, we can custom tailor a scholarship or endowment fund.
            </CardDescription>
            <Link
              to={makeALegacy}
              className={cn(
                buttonVariants({
                  size: 'lg',
                  variant: 'secondary',
                  className:
                    'font-san-francisco shadow-none border-darker border group w-fit',
                })
              )}
              target='_blank'
            >
              Make Enquiry{' '}
              <div className='transition-transform duration-300 group-hover:translate-x-1'>
                <ChevronRight />
              </div>
            </Link>
          </Card>
        </div>
      </Section>
    </div>
  );
};

export default DonationSection;
