import * as dotenv from 'dotenv';
dotenv.config();

/**
 * Site configuration.
 */
export const SITE_URL = process.env.SITE_URL ?? 'http://localhost:3000';
export const SITE_TITLE = process.env.SITE_TITLE ?? 'undershows';

/**
 * Locale configuration.
 */
export const DEFAULT_LOCALE = process.env.DEFAULT_LOCALE ?? 'pt-BR';
export const SUPPORTED_LANGUAGES = ['pt-BR', 'en'];

/**
 * App configuration.
 */
export const DEFAULT_STATE = process.env.DEFAULT_STATE ?? 'SP';
