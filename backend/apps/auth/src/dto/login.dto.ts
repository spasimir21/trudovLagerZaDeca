interface LoginDto {
  email: string;
  password: string;
}

function validateLoginDto(dto: any): dto is LoginDto {
  if (typeof dto !== 'object' || dto == null) return false;

  if (typeof dto.email !== 'string' || dto.email.length > 100) return false;
  if (typeof dto.password !== 'string' || dto.password.length > 100) return false;

  return true;
}

export { LoginDto, validateLoginDto };
