# Create test user
echo "Creating user"
curl \
  -X POST http://localhost:8000/signup \
  -H "Content-Type: application/json" \
  -d '{
    "username": "alice",
    "password": "secret"
  }'

echo ""