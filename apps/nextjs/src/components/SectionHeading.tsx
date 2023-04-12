import clsx from "clsx";

export function SectionHeading({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={clsx(
        className,
        "inline-flex items-center rounded-full px-4 py-1 text-teal-600 ring-1 ring-inset ring-teal-600",
      )}
      {...props}
    >
      <span className="mx-3 text-base font-medium tracking-tight">
        {children}
      </span>
    </h2>
  );
}
