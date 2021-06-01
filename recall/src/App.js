//import { useState } from 'react/cjs/react.development';
import './App.css';
// import UseEffectMain from './UseEffect/UseEffectMain';
// import PromiseMain from './Promise/PromiseMain';
// import AsyncAwait from './Promise/AsyncAwait';
//import ReactQueryMain from './ReactQuery/ReactQueryMain';
//import FormMain from './ReactHookForm/FormMain';
// import UseMutation from './ReactQuery/UseMutation';
// import PromiseOne from './Promise/PromiseOne';
// import AsyncAwaitOne from './Promise/AsyncAwaitOne';
// import PromiseMain from './Promise/PromiseMain';
// import AsyncAwait from './Promise/AsyncAwait';
// import PaginationMain from './Pagination/PaginationMain';
import QueryPagination from './Pagination/QueryPagination';
function App() {
  //Below are for promise,async and await work examples
  return (
    <div className="App">
      <div className="Content">
        {/* <PaginationMain /> */}
        {/* <PromiseMain /> */}
        {/* <AsyncAwait /> */}
        {/* <ReactQueryMain /> */}
        {/* <FormMain /> */}
        {/* <UseMutation /> */}
        {/* <PromiseOne /> */}
        {/* <h2>Same operation in async</h2>
        <AsyncAwaitOne /> */}
        <QueryPagination />
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
