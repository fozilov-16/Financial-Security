"use client";

import { useState } from "react";
import Image from "next/image";
import LanguageSwitcher from "./main/LanguageSwitcher";
import { Link, usePathname } from "../i18n/navigation";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";

export default function Navbar() {

  const t = useTranslations("Navbar");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "/", label: t("home") },
    { href: "/methods", label: t("methods") },
    { href: "/protect", label: t("protect") },
    { href: "/cases", label: t("cases") },
    { href: "/codes", label: t("codes") },
    { href: "/aboutProject", label: t("project") },
  ];

  return (
    <div className="flex items-center sm:justify-around px-3 py-3 gap-10 relative">

      <Link href="/" className="cursor-pointer">
        <img src="/logo.png" alt="logo" className="w-[200px] h-[60px]" />
      </Link>

      <nav className="hidden md:flex items-center justify-center gap-12 font-[500] font-mont">

        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            <h1 className={pathname === item.href ? "text-blue-700" : "text-black"}>
              {item.label}
            </h1>
          </Link>
        ))}

      </nav>

      <div className="flex items-center gap-3">

        <LanguageSwitcher />

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>

      </div>
      
      {open && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-5 md:hidden">

          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              <h1 className={pathname === item.href ? "text-blue-700" : "text-black"}>
                {item.label}
              </h1>
            </Link>
          ))}

        </div>
      )}

    </div>
  );
}