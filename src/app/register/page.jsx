'use client';
import { FcGoogle } from 'react-icons/fc';
import { useState } from 'react';
import Link from 'next/link';
import { postUser } from '@/action/server/auth';
import { useRouter } from 'next/navigation';

const RegisterForm = ({ switchForm }) => {
  const router=useRouter()
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit =async (e) => {
    e.preventDefault();
   const result=await postUser(formData)
   if(result.acknowledged){
    alert('Register successfully')
    router.push("/login")
   }
  };

  const handleGoogleRegister = () => {
    console.log('Register with Google');
  };

  return (
   <div className='min-h-screen flex justify-center'>
     <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-full">
          Register
        </button>
      </form>

      <button
        onClick={handleGoogleRegister}
        className="btn btn-outline w-full mt-4 flex items-center justify-center gap-2"
      >
        <FcGoogle size={24} /> Register with Google
      </button>

      <p className="text-center mt-4">
        Already have an account?{' '}
        <Link href={'/login'}
          className="text-blue-500 cursor-pointer"
          onClick={switchForm}
        >
          Login
        </Link>
      </p>
    </div>
   </div>
  );
};

export default RegisterForm;
