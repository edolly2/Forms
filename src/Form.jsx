import { useState } from 'react';
import FormButton from './FormButton';
import FormInput from './FormInput';

const Form = () => {
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    password: '',
    message: '',
  });

  const inputs = [
    {
      id: 1,
      name: 'fullName',
      type: 'text',
      placeholder: 'Enter Full Name',
      label: 'Full Name:',
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'Example@email.com',
      label: 'Email:',
    },
    {
      id: 3,
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      label: 'Password:',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      {inputs.map((input) => (
        <FormInput
          key={input.id}
          {...input}
          value={values[input.name]}
          onChange={handleChange}
        />
      ))}
      <div className='form-control'>
        <textarea></textarea>
      </div>
      <div className='form-control'>
        <FormButton type='submit' className='form-btn' text='Submit' />
      </div>
    </form>
  );
};

export default Form;
