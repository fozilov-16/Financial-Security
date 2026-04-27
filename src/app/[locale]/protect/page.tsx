"use client";

import { useTranslations } from "next-intl";

const Protect = () => {
  const t = useTranslations("SafetyTips");

  const Card = ({ icon, title, items }: any) => (
    <div className="w-full border border-gray-200 rounded-2xl p-5 flex flex-col lg:flex-row items-start gap-6 bg-white hover:shadow-md transition">

      {/* ICON */}
      <div className="shrink-0 w-[70px] h-[70px] flex items-center justify-center">
        {icon}
      </div>

      {/* CONTENT */}
      <div className="flex flex-col gap-3 w-full">

        <h1 className="text-lg sm:text-xl font-semibold">
          {title}
        </h1>

        <ul className="flex flex-col gap-2 text-gray-600 text-sm sm:text-base">
          {items.map((item: string, index: number) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-blue-600 mt-[2px]">✔</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-10 font-mont flex flex-col gap-14">

      {/* HERO */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left">

        <div className="flex flex-col gap-3 max-w-[520px]">
          <h1 className="text-[28px] sm:text-[36px] font-bold leading-tight">
            {t("title")}
          </h1>

          <p className="text-sm sm:text-base text-gray-500">
            {t("desc")}
          </p>
        </div>

        <img
          src="/mainPage.png"
          alt="img"
          className="w-full max-w-[380px] sm:max-w-[450px] lg:max-w-[500px]"
        />
      </div>

      {/* CARDS */}
      <div className="flex flex-col gap-5">

        <Card
          icon={<img src="/lock.png" className="w-[60px] h-[60px]" />}
          title={t("data.title")}
          items={t.raw("data.items")}
        />

        <Card
          icon={<img src="/computer.png" className="w-[60px] h-[60px]" />}
          title={t("devices.title")}
          items={t.raw("devices.items")}
        />

        <Card
          icon={<img src="/earth.png" className="w-[60px] h-[60px]" />}
          title={t("internet.title")}
          items={t.raw("internet.items")}
        />

        <Card
          icon={<img src="/people.png" className="w-[60px] h-[60px]" />}
          title={t("social.title")}
          items={t.raw("social.items")}
        />

        <Card
          icon={<img src="/card.png" className="w-[60px] h-[60px]" />}
          title={t("cards.title")}
          items={t.raw("cards.items")}
        />

      </div>
    </div>
  );
};

export default Protect;