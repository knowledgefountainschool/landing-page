export const transition = { duration: 1.76, ease: [0.76, 0, 0.24, 1] };

export const opacity = {
  initial: {
    // filter: 'blur(0px)',
    opacity: 1,
  },
  open: {
    // filter: 'blur(2px)',
    opacity: 0.2,
    // transition,
  },
  closed: {
    // filter: 'blur(0px)',
    opacity: 1,
    // transition,
  },
};

export const translate = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  enter: () => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.76, ease: [0.76, 0, 0.24, 1] },
  }),
  exit: () => ({
    y: '100%',
    opacity: 0,
    transition: { duration: 0.76, ease: [0.76, 0, 0.24, 1] },
  }),
};

export const pageSlide = {
  initial: {
    y: 0,
  },
  exit: {
    y: '-100%',
    transition,
  },
};

export const playerVariants = {
  hidden: { x: 120, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
      mass: 1,
    },
  },
  hover: {
    scale: 1.02,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 10,
    },
  },
};

export const dotVariants = {
  playing: {
    scale: 1,
    opacity: 1,
  },
  idle: {
    scale: [1, 1.5, 1],
    opacity: [1, 0.7, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const menuSlide = {
  initial: { x: 'calc(100% + 100px)' },
  enter: { x: '0', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  exit: {
    x: 'calc(100% + 100px)',
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

export const slide = {
  initial: { x: 80 },
  enter: (i: number) => ({
    x: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
  exit: (i: number) => ({
    x: 80,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
};

export const scale = {
  open: { scale: 1, transition: { duration: 0.3 } },
  closed: { scale: 0, transition: { duration: 0.4 } },
};

export const textReveal = {
  selector: '.text-reveal',
  settings: {
    y: 0,
    stagger: 0.1,
    delay: 0.5,
    duration: 0.2,
  },
};

export const scaleAnimation = {
  initial: { scale: 0, x: '-50%', y: '-50%' },
  enter: {
    scale: 1,
    x: '-50%',
    y: '-50%',
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: '-50%',
    y: '-50%',
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

type Opacity = typeof opacity;
type Translate = typeof translate;
type PageSlide = typeof pageSlide;

export type AnimationVariants = Opacity | Translate | PageSlide;

export const anim = (variants: AnimationVariants) => {
  return {
    initial: 'initial',
    animate: 'enter',
    exit: 'exit',
    variants,
  };
};
