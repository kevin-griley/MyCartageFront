import { type FC } from "react";

export const Layout: FC = () => {
  return (
    <div className="flex">
      <div className="min-h-screen flex-1 bg-red-300"></div>

      <div className="min-h-screen flex-1 bg-red-600"></div>
    </div>
  );
};
