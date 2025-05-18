const { Client } = require('pg');

const client = new Client({
  host: 'db',         // same as your Docker Compose service name
  port: 5432,
  user: 'postgres',
  password: 'postgrespass',
  database: 'myappdb',
});

client.connect()
  .then(() => {
    console.log('✅ Connected to PostgreSQL!');
    return client.end();
  })
  .catch(err => {
    console.error('❌ Connection error:', err.stack);
  });