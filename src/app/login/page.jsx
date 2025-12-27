'use client';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';

const LoginForm = ({ switchForm }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted');
  };

  const handleGoogleLogin = () => {
    console.log('Login with Google');
  };

  return (
    
   <div className='max-h-screen md:py-7 flex justify-center'>
     <div className="w-full text-center  max-w-md bg-white p-8 rounded-lg shadow-2xl">
      <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text ">Password</span>
          </label>
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-full">
          Login
        </button>
      </form>

      <button
        onClick={handleGoogleLogin}
        className="btn btn-outline w-full mt-4 flex items-center justify-center gap-2"
      >
        <FcGoogle size={24} /> Login with Google
      </button>

      <p className="text-center mt-4">
        Don't have an account?{' '}
        <Link href={'/register'}
          className="text-blue-500 cursor-pointer"
          onClick={switchForm}
        >
          Register
        </Link>
      </p>
    </div>
   </div>
  );
};

export default LoginForm;
