import React, { useState, useEffect } from 'react';
import UseEffect from './UseEffect';
function UseEffectMain(props) {
  var data = props.parentData;
  const [fromchild, setFromChild] = useState('');
  const getData = (data) => {
    setFromChild(data);
  };
  useEffect(() => {
    props.toParent(fromchild);
  });
  return (
    <div>
      <UseEffect toChild={data} toParent={getData} />
    </div>
  );
}

export default UseEffectMain;
