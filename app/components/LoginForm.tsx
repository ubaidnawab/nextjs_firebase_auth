import { useState } from 'react';
import { useRouter } from 'next/navigation';
// import { auth } from '../utils/firebase'; // Import Firebase auth instance
import  { auth } from '../../lib/firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState('ubaidsheikh.91@gmail.com');
  const [password, setPassword] = useState('Welcome@1!');
  const [error, setError] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {   
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/dashboard'); // Redirect to dashboard on successful login
    } catch (error: any) {
      setError('invalid email or password'); // Set error message if login fails
    }
  };

  return (
    <div className="flex justify-center items-center flex-col">
    {/* Error popup */}
    {error && (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
        {error}
      </div>
    )}
  
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
      <div className="mb-8">
        <label htmlFor="email" className="block text-gray-700 text-lg font-semibold mb-2">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="shadow appearance-none border rounded w-full py-3 px-4 text-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-8">
        <label htmlFor="password" className="block text-gray-700 text-lg font-semibold mb-2">
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="shadow appearance-none border rounded w-full py-3 px-4 text-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded focus:outline-none focus:shadow-outline"
        >
          Sign In
        </button>
      </div>
    </form>
  </div>
  );
};

export default LoginForm;