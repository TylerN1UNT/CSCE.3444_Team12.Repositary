# Make inference call
echo "Test image edit"
IMG_CONTENT=$(base64 < data/modern-living-room.jpg | tr -d '\n') # Convert image to base64

curl \
  -X POST http://localhost:8000/inference \
  -H "Content-Type: application/json" \
  --data @- <<DATA 
  {
    "image_data": "$IMG_CONTENT",
    "image_type": "jpg",
    "user_prompt": "Reimagine this room in a victorian style. Add a couch"
  }

DATA