import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";

interface IconLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  hoveredIndex: number | null;
  index: number;
  href: string;
  className?: string;
  compact?: boolean;
  large?: boolean;
  icon: React.ElementType | string;
}

export function IconLink({
  hoveredIndex,
  index,
  href,
  children,
  className,
  compact = false,
  large = false,
  icon: Icon,
  ...props
}: IconLinkProps) {
  return (
    <Link
      {...props}
      href={href}
      className={clsx(
        className,
        "group relative isolate flex items-center rounded-lg px-2 py-0.5 text-[0.8125rem]/6 font-medium text-zinc-100/30 transition-colors hover:text-teal-300",
        compact ? "gap-x-2" : "gap-x-3",
      )}
    >
      <span className="absolute inset-0 -z-10 scale-75 rounded-lg bg-zinc-50/5 opacity-0 transition" />

      <AnimatePresence>
        {hoveredIndex === index && (
          <motion.span
            className="absolute inset-0 rounded-lg bg-slate-100/10"
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.15 } }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15, delay: 0.2 },
            }}
          />
        )}
      </AnimatePresence>

      {typeof Icon === "string" ? (
        <Image
          src={Icon}
          alt="favicon"
          className={clsx("flex-none", large ? "h-6 w-6" : "h-4 w-4")}
          width={large ? 24 : 16}
          height={large ? 24 : 16}
        />
      ) : (
        <Icon className={clsx("flex-none", large ? "h-6 w-6" : "h-4 w-4")} />
      )}

      <span className="self-baseline text-zinc-100">{children}</span>
    </Link>
  );
}
