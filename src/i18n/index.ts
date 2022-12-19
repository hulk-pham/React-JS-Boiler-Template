import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./resources/en.lang";
import fr from "./resources/fr.lang";

i18n.use(initReactI18next).init({
  resources: {
    en,
    fr,
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
