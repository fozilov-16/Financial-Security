"use client";

import { useTranslations } from "next-intl";
import { ShieldCheck, AlertTriangle, Globe } from "lucide-react";

const AboutProject = () => {
  const t = useTranslations("About");

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-10 font-mont flex flex-col gap-12">

      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-semibold">{t("title")}</h1>
        <p className="text-gray-600 max-w-[800px]">
          {t("description")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="border rounded-xl p-6 flex flex-col gap-3 bg-white">
          <ShieldCheck className="w-6 h-6 text-green-600" />
          <h2 className="font-semibold text-lg">{t("card1Title")}</h2>
          <p className="text-gray-600 text-sm">{t("card1Desc")}</p>
        </div>

        <div className="border rounded-xl p-6 flex flex-col gap-3 bg-white">
          <AlertTriangle className="w-6 h-6 text-yellow-600" />
          <h2 className="font-semibold text-lg">{t("card2Title")}</h2>
          <p className="text-gray-600 text-sm">{t("card2Desc")}</p>
        </div>

        <div className="border rounded-xl p-6 flex flex-col gap-3 bg-white">
          <Globe className="w-6 h-6 text-blue-600" />
          <h2 className="font-semibold text-lg">{t("card3Title")}</h2>
          <p className="text-gray-600 text-sm">{t("card3Desc")}</p>
        </div>

      </div>
      
      <div className="bg-gray-50 border rounded-xl p-5 text-sm text-gray-600">
        {t("note")}
      </div>

    </div>
  );
};

export default AboutProject;