curl -v \
  -X POST http://localhost:8000/login \
  -H "Content-Type: application/json" \
  -d '{
    "username": "alice",
    "password": "secret"
  }'
