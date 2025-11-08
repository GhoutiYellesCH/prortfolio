import { Handler } from '@netlify/functions';

const handler: Handler = async (event, context) => {
    // Only respond to GET requests
    if (event.httpMethod !== 'GET') {
        return {
            statusCode: 405,
            body: JSON.stringify({ message: 'Method not allowed' })
        };
    }

    // Check if all required environment variables are set
    const requiredEnvVars = [
        'MONGODB_URI',
        'MONGODB_DB',
        'JWT_SECRET',
        'SENDGRID_API_KEY',
        'CONTACT_EMAIL',
        'SENDGRID_VERIFIED_SENDER'
    ];

    const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);

    if (missingVars.length > 0) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'Missing environment variables',
                missing: missingVars
            })
        };
    }

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'All environment variables are set',
            variables: {
                mongodb: process.env.MONGODB_URI ? 'Set (hidden)' : 'Not set',
                database: process.env.MONGODB_DB,
                jwt: process.env.JWT_SECRET ? 'Set (hidden)' : 'Not set',
                sendgrid: process.env.SENDGRID_API_KEY ? 'Set (hidden)' : 'Not set',
                contact: process.env.CONTACT_EMAIL ? 'Set (hidden)' : 'Not set',
                sender: process.env.SENDGRID_VERIFIED_SENDER ? 'Set (hidden)' : 'Not set'
            }
        })
    };
};

export { handler };