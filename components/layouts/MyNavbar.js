import React, { useEffect } from "react";
import Link from "next/link";
import { useThemeSwitcher, ThemeSwitcherButton } from "../theme";

const Header = () => {

  const [theme, themeToggler, mountedComponent] = useThemeSwitcher();
  if (!mountedComponent) return <div />;

  return (
    <div>
      <span className="logo-link">
        <Link href="/">
          <a>
            <img className="logo" src="/icons/apple-touch-icon.png" />
          </a>
        </Link>
      </span>

      <span className="my-nav ml-auto">
        <Link href="/p/[slug]" as={`/p/about`}>
          <a className="nav-link">about</a>
        </Link>
      </span>

      <ThemeSwitcherButton
        theme={theme}
        toggleTheme={themeToggler}
      />
    </div>
  );
};

export default Header;
