import dotenv from 'dotenv';

export function loadEnv() {
  const env = process.env.TEST_ENV || 'dev'; // Default to 'dev' if not specified
  const result = dotenv.config({ path: `.env.${env}` });
  if (result.error) {
    throw result.error;
  }
}
