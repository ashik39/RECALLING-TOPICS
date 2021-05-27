import React, { useState } from 'react';
import axios from 'axios';

function AsyncAwait() {
  const [data, setData] = useState();
  const API = 'https://jsonplaceholder.typicode.com/todos/1';
  const getData = async (e) => {
    try {
      var res = await axios.get(API);
      setData(res.data.title);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h1>Async and Await</h1>
      <button onClick={(e) => getData(e)}> Get Data</button>
      <h2>{data}</h2>
    </div>
  );
}

export default AsyncAwait;
