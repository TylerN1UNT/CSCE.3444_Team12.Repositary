# Reimagine Backend

The Reimagine Backend is responsible for handling authentication & forwarding to inference servers.

Authentication is handled between the client and the server by using JWTs.

This server loads API keys from environment variables to prevent bundling them with the mobile app.

This server also provides a uniform API for our mobile app to call through

## Database

Reimagine's Backend uses SQLite for its database. This makes it extremely lightweight