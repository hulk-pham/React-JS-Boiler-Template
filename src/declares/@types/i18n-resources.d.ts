import { resources, defaultNS } from "../../i18n";

import en from "i18n/resources/en.lang";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: typeof resources["en"];
  }
}

export type TranslationJsonType = typeof en;
