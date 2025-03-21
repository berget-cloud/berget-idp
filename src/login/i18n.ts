/* eslint-disable @typescript-eslint/no-unused-vars */
import { i18nBuilder } from "keycloakify/login";
import type { ThemeName } from "../kc.gen";

/** @see: https://docs.keycloakify.dev/features/i18n */
const { useI18n, ofTypeI18n } = i18nBuilder.withThemeName<ThemeName>().build();

type I18n = typeof ofTypeI18n;

// Define a simplified i18n interface for our components
export interface SimpleI18n {
    msg: (str: string) => string;
    msgStr: (str: string) => string;
}

// Export the I18n type for use in other files
export { useI18n, type I18n };
