import { forwardRef, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

import IconCheck from 'assets/svgs/icon-check.svg';

interface CheckButtonProps {
  checked: boolean;
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
}

export const CheckButton = forwardRef(
  (
    { checked, onClick }: CheckButtonProps,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => {
    const iconCheckRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
      if (checked) {
        gsap.to(iconCheckRef.current, {
          scale: 1.15,
          duration: 0.4,
        });
        gsap.to(iconCheckRef.current, { scale: 1, duration: 0.2, delay: 0.4 });
      } else {
        gsap.to(iconCheckRef.current, { scale: 0, duration: 0.2 });
      }
    }, [checked]);

    return (
      <button
        type="button"
        ref={ref}
        onClick={onClick}
        className={`w-5 h-5 xl:w-6 xl:h-6 rounded-full p-[0.125rem] hover:bg-gradient-to-br hover:from-[#57DDFF] hover:to-[#C058F3] 
        ${
          checked
            ? 'bg-gradient-to-br from-[#57DDFF] to-[#C058F3]'
            : 'bg-gray-100 dark:bg-gray-700'
        }`}
        title="Click to mark todo as completed"
      >
        <div className="bg-white dark:bg-[#25273C] rounded-full h-full w-full">
          <img
            ref={iconCheckRef}
            src={IconCheck}
            alt=""
            aria-hidden="true"
            className="scale-0 bg-gradient-to-br from-[#57DDFF] to-[#C058F3] rounded-full w-full h-full p-1"
          />
        </div>
      </button>
    );
  }
);
