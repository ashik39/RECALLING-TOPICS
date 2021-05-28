// import React from 'react';
// import { useMutation, QueryClient, QueryClientProvider } from 'react-query';
// import { useForm } from 'react-hook-form';

// const queryClient = new QueryClient();

// function UseMutation() {
//   //   const subdata = async (data) => {
//   //     const res = await fetch('');
//   //   };

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   //   const [mutate, { isLoading, isError, error }] = useMutation((data) => {
//   //     subdata(data);
//   //   });

//   const onSubmit = (data) => mutate(data);
//   return (
//     <div>
//       {isLoading ? (
//         <div>
//           <h2>Loadin please wait..</h2>
//         </div>
//       ) : (
//         <div className="FormField">
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <h2>REACT HOOK FORM</h2>
//             <br />
//             {isError && <h3>{error}</h3>}
//             <div>
//               <input
//                 className="form-control"
//                 type="text"
//                 name="firstName"
//                 placeholder="First Name"
//                 {...register('firstName', { required: '*First Name Required' })}
//               />
//             </div>
//             {errors.firstName && <h5>{errors.firstName.message}</h5>}
//             <br />
//             <button className="btn btn-primary" type="submit">
//               Submit
//             </button>
//           </form>
//         </div>
//       )}
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

// export default hof(UseMutation);
