"use client";

import { ChevronLeft, Moon, Sun, Triangle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function isThemeSetToDark() {
  if (window == undefined) return;

  return (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
}

export default function Header() {
  const path = usePathname();
  const isHome = path === "/";
  const [isDarkMode, setIsDarkMode] = useState(isThemeSetToDark());

  const classNameTabs = 'group relative rounded px-2 py-px sm:hover:ring-1 ring-sky-500 transition-transform dark:ring-sky-600'

  useEffect(() => {
    if (isThemeSetToDark()) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    } else {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  };

  return (
    <header className="dark:bg-[#1E1F22] bg-[#FAFAFA] transition-colors duration-300 z-50 sticky top-0 mx-auto max-w-prose py-8 max-sm:pt-4">
      <nav className="flex items-center justify-between max-sm:flex-col max-sm:gap-6">
        <Link
          className={`group relative -m-12 -my-2 -mr-4 flex items-center rounded py-2 pl-12 pr-4 ${isHome ? "ring-0" : "sm:hover:ring-1"} ring-sky-500 transition-transform max-sm:text-center dark:ring-sky-600`}
          href="/"
          aria-label="Back to home"
        >
          <div
            className={`${isHome ? "hidden" : "absolute"} left-1 flex size-4 h-full w-12 items-center px-2`}
          >
            <ChevronLeft strokeWidth={1.4} />
          </div>
          <div className="flex flex-col max-sm:items-center mx-1">
            João Vitor Nardi
            <span className="text-zinc-500 dark:text-zinc-400">
              Desenvolvedor FullStack
            </span>
          </div>
        </Link>
        <div className="flex items-center gap-1 ">
          <Link
            className={classNameTabs}
            href="#sobre"
            aria-label="View about page"
            aria-current={path === "/about" ? "page" : undefined}
          >
            {"<Sobre/>"}
            <Triangle
              aria-hidden="true"
              className="absolute left-1/2 mt-1 hidden size-2 fill-sky-500 text-zinc-800 group-aria-[current=page]:block dark:fill-sky-600 dark:text-transparent"
            />
          </Link>
          <Link
            className={classNameTabs}
            href="#projetos"
            aria-label="View projects"
            aria-current={path === "/projects" ? "page" : undefined}
          >
            {"<Projetos/>"}
            <Triangle
              aria-hidden="true"
              className="absolute left-1/2 mt-1 hidden size-2 fill-sky-500 text-zinc-800 group-aria-[current=page]:block dark:fill-sky-600 dark:text-transparent"
            />
          </Link>

          <Link
            className={classNameTabs}
            href="#contato"
            aria-label="View contato"
            aria-current={path === "/contato" ? "page" : undefined}
          >
            {"<Contato/>"}
            <Triangle
              aria-hidden="true"
              className="absolute left-1/2 mt-1 hidden size-2 fill-sky-500 text-zinc-800 group-aria-[current=page]:block dark:fill-sky-600 dark:text-transparent"
            />
          </Link>

          <Link
            className={classNameTabs}
            href="#Carreira"
            aria-label="View carreira"
            aria-current={path === "/carreira" ? "page" : undefined}
          >
            {"<Carreira/>"}
            <Triangle
              aria-hidden="true"
              className="absolute left-1/2 mt-1 hidden size-2 fill-sky-500 text-zinc-800 group-aria-[current=page]:block dark:fill-sky-600 dark:text-transparent"
            />
          </Link>

        </div>
        <button
          onClick={toggleTheme}
          className="group relative flex items-center px-2"
          aria-label="Toggle theme"
        >
          {/* Lua */}
          <Image
            src="/icones/lua.svg"
            width={14}
            height={14}
            alt="Modo escuro"
            className={`absolute size-5 transition-all duration-300 ${isDarkMode
                ? "opacity-100 rotate-0 scale-100"
                : "opacity-0 rotate-90 scale-75"
              }`}
          />

          {/* Sol */}
          <Image
            src="/icones/sol.svg"
            width={14}
            height={14}
            alt="Modo claro"
            className={`size-5 transition-all duration-300 ${isDarkMode
                ? "opacity-0 -rotate-90 scale-75"
                : "opacity-100 rotate-0 scale-100"
              }`}
          />
        </button>
      </nav>
    </header>
  );
}
