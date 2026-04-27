"use client";

import { useTranslations } from "next-intl";

const Cases = () => {
  const t = useTranslations("Cases");

  const cases = [
    { key: "phishing", icon: "/danger.png" },
    { key: "investment", icon: "/invest.png" },
    { key: "call", icon: "/phone.png" },
    { key: "social", icon: "/social.png" },
    { key: "wifi", icon: "/wifi.png" }
  ];

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-10 font-mont flex flex-col gap-14">

      <div className="flex flex-col gap-3 max-w-[520px]">
        <h1 className="text-[28px] sm:text-[36px] font-bold">
          {t("title")}
        </h1>
        <p className="text-sm sm:text-base text-gray-500">
          {t("desc")}
        </p>
      </div>

      <div className="flex flex-col gap-5">
        {cases.map(({ key, icon }) => (
          <div
            key={key}
            className="w-full border border-gray-200 rounded-2xl p-5 flex flex-col lg:flex-row gap-6 bg-white hover:shadow-md transition"
          >

            {/* ICON */}
            <div className="w-[70px] h-[70px] flex items-center justify-center shrink-0">
              <img src={icon} alt={key} className="w-[60px] h-[60px]" />
            </div>

            {/* CONTENT */}
            <div className="flex flex-col gap-4 w-full">

              <h2 className="text-lg font-semibold">
                {t(`${key}.title`)}
              </h2>

              <p className="text-sm text-gray-500">
                {t(`${key}.desc`)}
              </p>

              {/* MISTAKE */}
              <div>
                <p className="text-sm font-semibold text-red-500">
                  {t(`${key}.mistakeTitle`)}
                </p>
                <p className="text-sm text-gray-600">
                  {t(`${key}.mistake`)}
                </p>
              </div>

              {/* AVOID */}
              <div>
                <p className="text-sm font-semibold text-green-600">
                  {t(`${key}.avoidTitle`)}
                </p>
                <p className="text-sm text-gray-600">
                  {t(`${key}.avoid`)}
                </p>
              </div>

            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default Cases;