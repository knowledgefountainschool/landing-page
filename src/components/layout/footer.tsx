import { siteConfig } from '@/config/site';
import useDate from '@/hooks/use-date';
import { Icons } from '@/components/common/icons';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { buttonVariants } from '../common/button';

const { siteName, contact, cta, github } = siteConfig;

const Footer = () => {
  const { year } = useDate();
  return (
    <footer
      className='relative h-[100vh] text-xs lg:text-sm tracking-tighter'
      style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
    >
      <div className='fixed bottom-0 inset-x-0 h-[100vh] p-5 md:p-6 lg:p-7 xl:p-8 divide-y divide-darker'>
        <div className='pt-[12rem] lg:pt-[10rem] py-12 grid grid-cols-3 max-w-3xl'>
          <div className='flex flex-col space-y-4'>
            <label className='uppercase font-medium text-2xs lg:text-xs'>
              Sitemap
            </label>
            <Link
              className={cn(
                buttonVariants({
                  variant: 'link',
                  className:
                    'font-normal py-0 px-0 h-auto w-fit text-xs lg:text-sm',
                })
              )}
              to='/#about'
            >
              About
            </Link>
            <Link
              className={cn(
                buttonVariants({
                  variant: 'link',
                  className:
                    'font-normal py-0 px-0 h-auto w-fit text-xs lg:text-sm',
                })
              )}
              to='/#values'
            >
              Values
            </Link>
            <Link
              className={cn(
                buttonVariants({
                  variant: 'link',
                  className:
                    'font-normal py-0 px-0 h-auto w-fit text-xs lg:text-sm',
                })
              )}
              to='/#triple-a'
            >
              Triple A
            </Link>
            <Link
              className={cn(
                buttonVariants({
                  variant: 'link',
                  className:
                    'font-normal py-0 px-0 h-auto w-fit text-xs lg:text-sm',
                })
              )}
              to='/#donate'
            >
              Donate
            </Link>
          </div>
          <div className='flex flex-col space-y-4'>
            <label className='uppercase font-medium text-2xs lg:text-xs'>
              Follow Us
            </label>
            <Link
              className={cn(
                buttonVariants({
                  variant: 'link',
                  className:
                    'font-normal py-0 px-0 h-auto w-fit text-xs lg:text-sm',
                })
              )}
              to={contact.x}
              target='_blank'
            >
              X (fka Twitter)
            </Link>
            <Link
              className={cn(
                buttonVariants({
                  variant: 'link',
                  className:
                    'font-normal py-0 px-0 h-auto w-fit text-xs lg:text-sm',
                })
              )}
              to={contact.facebook}
              target='_blank'
            >
              Facebook
            </Link>
            <Link
              className={cn(
                buttonVariants({
                  variant: 'link',
                  className:
                    'font-normal py-0 px-0 h-auto w-fit text-xs lg:text-sm',
                })
              )}
              to={contact.instagram}
              target='_blank'
            >
              Instagram
            </Link>
            <Link
              className={cn(
                buttonVariants({
                  variant: 'link',
                  className:
                    'font-normal py-0 px-0 h-auto w-fit text-xs lg:text-sm',
                })
              )}
              to={github}
              target='_blank'
            >
              Github
            </Link>
          </div>
          <div className='flex flex-col space-y-4'>
            <label className='uppercase font-medium text-2xs lg:text-xs'>
              Contact Us
            </label>
            <Link
              className={cn(
                buttonVariants({
                  variant: 'link',
                  className:
                    'font-normal py-0 px-0 h-auto w-fit text-xs lg:text-sm text-wrap break-all',
                })
              )}
              to={`mailto:${contact.email}`}
              target='_blank'
            >
              Email
            </Link>

            <Link
              className={cn(
                buttonVariants({
                  variant: 'link',
                  className:
                    'font-normal py-0 px-0 h-auto w-fit text-xs lg:text-sm',
                })
              )}
              to={cta}
              target='_blank'
            >
              WhatsApp
            </Link>
            <div
              className={cn(
                'font-normal py-0 px-0 h-auto w-fit text-xs lg:text-sm'
              )}
            >
              Call {contact.phone}
            </div>
          </div>
        </div>

        <div className='prose pt-4 pb-8 lg:py-12'>
          <ol className='space-y-4 font-medium leading-5'>
            <li className='hidden lg:flex'>
              {siteName} encourages the pursuit of personal growth alongside
              academic success. We strive to foster a community that values
              integrity, compassion, and responsibility.
            </li>
            <li className='hidden lg:flex'>
              {siteName} admits students of any race, color, national and ethnic
              origin to all the rights, privileges, programs, and activities
              generally accorded or made available to students at the school. It
              does not discriminate on the basis of race, color, national and
              ethnic origin in administration of its educational policies,
              admissions policies, grant and aid programs, athletics, and other
              school-administered programs.
            </li>
            <li className='prose lg:space-x-1'>
              <span>
                For more information about our programs, values and tours,
                please visit our admissions office at
              </span>
              <span>
                <Link
                  className={cn(
                    buttonVariants({
                      variant: 'link',
                      className:
                        'py-0 px-0 h-auto w-fit text-xs lg:text-sm font-medium break-all',
                    })
                  )}
                  target='_blank'
                  to={contact.googleMapsUrl}
                >
                  {contact.address}.
                </Link>
              </span>
              <span>We look forward to welcoming you to {siteName}.</span>
            </li>
          </ol>
        </div>

        <div className='flex items-center justify-between py-12 gap-3 text-2xs md:text-xs lg:text-sm'>
          <p>
            &#169; {year} {siteName}. All Rights Reserved.
          </p>
          <Icons.logo className='size-6 md:size-7 lg:size-8 xl:size-9' />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
