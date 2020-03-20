import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './SignIn.scss';
import { useHistory } from 'react-router-dom';

function App() {
  const { register, handleSubmit, errors } = useForm()
  const [signInError, setSignInError] = useState(false)
  const history = useHistory();


  const onSubmit = data => {
      if (data.password === process.env.REACT_APP_PASSWORD) {
          localStorage.setItem('token', '12345678')
          setSignInError(false)
          history.push('/dashboard')
      } else {
            setSignInError(true)
      }
  }
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="username" name='username' ref={register({ required: true,  pattern: /^[a-z0-9_-]*$/igm })} />
      {errors.username && 'Username Is Required'}
      <input placeholder="password" type='password' name='password' ref={register({ pattern: /^(?=.*\d).{4,8}$/ })} />
      {errors.password && 'Must contain a letter and number and be between 4 and 8 characters'}
      <input type="submit" />
      {signInError && "Username or Password Don't match"}
    </form>
  );
}

export default App;