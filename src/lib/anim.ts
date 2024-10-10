const transition = { duration: 1, ease: [0.76, 0, 0.24, 1] };

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
    transition,
  }),
  exit: () => ({
    y: '100%',
    opacity: 0,
    transition,
  }),
};

type Opacity = typeof opacity;
type Translate = typeof translate;

export type AnimationVariants = Opacity | Translate;

export const anim = (variants: AnimationVariants) => {
  return {
    initial: 'initial',
    animate: 'enter',
    exit: 'exit',
    variants,
  };
};
