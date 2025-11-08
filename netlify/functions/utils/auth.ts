import { verify } from 'jsonwebtoken';

export function getTokenFromEvent(event: any): string | null {
  const auth = event.headers?.authorization || event.headers?.Authorization;
  if (!auth) return null;
  if (auth.startsWith('Bearer ')) return auth.replace('Bearer ', '').trim();
  return auth.trim();
}

export function verifyToken(token: string) {
  const secret = process.env.JWT_SECRET || 'your-secret-key';
  try {
    const decoded = verify(token, secret as string);
    return decoded;
  } catch (err) {
    throw new Error('Invalid token');
  }
}

export default { getTokenFromEvent, verifyToken };
