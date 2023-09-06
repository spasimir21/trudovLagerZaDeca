interface RegisterDto {
  fullname: string;
  email: string;
  password: string;
  phoneNumber: string;
  dateOfBirth: number;
  isMale: boolean;
}

const PHONE_REGEX = /^\+?[0-9]\d{1,20}$/;

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

function validateRegisterDto(dto: any): dto is RegisterDto {
  if (typeof dto !== 'object' || dto == null) return false;

  if (typeof dto.fullname !== 'string' || dto.fullname.length > 100) return false;
  if (typeof dto.email !== 'string' || dto.email.length > 100) return false;
  if (typeof dto.password !== 'string' || dto.password.length > 100) return false;

  if (typeof dto.phoneNumber !== 'string') return false;
  if (typeof dto.dateOfBirth !== 'number') return false;
  if (typeof dto.isMale !== 'boolean') return false;

  const emailMatch = dto.email.match(EMAIL_REGEX);
  if (emailMatch == null || emailMatch[0] != dto.email) return false;

  const phoneMatch = dto.phoneNumber.match(PHONE_REGEX);
  if (phoneMatch == null || phoneMatch[0] != dto.phoneNumber) return false;

  return true;
}

export { RegisterDto, validateRegisterDto };
