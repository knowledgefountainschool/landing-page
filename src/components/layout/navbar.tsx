import { AnimatePresence, motion } from 'framer-motion';
import Link from '@/components/common/link';
import { menuSlide, scale, slide } from '@/lib/anim';
import { navItems } from '@/lib/nav';
import { Curve } from '../common/curve';
import useNavbar from '@/hooks/use-navbar';
import TheaterToggle from '../common/theater-toggle';

const NavItems = ({ data, isActive }: any) => {
  const { title, href, index } = data || {};

  return (
    <motion.div
      className='relative flex items-center'
      custom={index}
      variants={slide}
      initial='initial'
      animate='enter'
      exit='exit'
    >
      <motion.div
        variants={scale}
        animate={isActive ? 'open' : 'closed'}
        className='absolute left-[-30px] size-2 bg-white rounded-full'
      />
      <Link
        to={href}
        className='text-white font-light font-berlingske-serif text-4xl'
      >
        {title || ''}
      </Link>
    </motion.div>
  );
};

export const Navbar = () => {
  const { isActive, selectedIndicator } = useNavbar();

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          variants={menuSlide}
          initial='initial'
          animate='enter'
          exit='exit'
          className='fixed inset-0 h-screen bg-darker z-10'
        >
          <div className='flex flex-col justify-evenly h-full p-12'>
            <nav className='flex flex-col gap-4 text-5xl mt-20'>
              {navItems.map((data, index) => (
                <NavItems
                  key={index}
                  data={{ ...data, index }}
                  isActive={selectedIndicator === data.href}
                />
              ))}
              <div className='my-4'>
                <TheaterToggle />
              </div>
            </nav>
          </div>
          <Curve />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
