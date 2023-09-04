interface Config {
  database: {
    url: string;
    user: string;
    password: string;
  };
  token: {
    secret: string;
    token_lifetime: string;
  };
  auth: {
    refresh_token_length: number;
    salt_rounds: number;
  };
}

export { Config };
