import { useAnimation, useInView } from "framer-motion";
import { forwardRef, useCallback, useEffect, useState } from "react";

const AnimatedWithRef = (
  {
    element: Element,
    id,
    className,
    children,
    variants,
    whileHover,
    whileTap,
    onClick,
    onMouseOver,
    onMouseOut,
    useVariantHover,
    isReferenceHover,
    setElementRef,
    animateExit,
    style,
    alt,
    src,
  },
  ref
) => {
  const isInView = useInView(ref, { once: true });
  const control = useAnimation();

  const [isInitial, setIsInitial] = useState(true);

  // Felt the need to these customs because for some reason animating with whileHover just wouldn't return component back to initial form.
  const customMouseOver = useCallback(
    () => control.start("mouseOver"),
    [control]
  );
  const customMouseOut = useCallback(
    () => control.start("mouseOut"),
    [control]
  );

  useEffect(() => {
    isInView && control.start("final");

    isReferenceHover && (customMouseOver(), setIsInitial(false));
    !isReferenceHover && !isInitial && customMouseOut();
  }, [
    isInView,
    isReferenceHover,
    isInitial,
    control,
    customMouseOver,
    customMouseOut,
  ]);

  return (
    <>
      <Element
        id={id}
        className={className}
        style={style}
        variants={variants}
        initial="initial"
        animate={control}
        exit={animateExit && "initial"}
        whileHover={whileHover}
        whiletap={whileTap}
        onClick={onClick}
        onMouseOver={useVariantHover ? customMouseOver : onMouseOver}
        onMouseOut={useVariantHover ? customMouseOut : onMouseOut}
        ref={setElementRef}
        // When the element is an image.
        src={src}
        alt={alt}
      >
        {children}
      </Element>
    </>
  );
};

const Animated = forwardRef(AnimatedWithRef);
export default Animated;
