import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './login.css';

const LoginComponent = () => {
  const [isLogin, setIsLogin] = useState(false); 
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors }, watch, reset } = useForm();

  const onSubmit = (data) => {
    if (!isLogin) {

      setRegisteredUsers([...registeredUsers, { 
        username: data.username, 
        password: data.password 
      }]);
      alert('Registration successful! Please login.');
      setIsLogin(true); 
      reset();
    } else {
      // Login logic
      const user = registeredUsers.find(
        (user) => 
          user.username === data.username && 
          user.password === data.password
      );
      
      if (user) {
        alert('Login successful! Redirecting to home...');
        navigate('/');  
      } else {
        alert('Invalid credentials! Please try again.');
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>{isLogin ? 'Login' : 'Register'}</h2>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              {...register('username', {
                required: 'Username is required',
                minLength: {
                  value: 3,
                  message: 'Username must be at least 3 characters',
                },
                maxLength: {
                  value: 20,
                  message: 'Username must be less than 20 characters',
                },
              })}
            />
            {errors.username && <span className="error">{errors.username.message}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters',
                },
              })}
            />
            {errors.password && <span className="error">{errors.password.message}</span>}
          </div>

          {!isLogin && (
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                id="confirmPassword"
                type="password"
                {...register('confirmPassword', {
                  required: 'Please confirm your password',
                  validate: (value) =>
                    value === watch('password') || 'Passwords do not match',
                })}
              />
              {errors.confirmPassword && (
                <span className="error">{errors.confirmPassword.message}</span>
              )}
            </div>
          )}

          <button type="submit" className="submit-btn">
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>

        <div className="toggle-form">
          {isLogin ? (
            <p>
              Don't have an account?{' '}
              <button 
                type="button"
                onClick={() => setIsLogin(false)} 
                className="toggle-btn"
              >
                Register
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <button 
                type="button"
                onClick={() => setIsLogin(true)} 
                className="toggle-btn"
              >
                Login
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;