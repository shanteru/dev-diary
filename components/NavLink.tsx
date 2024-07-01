import Link from "next/link";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children?: ReactNode;
  className?: string;
  icon?: ReactNode;
  target?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, className, icon, target }) => {
  return (
    <Link href={href} className={`hover:text-indigo-600 dark:hover:text-indigo-400 ${className}`} target={target}>
        {icon || children}

    </Link>
  );
};

export default NavLink;
