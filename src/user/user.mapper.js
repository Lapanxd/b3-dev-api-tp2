export const mapToDto = item => ({
  id: item.id,
  username: item.email,
  password: item.password,
  role: item.role,
});

export const mapFromDto = dto => ({
  email: dto.username,
  password: dto.password,
  role: dto.role,
});

export const mapFromPartialDto = dto => ({
  ...dto.username !== undefined ? { email: dto.username } : undefined,
  ...dto.password !== undefined ? { password: dto.password } : undefined,
  ...dto.role !== undefined ? { role: dto.role } : undefined
});