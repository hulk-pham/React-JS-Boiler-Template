import { useTranslation } from "react-i18next";

function PageHeading() {
  const { t } = useTranslation();
  return <p>{t("Welcome to React")}</p>;
}

export default PageHeading;
