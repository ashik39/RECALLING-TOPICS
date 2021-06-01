// react-query fetch with axios
import React, { useState } from 'react';
import axios from 'axios';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useQuery } from 'react-query';
import Posts from './Posts';

const queryClient = new QueryClient();

function ReactQuery() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const pageNumbers = [];
  const { isLoading, error, data } = useQuery('fetchLuke', () =>
    axios('https://jsonplaceholder.typicode.com/posts')
  );

  console.log('data list', data);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (data) {
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    var currentPosts = data.data.slice(indexOfFirstPost, indexOfLastPost);

    for (let i = 1; i <= Math.ceil(data.data.length / postsPerPage); i++) {
      pageNumbers.push(i);
    }
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h1>My Pagination with query</h1>
      {error && <div>Something went wrong ...</div>}

      {data ? (
        <div>
          <Posts posts={currentPosts} loading={isLoading} />
          <div>
            <nav>
              <ul className="pagination">
                {pageNumbers.map((number) => (
                  <li key={number} className="page-item">
                    <a
                      onClick={() => paginate(number)}
                      href="!#"
                      className="page-link"
                    >
                      {number}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      ) : (
        <div>Loading ...</div>
      )}
      {/* {data && (
        
      )} */}
    </div>
  );
}

// Higher order function
const hof = (WrappedComponent) => {
  // Its job is to return a react component warpping the baby component
  return (props) => (
    <QueryClientProvider client={queryClient}>
      <WrappedComponent {...props} />
    </QueryClientProvider>
  );
};

export default hof(ReactQuery);

// import React, { useState } from 'react';
// import { useQuery, QueryClient, QueryClientProvider } from 'react-query';
// import axios from 'axios';
// import Posts from './Posts';
// import Pagination from './Pagination';

// const queryClient = new QueryClient();
// function QueryPagination() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [postsPerPage] = useState(10);

//   const { isLoading, error, data } = useQuery('fetchLuke', () =>
//     axios('http://swapi.dev/api/people/1/')
//   );
//   console.log(data);

//   const indexOfLastPost = currentPage * postsPerPage;
//   const indexOfFirstPost = indexOfLastPost - postsPerPage;
//   const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <div>
//       <div className="container mt-5">
//         {error && <h2>Error Occured</h2>}
//         <h1 className="text-primary mb-3">My Pagination Using Query</h1>
//         <Posts posts={currentPosts} loading={isLoading} />
//         <Pagination
//           postsPerPage={postsPerPage}
//           totalPosts={data.length}
//           paginate={paginate}
//         />
//       </div>
//     </div>
//   );
// }

// // Higher order function
// const hof = (WrappedComponent) => {
//   // Its job is to return a react component warpping the baby component
//   return (props) => (
//     <QueryClientProvider client={queryClient}>
//       <WrappedComponent {...props} />
//     </QueryClientProvider>
//   );
// };
// export default hof(QueryPagination);
