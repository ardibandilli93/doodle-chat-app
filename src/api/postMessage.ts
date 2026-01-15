import type { Message } from '../types/message'

export const postMessage = async (payload: { author: string; message: string }): Promise<Message> => {
  const response = await fetch('http://localhost:3000/api/v1/messages', {
    method: 'POST',
    headers: {
      Authorization: 'Bearer super-secret-doodle-token',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      author: payload.author,
      message: payload.message,
    }),
  });
  const data = await response.json();
  return data;  
};
