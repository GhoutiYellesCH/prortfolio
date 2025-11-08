import { Handler } from '@netlify/functions';
import { sign, verify } from 'jsonwebtoken';
import { compare, hash } from 'bcryptjs';
import { connectToDatabase, closeConnection } from './utils/db';

const handler: Handler = async (event, context) => {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ message: 'Method not allowed' })
        };
    }

    try {
        const db = await connectToDatabase();
        const users = db.collection('users');

    // Handle different auth endpoints
    const path = (event.path || '').split('/').pop() || '';

        switch (path) {
            case 'login': {
                const { username, password } = JSON.parse(event.body || '{}');
                
                const user = await users.findOne({ username });
                if (!user) {
                    return {
                        statusCode: 401,
                        body: JSON.stringify({ message: 'Invalid credentials' })
                    };
                }

                const isValid = await compare(password, user.password);
                if (!isValid) {
                    return {
                        statusCode: 401,
                        body: JSON.stringify({ message: 'Invalid credentials' })
                    };
                }

                const token = sign(
                    { userId: user._id, username: user.username },
                    process.env.JWT_SECRET || 'your-secret-key',
                    { expiresIn: '1d' }
                );

                return {
                    statusCode: 200,
                    body: JSON.stringify({ token })
                };
            }

            case 'verify': {
                const token = event.headers.authorization?.replace('Bearer ', '');
                
                if (!token) {
                    return {
                        statusCode: 401,
                        body: JSON.stringify({ message: 'No token provided' })
                    };
                }

                try {
                    const decoded = verify(token, process.env.JWT_SECRET || 'your-secret-key');
                    return {
                        statusCode: 200,
                        body: JSON.stringify({ valid: true, user: decoded })
                    };
                } catch (error) {
                    return {
                        statusCode: 401,
                        body: JSON.stringify({ message: 'Invalid token' })
                    };
                }
            }

            default:
                return {
                    statusCode: 404,
                    body: JSON.stringify({ message: 'Route not found' })
                };
        }
    } catch (error) {
        console.error('Auth error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Internal server error' })
        };
    } finally {
        await closeConnection();
    }
};

export { handler };