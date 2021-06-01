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
    try {
      console.log('ASYNC AWAIT');
      const res = await makeRequest('Goog');

      console.log('Response Recieved');
      const processedRes = await processRequest(res);
      console.log(processedRes);
    } catch (err) {
      console.log(err);
    }
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
