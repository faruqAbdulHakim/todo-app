interface HeadingTextProps {
  text: string;
}

export function HeadingText({ text }: HeadingTextProps) {
  return (
    <h1 className="uppercase text-white font-bold text-2xl xl:text-[2.5rem] xl:leading-[2.5rem] tracking-[0.5em] xl:tracking-[0.37em]">
      {text}
    </h1>
  );
}
