import i18next from "i18next";
import zod from "zod";
import { zodI18nMap } from "zod-i18n-map";
// Import your language translation files
import translation from "zod-i18n-map/locales/pt/zod.json";

// lng and resources key depend on your locale.
i18next.init({
	lng: "pt",
	resources: {
		pt: { zod: translation },
	},
});

zod.setErrorMap(zodI18nMap);
