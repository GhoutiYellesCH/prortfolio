require('dotenv').config();

(async function(){
  const url = process.env.AUTH_TEST_URL || 'http://localhost:8888/.netlify/functions/auth/login';
  const body = { username: process.env.TEST_USERNAME || 'admin', password: process.env.TEST_PASSWORD || 'admin123' };

  try {
    // Node 18+ has global fetch
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    const text = await res.text();
    console.log('Status:', res.status);
    try {
      console.log('Body (parsed):', JSON.parse(text));
    } catch (e) {
      console.log('Body (raw):', text);
    }
  } catch (err) {
    console.error('Request error:', err.message);
    console.error(err);
  }
})();