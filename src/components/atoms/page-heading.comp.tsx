import { useTranslation } from "react-i18next";

function PageHeading() {
  const { t } = useTranslation();
  return <p>{t("home.page")}</p>;
}

export default PageHeading;
