// import './Login.css'
// import { useForm } from "react-hook-form";
// import { useState } from "react";
// import axios from "axios";

// const Auth = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const [isLogin, setIsLogin] = useState(true); // Toggle between login/signup

//   const apiBase = import.meta.env.VITE_BASE_URL;

//   const token = localStorage.getItem("token");


//   const onSubmit = async (data) => {
//     try {
//       const url = isLogin ? `${apiBase}login/` : `${apiBase}register/`;
//       const payload = {
//         username: data.username,
//         password: data.password,
//       };

//       const response = await axios.post(url, payload);
//       if (response.data.token) {
//         localStorage.setItem('token', response.data.token);
//         alert(isLogin ? "Login successful!" : "Registration successful!");
//       }
//     } catch (error) {
//       alert("Error: " + (error.response?.data?.error || "Something went wrong"));
//     }

//     const profile = await axios.get(`${apiBase}profile/`, {
//     headers: {
//       Authorization: `Token ${token}`,
//     },
//   });

//   };

//   return (
//     <div className="auth-page-container">
//       <div className="auth-header">
//         <h2 className="auth-title">
//           {isLogin ? 'Member Login' : 'Create Account'}
//         </h2>
//         <p className="auth-subtitle">
//           {isLogin
//             ? 'Sign in to access exclusive discounts'
//             : 'Join us to get started'}
//         </p>
//       </div>

//       <div className="auth-card">
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div className="auth-input-group">
//             {/* Always show name field for both */}
//             <div className="auth-field">
//               <label htmlFor="auth-name" className="auth-label">
//                 Name
//               </label>
//               <input
//                 id="auth-name"
//                 type="text"
//                 className="auth-input"
//                 {...register("username", { required: "Username is required!" })}
//               />
//               {errors.name && <span className="auth-error">{errors.name.message}</span>}
//             </div>

//             {/* Password field for both */}
//             <div className="auth-field">
//               <label htmlFor="auth-password" className="auth-label">
//                 Password
//               </label>
//               <input
//                 id="auth-password"
//                 type="password"
//                 className="auth-input"
//                 placeholder="••••••••"
//                 {...register("password", {
//                   required: "Password is required!",
//                   minLength: {
//                     value: 6,
//                     message: "Password must be at least 6 characters"
//                   }
//                 })}
//               />
//               {errors.password && <span className="auth-error">{errors.password.message}</span>}
//             </div>

//             {!isLogin && (
//               <div className="auth-field">
//                 <label htmlFor="auth-confirm-password" className="auth-label">
//                   Confirm Password
//                 </label>
//                 <input
//                   id="auth-confirm-password"
//                   type="password"
//                   className="auth-input"
//                   placeholder="••••••••"
//                   {...register("confirmPassword", {
//                     validate: value =>
//                       value === document.getElementById('auth-password').value ||
//                       "Passwords do not match"
//                   })}
//                 />
//                 {errors.confirmPassword && (
//                   <span className="auth-error">{errors.confirmPassword.message}</span>
//                 )}
//               </div>
//             )}
//           </div>

//           {isLogin && (
//             <div className="auth-options">
//               <div className="auth-remember">
//                 <input
//                   type="checkbox"
//                   id="auth-remember"
//                   className="auth-checkbox"
//                   {...register("remember")}
//                 />
//                 <label htmlFor="auth-remember" className="auth-remember-label">
//                   Remember me
//                 </label>
//               </div>
//               <button type="button" className="auth-forgot-link">
//                 Forgot password?
//               </button>
//             </div>
//           )}

//           <div className="auth-actions">
//             <button type="submit" className="auth-primary-btn">
//               {isLogin ? 'Sign In' : 'Register'}
//             </button>

//             <div className="auth-divider">
//               <span className="auth-divider-text">or</span>
//             </div>

//             <button
//               type="button"
//               className="auth-secondary-btn"
//               onClick={() => setIsLogin(!isLogin)}
//             >
//               {isLogin ? 'Create Account' : 'Already have an account? Login'}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Auth;