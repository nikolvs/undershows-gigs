import * as dotenv from 'dotenv';
dotenv.config();

/**
 * Site configuration.
 */
export const SITE_URL = process.env.SITE_URL;
export const SITE_TITLE = process.env.SITE_TITLE;

/**
 * Locale configuration.
 */
export const DEFAULT_LOCALE = process.env.DEFAULT_LOCALE ?? 'pt-BR';
export const SUPPORTED_LANGUAGES = ['pt-BR', 'en'];
