declare namespace NodeJS {
    interface ProcessEnv {
      JSONBIN_BIN_ID: string
      JSONBIN_X_MASTER_KEY: string
      JSONBIN_X_ACCESS_KEY: string
      // об этом чуть позже
      ID_TOKEN_SECRET: string
      ACCESS_TOKEN_SECRET: string
      COOKIE_NAME: string
    }
  }