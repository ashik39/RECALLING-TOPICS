import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function FormMain() {
  const [data, setData] = useState({
    firstName: '',
    phoneNumber: '',
    gender: '',
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const selectData = [
    {
      name: 'Male',
      value: 'Male',
    },
    {
      name: 'Female',
      value: 'Female',
    },
    {
      name: 'Others',
      value: 'Female',
    },
  ];
  const formSubmit = (data) => {
    setData({
      firstName: data.firstName,
      phoneNumber: data.phoneNumber,
      gender: data.gender,
    });
    console.log(data.firstName);
  };
  return (
    <div>
      <div className="FormField">
        <form onSubmit={handleSubmit(formSubmit)}>
          <h2>REACT HOOK FORM</h2>
          <br />
          <div>
            <input
              className="form-control"
              type="text"
              name="firstName"
              placeholder="First Name"
              {...register('firstName', { required: '*First Name Required' })}
            />
            {errors.firstName && <h5>{errors.firstName.message}</h5>}
            <br />
            <input
              className="form-control"
              type="number"
              name="phoneNumber"
              placeholder="Phone Number"
              {...register('phoneNumber', {
                required: '*Phone Number Required',
                minLength: {
                  value: 10,
                  message: 'Enter atleast 10 digit number',
                },
              })}
            />
            {errors.phoneNumber && <h5>{errors.phoneNumber.message}</h5>}
            <br />
            <select
              name="gender"
              className="form-select"
              {...register('gender', { required: '*Gender Required' })}
            >
              <option value="">Select</option>
              {selectData &&
                selectData.map((option) => (
                  <option value={option.value} key={option.value}>
                    {option.name}
                  </option>
                ))}
            </select>
            {errors.gender && <h5>{errors.gender.message}</h5>}
          </div>
          <br />

          <br />
          <br />
          <br />
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
        <br />
        {data && (
          <div className="data">
            <h2>First Name: {data.firstName}</h2>
            <h2>Phone Number: {data.phoneNumber}</h2>
            <h2>Gender: {data.gender}</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default FormMain;
