"use client";

import { useTranslations } from "next-intl";
import { Scale } from "lucide-react";

const Codes = () => {
  const t = useTranslations("Articles");

  const articles = [
    {
      title: t("title1"),
      desc: t("desc1"),
      fine: t("fine1"),
    },
    {
      title: t("title2"),
      desc: t("desc2"),
      fine: t("fine2"),
    },
    {
      title: t("title3"),
      desc: t("desc3"),
      fine: t("fine3"),
    },
    {
      title: t("title4"),
      desc: t("desc4"),
      fine: t("fine4"),
    },
    {
      title: t("title5"),
      desc: t("desc5"),
      fine: t("fine5"),
    },
  ];

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-10 font-mont flex flex-col gap-10">
      
      
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-semibold">{t("code")}</h1>
        <p className="text-lg font-medium">{t("title")}</p>
        <p className="text-gray-600 max-w-[800px]">
          {t("description")}
        </p>
      </div>

      <div className="hidden md:grid grid-cols-3 text-md text-gray-400 px-3">
        <span>{t("article")}</span>
        <span>{t("subtitle")}</span>
        <span>{t("punishment")}</span>
      </div>

      <div className="flex flex-col gap-4">
        {articles.map((item, index) => (
          <div
            key={index}
            className="border rounded-xl p-5 grid grid-cols-1 md:grid-cols-3 gap-4 bg-white"
          >

            <div className="font-medium text-blue-600">
              {item.title}
            </div>

            <div className="text-gray-700 text-sm leading-relaxed">
              {item.desc}
            </div>

            <div className="text-red-500 font-semibold sm:ml-5">
              {item.fine}
              <p className="text-gray-600 font-normal">
                {t("fineDesc")}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-5 bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-sm text-gray-700">
        <Scale className="w-20 h-20 sm:w-5 sm:h-5 text-yellow-600 mt-0.5" />
        <p>{t("note")}</p>
      </div>
    </div>
  );
};

export default Codes;