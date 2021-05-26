import { useState } from 'react/cjs/react.development';
import './App.css';
import UseEffectMain from './UseEffect/UseEffectMain';

function App() {
  // const [parentData, setParentData] = useState();
  var parentData = 'PARENT DATA';
  const [fromchild, setFromChild] = useState('');
  const get = (data) => {
    setFromChild(data);
  };
  return (
    <div className="App">
      <div className="Content">
        <UseEffectMain parentData={parentData} toParent={get} />
      </div>
      <h1>Count From Child:{fromchild} </h1>
    </div>
  );
}

export default App;
