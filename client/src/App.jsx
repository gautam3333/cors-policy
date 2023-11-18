import { useEffect, useState } from 'react';

export default function App() {
  const [res, setRes] = useState('');

  const makeAPICall = async () => {
    try {
      const response = await fetch('http://localhost:3000/cors', {
        mode: 'cors',
      });
      const data = await response.json();
      console.log(data);
      setRes(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    makeAPICall();
  }, []);
  return (
    <>
      <h1>React CORS Guide</h1>
      {res && <h2>{res.message}</h2>}
    </>
  );
}
