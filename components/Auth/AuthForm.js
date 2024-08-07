import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import axios from 'axios';
import styled from 'styled-components';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.5rem;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #005bb5;
  }
`;

export default function AuthForm({ type }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`http://localhost:5000/api/users/${type}`, data);

      if (response.status === 201) { 
        toast.success('User created successfully!');
        setTimeout(() => {
          router.push('/signin'); 
        }); 
      }
      if (response.status === 200) { 
        toast.success('User logged in successfully');
        localStorage.setItem('token', response.data.token); // Save the token to localStorage
        setTimeout(() => {
          router.push('/'); 
        }); 
      }
    } catch (error) {
      console.error(`${type} failed:`, error);
      toast.error(`${type.charAt(0).toUpperCase() + type.slice(1)} failed. Please try again.`);
    }
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        {type === 'signup' && (
          <>
            <Input
              {...register('firstName', { required: 'First name is required' })}
              type="text"
              placeholder="First Name"
            />
            {errors.firstName && <p>{errors.firstName.message}</p>}

            <Input
              {...register('lastName', { required: 'Last name is required' })}
              type="text"
              placeholder="Last Name"
            />
            {errors.lastName && <p>{errors.lastName.message}</p>}
            
            <Input
              {...register('telephone', { required: false })}
              type="text"
              placeholder="Telephone (Optional)"
            />
          </>
        )}
        
        <Input
          {...register('email', { required: 'Email is required' })}
          type="email"
          placeholder="Email"
        />
        {errors.email && <p>{errors.email.message}</p>}
        
        <Input
          {...register('password', { required: 'Password is required' })}
          type="password"
          placeholder="Password"
        />
        {errors.password && <p>{errors.password.message}</p>}
        
        {type === 'signup' && (
          <Input
            {...register('confirmPassword', { required: 'Please confirm your password' })}
            type="password"
            placeholder="Confirm Password"
          />
        )}
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

        <Button type="submit">{type === 'signin' ? 'Sign In' : 'Sign Up'}</Button>
      </form>

      <ToastContainer />
    </FormContainer>
  );
}
