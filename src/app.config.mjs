import * as dotenv from 'dotenv';
dotenv.config();

/**
 * Locale configuration.
 */
export const DEFAULT_LOCALE = process.env.DEFAULT_LOCALE ?? 'pt-BR'
export const SUPPORTED_LANGUAGES = ['pt-BR', 'en'];
