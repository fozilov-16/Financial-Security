"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/src/i18n/navigation";

const Phone = () => {
  const t = useTranslations("Phone");
  const m = useTranslations("Methods");

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-10 font-mont flex flex-col gap-16">


      <div className="flex flex-col lg:flex-row items-center gap-10">


        <div className="flex-1 flex flex-col gap-8">

          <div className="flex flex-col gap-2">
            <h1 className="text-[26px] sm:text-4xl font-bold">
              3. {t("title")}
            </h1>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {t("desc")}
            </p>
          </div>

          <div className="bg-gray-50 border rounded-xl p-5 flex flex-col gap-2">
            <h2 className="text-xl font-semibold">{t("example")}</h2>
            <p className="text-gray-600 text-sm sm:text-base">
              {t("example1")}
            </p>
            <p className="text-gray-600 text-sm sm:text-base">
              {t("example2")}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold">{t("defence")}</h2>
            <ul className="flex flex-col gap-2 text-gray-700 text-sm sm:text-base">
              {t.raw("protect").map((item:any, index:any) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-blue-600">✔</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <h3 className="font-semibold text-blue-700 mb-1">
              {t("remember")}
            </h3>
            <p className="text-sm text-gray-700">
              {t("important")}
            </p>
          </div>

        </div>

        <div className="flex-1 flex justify-center">
          <img
            src="/phone.png"
            alt="phone"
            className="w-full max-w-[500px] rounded-xl"
          />
        </div>

      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-t pt-6">
        
        <Link
          href="/methods/sms"
          className="text-gray-600 hover:text-blue-600 text-sm"
        >
          ← 2. {m("sms")}
        </Link>

        <div className="flex gap-6 text-sm">
          <Link href="/methods/malware" className="text-gray-600 hover:text-blue-600">
            4. {m("malware")} →
          </Link>
        </div>

      </div>

    </div>
  );
};

export default Phone;