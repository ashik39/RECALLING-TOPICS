import React from 'react';

function PromiseOne() {
  const makeRequest = (location) => {
    return new Promise((resolve, reject) => {
      console.log('Making Request to ' + location);
      if (location === 'Google') {
        resolve('Google says Hi');
      } else {
        reject('We can only talk to Google');
      }
    });
  };

  const processRequest = (response) => {
    return new Promise((resolve, reject) => {
      console.log('Processing response');
      resolve('Extra information ' + response);
    });
  };

  const doWOrk = async () => {
    console.log('ASYNC AWAIT');
    const res = await makeRequest('Google');

    console.log('Response Recieved');
    const processedRes = await processRequest(res);
    console.log(processedRes);
  };

  doWOrk();
  return (
    <div>
      <h1>Async Await</h1>
      <h2>Open Console</h2>
    </div>
  );
}

export default PromiseOne;
