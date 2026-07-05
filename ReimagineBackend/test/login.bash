# Login with test user
echo "Logging in"
curl \
  -X POST http://localhost:8000/login \
  -H "Content-Type: application/json" \
  -d '{
    "username": "alice",
    "password": "secret"
  }'