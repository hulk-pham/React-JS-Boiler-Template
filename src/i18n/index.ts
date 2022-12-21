import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./resources/en.lang";
import fr from "./resources/fr.lang";

export const defaultNS = "translation";

export const resources = {
  en,
  fr,
} as const;

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  ns: ["translation"],
  defaultNS,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
