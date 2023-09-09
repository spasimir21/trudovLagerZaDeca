import * as jose from 'jose';

const KEY = new TextEncoder().encode(
  'MaikaViNaucheteSeDaPisheteHubaviBibliotekiSHubavAPIIAkoPolzvateBuilderiSteQkoBavni'
);

function sign(data: any) {
  return new jose.SignJWT(data).setProtectedHeader({ alg: 'HS256' }).sign(KEY);
}

async function decode(token: string) {
  return (await jose.jwtVerify(token, KEY)).payload;
}

export { sign, decode };
