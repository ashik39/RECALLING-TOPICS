import React from 'react';

function PromiseMain() {
  function getCurrentTime() {
    // Get the current 'global' time from an API using Promise
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        var didSucceed = Math.random() >= 0.1;
        didSucceed ? resolve(new Date()) : reject('Error');
      }, 2000);
    });
  }

  getCurrentTime()
    .then((currentTime) => getCurrentTime())
    .then((currentTime) => {
      return 'It is now: ' + currentTime;
    })
    // this logs: "It is now: [current time]"
    .then((currentTimeMessage) => console.log(currentTimeMessage))
    .catch((err) => console.log('There was an error:' + err));
  return (
    <div>
      <h2>Promise</h2>
    </div>
  );
}

export default PromiseMain;
