"use client";

import { Scale, TriangleAlert } from "lucide-react";
import { useTranslations } from "next-intl";

const Cases = () => {
  const t = useTranslations("Cases");

  const cases = [
    { key: "phishing", icon: "/mail.png" },
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

            <div className="w-[70px] h-[70px] flex items-center justify-center shrink-0">
              <img src={icon} alt={key} className="w-[60px] h-[60px]" />
            </div>

            <div className="flex flex-col gap-4 w-full">

              <h2 className="text-lg font-semibold">
                {t(`${key}.title`)}
              </h2>

              <p className="text-sm text-gray-500">
                {t(`${key}.desc`)}
              </p>

              <div>
                <p className="text-sm font-semibold text-red-500">
                  {t(`${key}.mistakeTitle`)}
                </p>
                <p className="text-sm text-gray-600">
                  {t(`${key}.mistake`)}
                </p>
              </div>
              
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

      <div className="flex items-center gap-5 bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-gray-800">
        <TriangleAlert className="w-20 h-20 sm:w-6 sm:h-6 text-red-600 mt-0.5" />
        <div className="flex flex-col">
          <h1>{t("remember")}</h1>
          <p>{t("note")}</p>
        </div>
      </div>

    </div>
  );
};

export default Cases;