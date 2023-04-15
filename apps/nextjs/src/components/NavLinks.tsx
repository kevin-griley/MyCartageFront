import { useState, type FC } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

type NavLinkProps = {
  label: string;
  href: string;
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
};

export const NavLink: FC<NavLinkProps> = ({
  label,
  href,
  index,
  hoveredIndex,
  setHoveredIndex,
}) => {
  return (
    <Link
      href={href}
      className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-[0ms]"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <AnimatePresence>
        {hoveredIndex === index && (
          <motion.span
            className="absolute inset-0 rounded-lg bg-slate-100"
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
      <span className="relative z-10">{label}</span>
    </Link>
  );
};

export const NavLinks: FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const links = [
    ["About Us", "/about"],
    ["Documention", "/docs"],
    ["Pricing", "/#pricing"],
    ["FAQs", "/#faqs"],
  ];

  return (
    <>
      {links.map(([label, href], index) => (
        <NavLink
          key={label}
          label={label as string}
          href={href as string}
          index={index}
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex}
        />
      ))}
    </>
  );
};
