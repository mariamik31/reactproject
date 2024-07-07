import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import englistLocales from "./en.json";
import georgianLocales from "./ka.json"




i18n.use(initReactI18next).init({
    lng: "en",
    fallbackLng: "en",
    resources: {
        en: {
            translation: englistLocales,
         },
         ka: {
            translation: georgianLocales,
         }
    }
})