import type { Message } from '../types/message'

export const fetchMessages = async (): Promise<Message[]> => {
  const response = await fetch('http://localhost:3000/api/v1/messages', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer super-secret-doodle-token',
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
};