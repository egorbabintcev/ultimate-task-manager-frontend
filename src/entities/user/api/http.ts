import { httpClient } from '@/shared';
import { TUser } from '@/entities/user';

export async function getUsers(): Promise<TUser[]> {
  const response = await httpClient.get<TUser[]>('http://localhost:3000/users');

  return response.data;
}