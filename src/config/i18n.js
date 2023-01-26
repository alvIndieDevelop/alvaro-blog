import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import translate from "../utils/translate";

const resources = translate;

i18next.use(initReactI18next).init({
  resources: resources,
  lng: "es",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
