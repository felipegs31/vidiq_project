type Environment = {
  isProduction: boolean;
  isDevelopment: boolean;
  apiUrl: string;
};

/**
 * We never want to access process.env directly throughout the code base
 * All variables must be accessed via this object
 */
export const environment: Environment = {
  apiUrl: process.env.REACT_APP_API_URL as string,
  isProduction: process.env.NODE_ENV === "production",
  isDevelopment: process.env.NODE_ENV === "development",
};
