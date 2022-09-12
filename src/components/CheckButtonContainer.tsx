interface CheckButtonContainerProps {
  children: React.ReactNode;
}

export function CheckButtonContainer({ children }: CheckButtonContainerProps) {
  return (
    <div className="w-16 xl:w-20 h-full flex justify-center items-center">
      {children}
    </div>
  );
}
