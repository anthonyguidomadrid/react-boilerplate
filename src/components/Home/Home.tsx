import { Typography, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n/i18n";
import { MyComponent } from "../MyComponent";

export const Home: React.FC = () => {
  const { t } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      <Typography variant="h1" gutterBottom>
        {t("welcome")}
      </Typography>
      <Button color="primary" onClick={() => changeLanguage("en")}>
        English
      </Button>
      <Button color="secondary" onClick={() => changeLanguage("es")}>
        Español
      </Button>
      <MyComponent />
    </div>
  );
};
