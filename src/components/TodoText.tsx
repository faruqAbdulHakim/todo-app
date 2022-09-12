import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface TodoTextProps {
  text: string;
  completed: boolean;
}

export function TodoText({ text, completed }: TodoTextProps) {
  const textRef = useRef<HTMLParagraphElement>(null);
  const lineRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (completed) {
      gsap.to(textRef.current, { x: 10, duration: 0.2 });
      gsap.to(textRef.current, { x: 0, duration: 0.2, delay: 0.8 });
      gsap.fromTo(
        lineRef.current,
        { width: 0 },
        { width: 'calc(100% + 5px)', duration: 0.5, delay: 0.2 }
      );
    } else {
      gsap.to(lineRef.current, { width: 0, duration: 0.5, delay: 0.3 });
    }
  }, [completed]);

  return (
    <div className="flex-1 ml-3 xl:ml-5">
      <p
        ref={textRef}
        className={`text-xs w-max xl:text-[1.075rem] translate-y-[0.125rem] 
        transition-colors duration-500
        ${completed ? 'text-[#494C6B]' : 'dark:text-white'}`}
      >
        {text}
        <span
          ref={lineRef}
          className="absolute top-1/2 left-0 -translate-y-1/2 h-[1px] bg-[#494C6B]"
        ></span>
      </p>
    </div>
  );
}
