# Removing old database
rm ./database.db

# Create test user
echo "Creating user"
curl -v \
  -X POST http://localhost:8000/signup \
  -H "Content-Type: application/json" \
  -d '{
    "username": "alice",
    "password": "secret"
  }'

# Login with test user
echo "Logging in"
curl -v \
  -X POST http://localhost:8000/login \
  -H "Content-Type: application/json" \
  -d '{
    "username": "alice",
    "password": "secret"
  }'

# Make inference call

# TODO: Write this test case.
