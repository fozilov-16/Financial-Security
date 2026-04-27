"use client";

import {
  AlertTriangle,
  CardSim,
  IdCard,
  ShieldAlert,
  Smartphone,
  TrendingUp,
  UserRoundKey,
  Wifi,
  Bug,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "antd";
import { Link } from "@/src/i18n/navigation";

const Methods = () => {
  const t = useTranslations("Methods");

  return (
    <div className="max-w-[1200px] mx-auto px-4 font-mont flex flex-col gap-10 mt-5">

      <h1 className="text-[24px] sm:text-[28px] font-bold text-center">
        {t("methods")}
      </h1>

      <div className="flex flex-col gap-4 pb-6">

        {/* 1 */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border border-gray-200 rounded-xl hover:shadow-md transition bg-white">

          <div className="flex items-start gap-4">
            <AlertTriangle className="text-blue-600 w-[30px] h-[30px]" />

            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 font-bold">
                <span>1.</span>
                <span>{t("phishing")}</span>
              </div>
              <p className="text-gray-600 text-sm">{t("descPhishing")}</p>
            </div>
          </div>

          <Link href="/methods/phishing" className="cursor-pointer">
            <Button type="primary" ghost className="w-full sm:w-auto">
              {t("details")}
            </Button>
          </Link>
        </div>

        {/* 2 */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border border-gray-200 rounded-xl hover:shadow-md transition bg-white">

          <div className="flex items-start gap-4">
            <CardSim className="text-blue-600 w-[30px] h-[30px]" />

            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 font-bold">
                <span>2.</span>
                <span>{t("sms")}</span>
              </div>
              <p className="text-gray-600 text-sm">{t("descSms")}</p>
            </div>
          </div>

          <Link href="/methods/sms" className="cursor-pointer">
            <Button type="primary" ghost className="w-full sm:w-auto">
              {t("details")}
            </Button>
          </Link>
        </div>

        {/* 3 */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border border-gray-200 rounded-xl hover:shadow-md transition bg-white">

          <div className="flex items-start gap-4">
            <Smartphone className="text-blue-600 w-[30px] h-[30px]" />

            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 font-bold">
                <span>3.</span>
                <span>{t("phone")}</span>
              </div>
              <p className="text-gray-600 text-sm">{t("descPhone")}</p>
            </div>
          </div>

          <Link href="/methods/phone" className="cursor-pointer">
            <Button type="primary" ghost className="w-full sm:w-auto">
              {t("details")}
            </Button>
          </Link>
        </div>

        {/* 4 */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border border-gray-200 rounded-xl hover:shadow-md transition bg-white">

          <div className="flex items-start gap-4">
            <Bug className="text-blue-600 w-[30px] h-[30px]" />

            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 font-bold">
                <span>4.</span>
                <span>{t("malware")}</span>
              </div>
              <p className="text-gray-600 text-sm">{t("descMalware")}</p>
            </div>
          </div>

          <Link href="/methods/malware" className="cursor-pointer">
            <Button type="primary" ghost className="w-full sm:w-auto">
              {t("details")}
            </Button>
          </Link>
        </div>

        {/* 5 */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border border-gray-200 rounded-xl hover:shadow-md transition bg-white">

          <div className="flex items-start gap-4">
            <IdCard className="text-blue-600 w-[30px] h-[30px]" />

            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 font-bold">
                <span>5.</span>
                <span>{t("skimming")}</span>
              </div>
              <p className="text-gray-600 text-sm">{t("descSkimming")}</p>
            </div>
          </div>

          <Link href="/methods/skimming" className="cursor-pointer">
            <Button type="primary" ghost className="w-full sm:w-auto">
              {t("details")}
            </Button>
          </Link>
        </div>

        {/* 6 */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border border-gray-200 rounded-xl hover:shadow-md transition bg-white">

          <div className="flex items-start gap-4">
            <UserRoundKey className="text-blue-600 w-[30px] h-[30px]" />

            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 font-bold">
                <span>6.</span>
                <span>{t("password")}</span>
              </div>
              <p className="text-gray-600 text-sm">{t("descPassword")}</p>
            </div>
          </div>

          <Link href="/methods/password" className="cursor-pointer">
            <Button type="primary" ghost className="w-full sm:w-auto">
              {t("details")}
            </Button>
          </Link>
        </div>

        {/* 7 */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border border-gray-200 rounded-xl hover:shadow-md transition bg-white">

          <div className="flex items-start gap-4">
            <Wifi className="text-blue-600 w-[30px] h-[30px]" />

            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 font-bold">
                <span>7.</span>
                <span>{t("fake")}</span>
              </div>
              <p className="text-gray-600 text-sm">{t("descFake")}</p>
            </div>
          </div>

          <Link href="/methods/wifi" className="cursor-pointer">
            <Button type="primary" ghost className="w-full sm:w-auto">
              {t("details")}
            </Button>
          </Link>
        </div>

        {/* 8 */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border border-gray-200 rounded-xl hover:shadow-md transition bg-white">

          <div className="flex items-start gap-4">
            <ShieldAlert className="text-blue-600 w-[30px] h-[30px]" />

            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 font-bold">
                <span>8.</span>
                <span>{t("social")}</span>
              </div>
              <p className="text-gray-600 text-sm">{t("descSocial")}</p>
            </div>
          </div>

          <Link href="/methods/social" className="cursor-pointer">
            <Button type="primary" ghost className="w-full sm:w-auto">
              {t("details")}
            </Button>
          </Link>
        </div>

        {/* 9 */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border border-gray-200 rounded-xl hover:shadow-md transition bg-white">

          <div className="flex items-start gap-4">
            <CardSim className="text-blue-600 w-[30px] h-[30px]" />

            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 font-bold">
                <span>9.</span>
                <span>{t("sim")}</span>
              </div>
              <p className="text-gray-600 text-sm">{t("descSim")}</p>
            </div>
          </div>

          <Link href="/methods/sim" className="cursor-pointer">
            <Button type="primary" ghost className="w-full sm:w-auto">
              {t("details")}
            </Button>
          </Link>
        </div>

        {/* 10 */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border border-gray-200 rounded-xl hover:shadow-md transition bg-white">

          <div className="flex items-start gap-4">
            <TrendingUp className="text-blue-600 w-[30px] h-[30px]" />

            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 font-bold">
                <span>10.</span>
                <span>{t("invest")}</span>
              </div>
              <p className="text-gray-600 text-sm">{t("descInvest")}</p>
            </div>
          </div>

          <Link href="/methods/invest" className="cursor-pointer">
            <Button type="primary" ghost className="w-full sm:w-auto">
              {t("details")}
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Methods;