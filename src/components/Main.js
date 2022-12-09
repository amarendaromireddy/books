
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import AuthorDetails from './AuthorDetails';

function App() {
    let [authorData, setAuthorData] = useState({})
    useEffect(() => {
        axios
      .get('https://s3.amazonaws.com/api-fun/books.json')
      .then(response => setAuthorData(response.data.data));
    },[])
   console.log('main',authorData)
  return (
    <>
      <AuthorDetails author={authorData}/>
    </>
  );
}

export default App;
