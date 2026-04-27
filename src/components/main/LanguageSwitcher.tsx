"use client";

import { useState, useRef, useEffect } from "react";

import { usePathname, useRouter } from "../../i18n/navigation";
import { useLocale } from "next-intl";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const ref = useRef<HTMLDivElement>(null);

  const changeLang = (lang: "en" | "ru" | "tj") => {
    router.replace(pathname, { locale: lang });
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative font-mont">

      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 h-[40px] rounded-[5px] bg-[#0A1E34] border-[gray] border-[1px] text-white text-sm font-medium cursor-pointer"
      >
        <Globe size={16} />
        <span className="uppercase">{locale}</span>
      </button>
      
      <div
        className={`absolute right-0 mt-2 w-[120px] rounded-lg bg-white shadow-md transition-all duration-200 absolute z-10
        ${open ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible"}`}
      >
        <div
          onClick={() => changeLang("en")}
          className={`px-3 py-2 text-sm cursor-pointer hover:bg-gray-100 ${
            locale === "en" ? "font-semibold" : ""
          }`}
        >
          English
        </div>

        <div
          onClick={() => changeLang("ru")}
          className={`px-3 py-2 text-sm cursor-pointer hover:bg-gray-100 ${
            locale === "ru" ? "font-semibold" : ""
          }`}
        >
          Русский
        </div>

        <div
          onClick={() => changeLang("tj")}
          className={`px-3 py-2 text-sm cursor-pointer hover:bg-gray-100 ${
            locale === "tj" ? "font-semibold" : ""
          }`}
        >
          Тоҷикӣ
        </div>
      </div>
    </div>
  );
}