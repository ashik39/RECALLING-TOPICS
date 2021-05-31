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

  makeRequest('Fb')
    .then((res) => {
      console.log('Response recieved');
      return processRequest(res);
    })
    .then((processedRes) => {
      console.log('Result', processedRes);
    })
    .catch((err) => {
      console.log(err);
    });
  return (
    <div>
      <h1>Promise</h1>
      <h2>Open Console</h2>
    </div>
  );
}

export default PromiseOne;
