import { httpClient } from '@/shared';
import { Label } from '@/entities/label';

export async function getLabels(): Promise<Label[]> {
  const response = await httpClient.get<Label[]>('http://localhost:3000/labels');

  return response.data;
}