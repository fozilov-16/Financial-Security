"use client";

import { FileUser, FileVideoCamera, FileWarning, Folder, Info, ShieldAlert, ShieldCheck, TriangleAlert, User } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/src/i18n/navigation";

const MainSection = () => {
  const t = useTranslations("HomePage");

  return (
    <div className="max-w-[1200px] mx-auto px-4 font-mont flex flex-col gap-20">

      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 sm:mt-10">

        <div className="flex flex-col gap-6 text-center lg:text-left max-w-[500px]">
          <h1 className="text-[28px] sm:text-[34px] lg:text-[40px] font-bold leading-snug">
            {t("title")}
          </h1>

          <p className="text-gray-600 text-sm sm:text-base">
            {t("desc")}
          </p>

          <Link href="/methods" className="cursor-pointer">
            <button className="w-full sm:w-[220px] h-[50px] bg-blue-600 hover:bg-blue-700 transition text-white rounded-xl cursor-pointer">
            {t("methods")}
            </button>
          </Link>
        </div>

        <img
          src="/mainPage.png"
          alt="main"
          className="w-full max-w-[450px] sm:h-[300px] lg:max-w-[500px]"
        />
      </div>

      <div className="flex flex-col items-center gap-10">

        <h1 className="text-[26px] sm:text-[32px] lg:text-[36px] font-bold text-center">
          {t("title2")}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">


          <Card icon={<User />} title={t("10methods")} desc={t("descMethod")} />
          <Card icon={<ShieldCheck />} title={t("protect")} desc={t("descProtect")} />
          <Card icon={<FileVideoCamera />} title={t("cases")} desc={t("descCases")} />
          <Card icon={<Folder />} title={t("codes")} desc={t("descCodes")} />
          <Card icon={<Info />} title={t("about")} desc={t("descAbout")} />
          <Card icon={<FileUser />} title={t("myself")} desc={t("descMyself")} />

        </div>
      </div>

      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen border-t border-gray-200 h-[60px] sm:h-[70px] flex items-center justify-center px-4">
        <div className="flex items-center gap-2 sm:gap-3 text-center">
          <ShieldAlert className="w-5 h-5 sm:w-6 sm:h-6" />
          <h1 className="text-sm sm:text-base">{t("title3")}</h1>
        </div>
      </div>
    </div>
  );
};

export default MainSection;




const Card = ({ icon, title, desc }: any) => {
  return (
    <div className="p-4 rounded-2xl border border-gray-200 hover:shadow-lg transition flex flex-col gap-4 bg-white">

      <div className="text-blue-600 w-[40px] h-[40px]">
        {icon}
      </div>

      <h1 className="font-semibold text-lg">
        {title}
      </h1>

      <p className="text-gray-600 text-sm">
        {desc}
      </p>

    </div>
  );
};