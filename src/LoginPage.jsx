import React, { useEffect, useState } from 'react';
import fetchData from './Api/FetchApi';


const LoginPage = () => {
  // Fetch the image and display it as a blob URL
  const [imgSrc, setImgSrc] = useState(null);
  const [imgLoading, setImgLoading] = useState(true);
  const [imgError, setImgError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [empNumber, setEmpNumber] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    let objectUrl;

    const url = 'https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/illustrations/auth/v2-login-light.png';
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.blob();
      })
      .then(blob => {
        if (!isMounted) return;
        objectUrl = URL.createObjectURL(blob);
        setImgSrc(objectUrl);
      })
      .catch(err => {
        if (isMounted) setImgError(err?.message || 'Failed to load image');
      })
      .finally(() => {
        if (isMounted) setImgLoading(false);
      });

    return () => {
      isMounted = false;
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, []);

  // Handle login form submit
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const body = {
        emp_number: empNumber,
        password: password,
       
      };
      const data = await fetchData('auth/login', 'POST', JSON.stringify(body));
      // Store token and user info in localStorage
      if (data && data.access_token) {
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('user', JSON.stringify(data.data));
        localStorage.setItem('permissions', JSON.stringify(data.data.permissions));
        // Optionally store roles or other info as needed
     
         window.open("/#admin/", "_blank");
      }
      console.log('Login successful:', data);
    } catch (error) {
      // Error toast handled in fetchData
      setError(error.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex  bg-gray-100 h-screen">
         <div className="w-full  lg:w-1/3   h-screen flex items-center justify-center">
        <div className="w-full p-6 bg-white  border h-full  items-center justify-center border-gray-200 shadow-sm">
          <div className="flex items-center my-6">
            <img src="./LogoCBL.svg (1).png" alt="Logo" className="object-contain w-full h-14" />
        
          
          </div>

          <h1 className="text-2xl font-semibold mb-1 text-gray-900">
            طلبات الصيانة وتطوير لمتابعة الاعمال يوميه في ادارة تقنية معلومات 👋🏻
          </h1>
          <p className="text-sm mb-6 text-gray-500">
            من فضلك قم بتسجيل الدخول إلى حسابك وابدأ استخدام نظام طلبات الصيانة وتطوير لمتابعة الاعمال يوميه في ادارة تقنية معلومات
          </p>

          <div className="bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm rounded-md p-3 mb-6">
            مثال: استخدم <b>00001</b> / <b>admin</b> لتسجيل الدخول.
          </div>


          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="emp_number" className="block text-sm font-medium text-gray-700">
               رقم الوظيفي
              </label>
              <div className="relative mt-1">
                <div className="absolute inset-y-0  pr-3 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <input
                  type="text"
                  id="emp_number"
                  name="emp_number"
                  value={empNumber}
                  onChange={e => setEmpNumber(e.target.value)}
                  className="block w-full pr-10 px-5 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                 كلمة المرور
                </label>
               
              </div>
              <div className="relative mt-1">
                <div className="absolute inset-y-0 pr-3 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="block w-full pr-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
                 <a href="#" className="text-xs text-indigo-600 hover:underline">نسيت كلمة المرور؟</a>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-gray-400 hover:text-gray-500">
                    {showPassword ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                    ) : (
                      <svg className="w-8 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7 1.274-4.057 5.064-7 9.542-7 .847 0 1.67.127 2.454.364m-6.08 3.446a3 3 0 114.243 4.243l-4.243-4.243zM19.5 19.5L4.5 4.5"></path></svg>
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <input type="checkbox" id="remember-me" name="remember-me" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
              <label htmlFor="remember-me" className="mx-2  block text-sm text-gray-900">تذكرني</label>
            </div>

            <div>
              <button type="submit" disabled={loading} className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                {loading ? 'تسجيل الدخول...' : 'تسجيل الدخول'}
              </button>
            </div>
            {
                error && (
                    <div className="text-red-600 text-sm mt-2">
                    {error}
                    </div>
                )
                }
            
          </form>

         

  
        
        </div>
      </div>
      {/* Left Pane */}
      <div className="hidden lg:flex items-center justify-center flex-1  text-black">
        <div className="max-w-md text-center">
          {imgLoading ? (
            <div className="w-[420px] h-[360px] rounded-lg animate-pulse mx-auto" />
          ) : imgError ? (
            <div className="text-sm text-red-600">Failed to load image</div>
          ) : (
            <img src={imgSrc} alt="Login Illustration" className="max-w-full h-auto mx-auto" />
          )}
        </div>
      </div>

      {/* Right Pane */}
   
    </div>
  );
};

export default LoginPage;
