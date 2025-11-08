import { Handler } from '@netlify/functions';
import * as sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

const handler: Handler = async (event, context) => {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ message: 'Method not allowed' })
        };
    }

    try {
        const { name, email, message } = JSON.parse(event.body || '{}');

        // Validate inputs
        if (!name || !email || !message) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: 'Missing required fields' })
            };
        }

        const toEmail = process.env.CONTACT_EMAIL;
        const fromEmail = process.env.SENDGRID_VERIFIED_SENDER;

        if (!toEmail || !fromEmail) {
            return {
                statusCode: 500,
                body: JSON.stringify({ message: 'Email configuration error: CONTACT_EMAIL or SENDGRID_VERIFIED_SENDER is missing.' })
            };
        }

        const msg = {
            to: toEmail, // Your email address
            from: fromEmail, // Your verified sender
            subject: `Portfolio Contact: ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            html: `
                <h3>New Contact Form Submission</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `
        };

        await sgMail.send(msg);

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Email sent successfully' })
        };
    } catch (error) {
        console.error('Error sending email:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error sending email' })
        };
    }
};

export { handler };