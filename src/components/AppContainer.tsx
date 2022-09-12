interface AppContainerProps {
  children: React.ReactNode;
}

export function AppContainer({ children }: AppContainerProps) {
  return (
    <div className="app-container app-container-light dark:app-container-dark min-h-screen">
      <div className="w-[87vw] max-w-[540px] pt-[2.8375rem] xl:pt-[4.8125rem] mx-auto">
        {children}
      </div>
    </div>
  );
}
