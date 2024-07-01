import NavLink from "./NavLink";
import ThemeToggle from "./ThemeToggle";
import {
  RxBookmark,
  RxColorWheel,
  RxDividerVertical,
  RxGithubLogo,
  RxLinkedinLogo,
  RxPerson,
  RxTokens,
} from "react-icons/rx";

const Header: React.FC = () => {
  return (
    <header className="mb-20 mt-16 flex content-center items-center justify-between font-sans text-base">
      <div className="flex gap-4">
        <NavLink href="/" className="max-sm:hidden">
          home
        </NavLink>
        <NavLink href="/" className="sm:hidden" icon={<RxColorWheel />} />
        <NavLink href="/posts" className="max-sm:hidden">
          projects
        </NavLink>
        <NavLink href="/posts" className="sm:hidden" icon={<RxTokens />} />
        <NavLink href="/logs" className="max-sm:hidden">
          diary
        </NavLink>
        <NavLink href="/logs" className="sm:hidden" icon={<RxBookmark />} />
        <NavLink href="/about" className="max-sm:hidden">
          about
        </NavLink>
        <NavLink href="/about" className="sm:hidden" icon={<RxPerson />} />
      </div>
      <div className="flex justify-between gap-4">
        <NavLink href="https://github.com/shanteru" target="_blank" icon={<RxGithubLogo />} />
        <NavLink href="https://www.linkedin.com/in/chantelle-loh-yi-wei/" target="_blank" icon={<RxLinkedinLogo />} />
        <RxDividerVertical className="text-gray-300 dark:text-gray-600" />
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
