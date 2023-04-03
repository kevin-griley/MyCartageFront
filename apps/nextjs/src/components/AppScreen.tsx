import {
  forwardRef,
  type FC,
  type ForwardRefExoticComponent,
  type HTMLProps,
  type RefAttributes,
  type SVGProps,
} from "react";
import Image from "next/image";
import clsx from "clsx";

import MyCartageLogo from "~/images/logos/MyCartage-banner.png";

const Logo: FC = () => {
  return <Image src={MyCartageLogo} alt="MyCartage" height={30} />;
};

const MenuIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const UserIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M15 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.696 19h10.608c1.175 0 2.08-.935 1.532-1.897C18.028 15.69 16.187 14 12 14s-6.028 1.689-6.836 3.103C4.616 18.065 5.521 19 6.696 19Z"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

interface AppScreenProps extends HTMLProps<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

interface AppScreenHeaderProps extends HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
}

interface AppScreenTitleProps extends HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
}

interface AppScreenSubtitleProps extends HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
}

interface AppScreenBodyProps extends HTMLProps<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

export const AppScreen: React.FC<AppScreenProps> & {
  Header: ForwardRefExoticComponent<
    Omit<AppScreenTitleProps, "ref"> & RefAttributes<HTMLDivElement>
  >;
  Title: ForwardRefExoticComponent<
    Omit<AppScreenTitleProps, "ref"> & RefAttributes<HTMLDivElement>
  >;
  Subtitle: ForwardRefExoticComponent<
    Omit<AppScreenTitleProps, "ref"> & RefAttributes<HTMLDivElement>
  >;
  Body: ForwardRefExoticComponent<
    Omit<AppScreenBodyProps, "ref"> & RefAttributes<HTMLDivElement>
  >;
} = ({ children, className, ...props }) => {
  return (
    <div className={clsx("flex flex-col", className)} {...props}>
      <div className="flex justify-between px-4 pt-4">
        <MenuIcon className="h-6 w-6 flex-none" />
        <Logo />
        <UserIcon className="h-6 w-6 flex-none" />
      </div>
      {children}
    </div>
  );
};

export const AppScreenHeader = forwardRef<HTMLDivElement, AppScreenHeaderProps>(
  ({ children, ...props }, ref) => {
    return (
      <div ref={ref} className="mt-6 px-4 text-white" {...props}>
        {children}
      </div>
    );
  },
);
AppScreenHeader.displayName = "AppScreenHeader";

export const AppScreenTitle = forwardRef<HTMLDivElement, AppScreenTitleProps>(
  ({ children, ...props }, ref) => {
    return (
      <div ref={ref} className="text-2xl text-white" {...props}>
        {children}
      </div>
    );
  },
);
AppScreenTitle.displayName = "AppScreenTitle";

export const AppScreenSubtitle = forwardRef<
  HTMLDivElement,
  AppScreenSubtitleProps
>(({ children, ...props }, ref) => {
  return (
    <div ref={ref} className="text-sm text-gray-500" {...props}>
      {children}
    </div>
  );
});
AppScreenSubtitle.displayName = "AppScreenSubtitle";

export const AppScreenBody = forwardRef<HTMLDivElement, AppScreenBodyProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx("mt-6 flex-auto rounded-t-2xl bg-white", className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);
AppScreenBody.displayName = "AppScreenBody";

AppScreen.Header = AppScreenHeader;
AppScreen.Title = AppScreenTitle;
AppScreen.Subtitle = AppScreenSubtitle;
AppScreen.Body = AppScreenBody;
