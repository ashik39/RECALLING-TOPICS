//import { useState } from 'react/cjs/react.development';
import './App.css';
// import UseEffectMain from './UseEffect/UseEffectMain';
// import PromiseMain from './Promise/PromiseMain';
// import AsyncAwait from './Promise/AsyncAwait';
//import ReactQueryMain from './ReactQuery/ReactQueryMain';
//import FormMain from './ReactHookForm/FormMain';
import App2 from './ReactQuery/UseMutation';
function App() {
  //Below are for promise,async and await work examples
  return (
    <div className="App">
      <div className="Content">
        {/* <PromiseMain /> */}
        {/* <AsyncAwait /> */}
        {/* <ReactQueryMain /> */}
        {/* <FormMain /> */}
        <App2 />
      </div>
    </div>
  );
  //Below are useEffect example works
  // const [parentData, setParentData] = useState();
  // var parentData = 'PARENT DATA';
  // const [fromchild, setFromChild] = useState('');
  // const get = (data) => {
  //   setFromChild(data);
  // };
  // return (
  //   <div className="App">
  //     <div className="Content">
  //       <UseEffectMain parentData={parentData} toParent={get} />
  //     </div>
  //     <h1>Count From Child:{fromchild} </h1>
  //   </div>
  // );
}

export default App;
