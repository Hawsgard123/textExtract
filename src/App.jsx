import './App.css';
import { useState } from 'react';
import { textExtractApi, imageUploadApi } from './api';

export default function App() {
  const [image, setImage] = useState(null);
  const [text, setText] = useState('Extracted text will be displayed here.');

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];

    console.log(file);

    const result = await imageUploadApi(file);
    console.log('After API call', result);

    if (result) {
      setImage(result.data.secure_url);
      console.log(result.data.secure_url);
    } else setImage('Error uploading the image');
  };

  const handleApiCall = async () => {
    const result = await textExtractApi(image);

    if (result.status === 'True') {
      const output = result.message.data.data.text;
      if(output === null) 
          setText("No text present in the image.");
      else
          setText(output);
    } else {
      setText('Server Side Error');
    }
  };

  return (
    <main className="flex flex-col items-center justify-center bg-white">
      <h1 className="text-[4rem] text-bold font-mono p-8">TextExtract</h1>
      <input type="file" onChange={handleImageUpload} />

      {/*Boxes for showing input and output*/}
      <div className="flex flex-row items-center justify-center w-full mt-16">
        {/*Input*/}
        <div className="w-1/2 border border-2 mx-32 p-4">
          {image === null ? (
            <p>No image uploaded yet.</p>
          ) : (
            <img src={image} loading="lazy" />
          )}
        </div>
        {/*Processing Button*/}
        <div className="p-4 border border-4 border-black rounded-[10rem]">
          <button onClick={handleApiCall}>Convert</button>
        </div>
        {/*Output*/}
        <div className="w-1/2 border border-2 mx-32 p-4">{text}</div>
      </div>
    </main>
  );
}
