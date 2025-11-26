import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Bell, ChevronDown, User, LogOut, Settings } from "lucide-react";
// import logo from '/logo.png'; // Assuming logo is in public folder

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Your logout logic here
    console.log("Logging out...");
    navigate('/login');
  };

  const navLinks = [
    { name: "المستندات", path: "/documents" },
    { name: "المتابعة", path: "/tracking/daily" },
    { name: "التقارير", path: "/reports" },
    { name: "المستخدمين", path: "/admin/users" },
    { name: "الإعدادات", path: "/settings" },
  ];

  return (
    <header className="bg-white shadow-sm h-20 flex items-center px-6 justify-between border-b border-slate-200 relative z-30 ">
      {/* Left Side: Logo and Title */}
      <div className="flex items-center gap-3 ">
        {/* <img src={logo} alt="Logo" className="h-12 w-12" /> */}
        <div>
          <h1 className="text-lg font-bold text-gray-800">نظام الأرشفة الإلكترونية</h1>
          <p className="text-sm text-gray-500">مصرف ليبيا المركزي</p>
        </div>
      </div>

      {/* Center: Navigation */}
      <nav className="flex items-center gap-2">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 ${
                isActive
                  ? "bg-teal-500 text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-100"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>

      {/* Right Side: Actions and User Profile */}
      <div className="flex items-center gap-5">
        {/* Notification Bell */}
        <div className="relative">
          <Bell size={22} className="text-gray-600" />
          <div className="absolute -top-1 -right-2 bg-blue-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-md font-bold">
            3
          </div>
        </div>

        {/* User Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="flex items-center gap-3"
          >
            <img
              src="https://i.pravatar.cc/40?img=3" // Placeholder avatar
              alt="User"
              className="w-11 h-11 rounded-full border-2 border-gray-200"
            />
            <div className="text-right">
              <p className="font-semibold text-sm text-gray-800">أحمد محمد</p>
              <p className="text-xs text-gray-500">مسؤول النظام</p>
            </div>
            <ChevronDown size={18} className="text-gray-500" />
          </button>

          {/* Dropdown Menu */}
          {menuOpen && (
            <div 
              className="absolute left-0 mt-3 w-48 bg-white border rounded-lg shadow-xl z-40 text-right animate-fade-in"
              onMouseLeave={() => setMenuOpen(false)}
            >
              <Link
                to="/profile"
                className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 text-gray-700 text-sm"
                onClick={() => setMenuOpen(false)}
              >
                <User size={16} />
                <span>الملف الشخصي</span>
              </Link>
              <Link
                to="/settings"
                className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 text-gray-700 text-sm"
                onClick={() => setMenuOpen(false)}
              >
                <Settings size={16} />
                <span>الإعدادات</span>
              </Link>
              <div className="border-t my-1"></div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-3 w-full text-right px-4 py-2.5 hover:bg-gray-50 text-red-600 text-sm"
              >
                <LogOut size={16} />
                <span>تسجيل الخروج</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}