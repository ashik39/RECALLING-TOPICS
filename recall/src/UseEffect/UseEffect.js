/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

function UseEffect(props) {
  var fromParent = props.toChild;
  const [renderState, setRanderState] = useState('POST');
  const [count, setCount] = useState(0);
  const [each, setEach] = useState();
  const [onMount, setOnMount] = useState('');
  const [onUpdate, setOnUpdate] = useState('');
  useEffect(() => {
    setEach('2 ) Each render :' + renderState);
  });

  useEffect(() => {
    setOnMount('1 ) *State Rendered Initially OnMount*');
  }, []);

  useEffect(() => {
    setOnUpdate('3 ) Renders Only when count state changes :' + count);
    props.toParent(count);
  }, [count]);

  return (
    <div>
      <h2>{onMount}</h2>
      <h3>Click below buttons to see change on each render</h3>
      <button className="Btn" onClick={() => setRanderState('POST')}>
        POST
      </button>
      <button className="Btn" onClick={() => setRanderState('USER')}>
        USER
      </button>
      <button className="Btn" onClick={() => setRanderState('COMMENTS')}>
        COMMENTS
      </button>
      <br />
      <h2>{each}</h2>
      <br />
      <button className="Btn" onClick={() => setCount(count + 1)}>
        Click to Render only when count changes
      </button>
      <h2>{onUpdate}</h2>
      <br />
      <h1>Data from APP parent : '{fromParent}'</h1>
    </div>
  );
}

export default UseEffect;
