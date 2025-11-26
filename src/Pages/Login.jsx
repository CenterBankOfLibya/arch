import React, { useState } from 'react';
import { FiUser, FiLock } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

// You can replace this with your actual logo
const Logo = () => (
  <svg height="40" viewBox="0 0 300 80" xmlns="http://www.w3.org/2000/svg">
    <text x="10" y="60" fontFamily="Arial, sans-serif" fontSize="60" fontWeight="bold" fill="#FFFFFF">
      CBL
    </text>
    <text x="130" y="55" fontFamily="Arial, sans-serif" fontSize="20" fill="#E0E7FF">
      Central Bank of Libya
    </text>
  </svg>
);


const LoginPage = () => {
  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // For demonstration, navigate to dashboard on login.
    // Replace with your actual authentication logic.
    navigate('/dashboard');
  };

  const openPopup = (e) => {
    e.preventDefault();
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center" dir="rtl">
      <div className="w-full max-w-6xl mx-auto p-4">
        <div className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-2xl overflow-hidden">
          
          {/* Form Panel */}
          <div className="w-full lg:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
            <div className="max-w-md mx-auto w-full">
              <div className="mb-10">
                <img src="/LogoCBL.svg (1).png" alt="CBL Logo" className="mx-auto w-64" />
                <br></br>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">تسجيل الدخول</h1>
                <p className="text-gray-500">مرحباً بك، يرجى إدخال بياناتك للوصول إلى النظام.</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                    اسم المستخدم
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400">
                      <FiUser className="w-5 h-5" />
                    </span>
                    <input
                      id="username"
                      name="username"
                      type="text"
                      required
                      className="w-full p-4 pr-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-shadow"
                      placeholder="ادخل اسم المستخدم"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password"className="block text-sm font-medium text-gray-700 mb-2">
                    كلمة المرور
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400">
                      <FiLock className="w-5 h-5" />
                    </span>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      className="w-full p-4 pr-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-shadow"
                      placeholder="ادخل كلمة المرور"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded ml-2"
                    />
                    <label htmlFor="remember-me" className="text-sm text-gray-700">
                      تذكرني
                    </label>
                  </div>
                  <button type="button" onClick={openPopup} className="text-sm font-medium text-blue-600 hover:text-blue-700">
                    هل نسيت كلمة المرور؟
                  </button>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-sm text-lg font-semibold text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-transform transform hover:scale-105"
                  >
                    تسجيل الدخول
                  </button>
                </div>
              </form>
              
              <div className="mt-8 text-center">
                <p className="text-sm text-gray-500">
                  تواجه مشكلة؟ <button type="button" onClick={openPopup} className="font-medium text-blue-600 hover:underline">تواصل مع الدعم الفني</button>
                </p>
              </div>
            </div>
          </div>

          {/* Branding Panel */}
          <div className="hidden lg:flex w-1/2 items-center justify-center bg-gradient-to-br from-blue-700 to-blue-900 p-12 text-white relative overflow-hidden">
             <div className="absolute -top-16 -right-16 w-64 h-64 bg-blue-800 rounded-full opacity-30"></div>
             <div className="absolute -bottom-24 -left-10 w-80 h-80 bg-blue-800 rounded-full opacity-20"></div>
            <div className="z-10 text-center">
              <div className="mb-6">

              </div>
              <h2 className="text-2xl font-bold mb-4">نظام التسجيل  و المتابعة الإلكتروني</h2>
              <p className="text-blue-200 max-w-sm mx-auto">
                حلول متكاملة لإدارة وتتبع المستندات والمعاملات بكفاءة وأمان.
              </p>
            </div>
          </div>

        </div>
      </div>

      {isPopupOpen && (
        <div 
          className="fixed inset-0 bg-white  bg-opacity-20 flex items-center justify-center z-50 transition-opacity duration-300"
          onClick={closePopup}
        >
          <div 
            className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-sm mx-auto transform transition-all duration-300 scale-95"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">للتواصل والمساعدة</h3>
            <p className="text-gray-600 mb-6">
              في حال نسيان كلمة المرور أو وجود أي مشكلة فنية، يرجى التواصل مع:
              <br />
              <span className="font-bold text-blue-700 text-lg mt-2 inline-block">
                إدارة تقنية المعلومات
              </span>
            </p>
            <button
              onClick={closePopup}
              className="w-full bg-blue-700 text-white py-3 px-4 rounded-xl hover:bg-blue-800 transition-colors font-semibold"
            >
              إغلاق
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;