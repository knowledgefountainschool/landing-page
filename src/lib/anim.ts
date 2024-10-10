const transition = { duration: 1.76, ease: [0.76, 0, 0.24, 1] };

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
