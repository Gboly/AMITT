import { chooseAtRandomFromArray } from "./function";

export const hSlideIn = (transition, hoverVariant) => ({
  initial: { opacity: 0, x: "-100vw" },
  final: {
    opacity: 1,
    x: 0,
    transition: {
      duration: transition?.duration || 2,
      ease: transition?.ease || "backInOut",
      delay: transition?.delay || 0,
    },
  },
  mouseOver: hoverVariant?.final,
  mouseOut: hoverVariant?.initial,
});

export const hSlideInLeft = (transition, hoverVariant, isPage) => ({
  initial: isPage ? { opacity: 1, x: "-100vw" } : { opacity: 0, x: "-0.5rem" },
  final: {
    opacity: 1,
    x: 0,
    transition: {
      duration: transition?.duration || 2,
      ease: transition?.ease || "backInOut",
      delay: transition?.delay || 0,
    },
  },
  mouseOver: hoverVariant?.final,
  mouseOut: hoverVariant?.initial,
});

export const hSlideInRight = (transition, hoverVariant, isPage) => ({
  initial: isPage ? { opacity: 1, x: "100vw" } : { opacity: 0, x: "0.5rem" },
  final: {
    opacity: 1,
    x: 0,
    transition: {
      duration: transition?.duration || 2,
      ease: transition?.ease || "backInOut",
      delay: transition?.delay || 0,
    },
  },
  mouseOver: hoverVariant?.final,
  mouseOut: hoverVariant?.initial,
});

export const vSlideIn = (transition, hoverVariant, isPage) => ({
  initial: isPage ? { opacity: 1, y: "-30vh" } : { opacity: 0, y: "-1rem" },
  final: {
    opacity: 1,
    y: 0,
    transition: {
      duration: transition?.duration || 2,
      ease: transition?.ease || "easeOut",
      delay: transition?.delay || 0,
    },
  },
  mouseOver: hoverVariant?.final,
  mouseOut: hoverVariant?.initial,
});

export const vSlideInBottom = (transition, hoverVariant) => ({
  initial: { opacity: 0, y: "2rem" },
  final: {
    opacity: 1,
    y: 0,
    transition: {
      duration: transition?.duration || 2,
      ease: transition?.ease || "easeOut",
      delay: transition?.delay || 0,
    },
  },
  mouseOver: hoverVariant?.final,
  mouseOut: hoverVariant?.initial,
});

export const reveal = (transition, hoverVariant) => ({
  initial: { opacity: 0 },
  final: {
    opacity: 1,
    transition: {
      duration: transition?.duration || 2,
      ease: transition?.ease || "easeIn",
      delay: transition?.delay || 0,
    },
  },
  mouseOver: hoverVariant?.final,
  mouseOut: hoverVariant?.initial,
});

export const spreadOut = (transition, hoverVariant) => ({
  initial: { width: 0 },
  final: {
    width: "100%",
    transition: {
      duration: transition?.duration || 0.5,
      ease: transition?.ease || "easeOut",
      delay: transition?.delay || 0,
    },
  },
  mouseOver: hoverVariant?.final,
  mouseOut: hoverVariant?.initial,
});

export const justReactions = (hoverVariant) => ({
  initial: hoverVariant?.initial,
  final: {},
  mouseOver: hoverVariant?.final,
  mouseOut: hoverVariant?.initial,
});

const pageVariants = [hSlideInLeft, hSlideInRight, vSlideIn, spreadOut];
export const pageVariant = () => {
  const randomVariant = chooseAtRandomFromArray(pageVariants);
  return randomVariant({ duration: 0.5, ease: "easeOut" }, "", true);
};
export const pageExit = {
  opacity: 0,
  transition: { duration: 0.5, ease: "easeOut" },
};

// event animation
export const shadowOut = {
  initial: {
    boxShadow: "0 0",
    transition: { duration: 0.3, ease: "easeIn" },
  },
  final: {
    boxShadow: "var(--light-text-box-shadow)",
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export const fontSizeIncrease = {
  initial: {
    opacity: 1,
    fontSize: "100%",
    transition: { duration: 0.2, ease: "easeIn" },
  },
  final: {
    opacity: 0.8,
    fontSize: "110%",
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

export const rotateEnlarge = {
  initial: {
    transform: "rotate(5deg)",
    left: "0.8rem",
    right: "0.8rem",
    top: "1.2rem",
    bottom: "1.2rem",
    transition: { duration: 0.2, ease: "easeOut", delay: 0.1 },
  },
  final: {
    transform: "rotate(0deg)",
    left: "0rem",
    right: "0rem",
    top: "0rem",
    bottom: "0rem",
    transition: { duration: 0.2, ease: "easeIn", delay: 0.1 },
  },
};

export const imageScale = {
  initial: {
    transform: "scaleX(1) scaleY(1)",
    transition: { duration: 0.2, ease: "easeOut" },
  },
  final: {
    transform: "scaleX(1.05) scaleY(1.07)",
    transition: { duration: 0.2, ease: "easeOut" },
  },
};
export const scale = {
  initial: {
    transform: "scale(1)",
    transition: { duration: 0.2, ease: "easeIn" },
  },
  final: {
    transform: "scale(1.3)",
    transition: { duration: 0.2, ease: "easeOut" },
  },
};
