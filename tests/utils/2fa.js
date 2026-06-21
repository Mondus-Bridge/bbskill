import speakeasy from 'speakeasy';

export function generate2FACode(secret) {
  return speakeasy.totp({
    secret: secret,
    encoding: 'base32',
  });
}

module.exports = { generate2FACode };
