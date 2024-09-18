import React, { useState } from 'react';
import { EyeIcon, EyeOffIcon, MailIcon, LockIcon, UserIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SignInSignUp = () => {
  const [isLogin, setIsLogin] = useState(true); // यह बताता है कि लॉगिन फॉर्म दिखाना है या साइन अप
  const [showPassword, setShowPassword] = useState(false); // पासवर्ड को दिखाने या छुपाने के लिए
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });

  const navigate = useNavigate(); // राउटिंग के लिए

  // फॉर्म सबमिट करने के लिए हैंडलर
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isLogin ? 'Login' : 'Signup', formData);

    // लॉगिन या साइनअप की प्रक्रिया के बाद रीडायरेक्ट करें
    navigate('/components/Management');
  };

  // फॉर्म के इनपुट बदलने पर डेटा अपडेट करने के लिए हैंडलर
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // फॉर्म टॉगल करना (लॉगिन से साइनअप और साइनअप से लॉगिन)
  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({ email: '', password: '', name: '' }); // फॉर्म रीसेट करें
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg max-w-sm w-full">
        <div className="bg-gray-800 text-white py-3 px-4 rounded-t-lg">
          <h2 className="text-xl font-semibold">{isLogin ? 'Login' : 'Sign Up'}</h2>
        </div>
        <form onSubmit={handleSubmit} className="p-6">
          {!isLogin && (
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <div className="relative">
                <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="pl-10 pr-3 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Your name"
                  required={!isLogin}
                />
              </div>
            </div>
          )}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <div className="relative">
              <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="pl-10 pr-3 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your email"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <div className="relative">
              <LockIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="pl-10 pr-10 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                {showPassword ? (
                  <EyeOffIcon className="text-gray-400" size={20} />
                ) : (
                  <EyeIcon className="text-gray-400" size={20} />
                )}
              </button>
            </div>
          </div>
          {isLogin && (
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                Remember me
              </label>
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
        <div className="text-center pb-6">
          <p className="text-sm text-gray-600">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              onClick={toggleForm}
              className="ml-1 text-green-600 hover:text-green-800 focus:outline-none"
            >
              {isLogin ? 'Create now!' : 'Login here'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInSignUp;
