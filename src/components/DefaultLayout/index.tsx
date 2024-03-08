import React from "react";

type AuthLayoutProps = {
  children: React.ReactNode;
};
const DefaultLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div
      className="flex h-screen flex-col items-center justify-center
    bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
    from-sky-500 to blue-800"
    >
      {children}
    </div>
  );
};

export default DefaultLayout;
