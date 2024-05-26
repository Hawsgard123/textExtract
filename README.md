# TextExtract: Effortless Image-to-Text Conversion

Unlock the power of your images with textExtract, a cutting-edge tool designed to seamlessly extract text from any picture. Whether you have a photo of a document, a screenshot of an important message, or any image containing text, textExtract makes it incredibly easy to convert it into editable and searchable text. \
It uses [Real Time Lens Data](https://rapidapi.com/letscrape-6bRBa3QguO5/api/real-time-lens-data) API for extracting text from the image and it stores your image in Cloudinary.

## Installation

Step 1: Clone this repository into your local system
```bash
git clone https://github.com/Hawsgard123/textExtract.git
```
Step 2: Get the API keys from Cloudinary and Real Time Lens Data.
```env
VITE_RAPID_API_KEY=""
VITE_PRESET_KEY=""
VITE_CLOUDNAME=""
```

Step 3: Install necessary dependencies
```bash
npm install
```

Step 4: Run the application
```bash
npm run dev
```

## Tech Stack

1. React + Vite
2. Node Package Manager
3. RapidAPI
4. Cloudinary
5. Node.js
6. Tailwind CSS
7. Axios

## Implementation

App.jsx contains the major portion of the code. Here I am receiving the image file through <input/> tag and sending it to cloudinary server to store the image and receive a link. The link is then sent to API server through Axios and the extracted text is received.

## Problems I faced

The problem I faced majorly is during gaining the image URL for the uploaded image. For that, I had to go through the docs of cloudinary to store the images in the cloud folder and receive a link. After that, everything was smooth after I figured the issue solved it.

## What I learnt? 

Through this I learnt more about
1. Making API calls efficiently.
2. Handling edge cases
