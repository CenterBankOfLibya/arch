import {
  MoreVertical,
  ChevronLast,
  ChevronFirst,
  LayoutDashboard,
  FileText,
  List,
  FilePlus,
  FilePenLine,
  Search,
  LineChart,
  LayoutGrid,
  CalendarDays,
  Calendar,
  BarChart3,
  FileStack,
  GitFork,
  ClipboardList,
  ShieldCheck,
  Users,
  Settings,
  ChevronDown,
} from "lucide-react";
import { useContext, createContext, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import React from "react";

const SidebarContext = createContext();

function SidebarDropdown({ icon, text, children }) {
  const { expanded } = useContext(SidebarContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className={`
          relative flex items-center my-1
          font-medium rounded-md cursor-pointer
          transition-colors group
          hover:bg-indigo-50 text-gray-600
          ${expanded ? "py-2 px-3" : "py-2 px-1 justify-center"}
          h-12
        `}
        onClick={() => setIsOpen(!isOpen)}
      >
        {icon}
        <span
          className={`overflow-hidden transition-all ${
            expanded ? "w-48 mx-3" : "w-0"
          }`}
        >
          {text}
        </span>
        {expanded && (
          <ChevronDown
            size={16}
            className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        )}
      </div>
      {isOpen && expanded && <div className="mx-7">{children}</div>}
    </div>
  );
}

export default function Sidebar({ children, open = false, onToggle }) {
  const expanded = open;
  const location = useLocation();
  const lang = "ar";
  const isRTL = lang === "ar";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside
      className={`fixed ${scrolled ? "top-0" : "top-20"} ${
        isRTL ? "right-0" : "left-0"
      } h-screen transition-all duration-300 z-30 ${
        expanded ? "w-76" : "w-16"
      }`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <h1
            className={`overflow-hidden transition-all font-bold text-lg ${
              expanded ? "w-full" : "w-0"
            }`}
          >
            القائمة الرئيسية
          </h1>
          <button
            onClick={onToggle}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {isRTL ? (
              !expanded ? <ChevronFirst /> : <ChevronLast />
            ) : (
              !expanded ? <ChevronLast /> : <ChevronFirst />
            )}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">
            <SidebarDropdown icon={<FileText size={20} />} text="إدارة المستندات">
             <SidebarItem
                text="لوحة التسجيل والمتابعة"
                to="/dashboard"
                active={location.pathname === "/dashboard"}
                icon={<LayoutGrid size={16} />}
              />
              <SidebarItem
                text="قائمة المستندات"
                to="/admin/documents"
                active={location.pathname === "/admin/documents"}
                icon={<List size={16} />}
              />
              <SidebarItem
                text="تسجيل مستند جديد"
                to="/admin/documents/add"
                active={location.pathname === "/admin/documents/add"}
                icon={<FilePlus size={16} />}
              />
              <SidebarItem
                text="المسودات"
                to="/admin/documents/drafts"
                active={location.pathname === "/admin/documents/drafts"}
                icon={<FilePenLine size={16} />}
              />
               <SidebarItem
              icon={<Search size={20} />}
              text="البحث المتقدم"
              to="/admin/advanced-search"
              active={location.pathname === "/admin/advanced-search"}
            />
            </SidebarDropdown>
           
            <SidebarDropdown icon={<LineChart size={20} />} text="المتابعة">
              <SidebarItem
                text="لوحة المتابعة"
                to="/admin/tracking/dashboard"
                active={location.pathname === "/admin/tracking/dashboard"}
                icon={<LayoutGrid size={16} />}
              />
              <SidebarItem
                text="المتابعة اليومية"
                to="/admin/tracking/daily"
                active={location.pathname === "/admin/tracking/daily"}
                icon={<CalendarDays size={16} />}
              />
              <SidebarItem
                text="المتابعة الأسبوعية"
                to="/admin/tracking/weekly"
                active={location.pathname === "/admin/tracking/weekly"}
                icon={<Calendar size={16} />}
              />
            </SidebarDropdown>
            <SidebarDropdown
              icon={<BarChart3 size={20} />}
              text="التقارير والإشراف"
            >
              <SidebarItem
                text="لوحة التقارير"
                to="/admin/reports/dashboard"
                active={location.pathname === "/admin/reports/dashboard"}
                icon={<LayoutDashboard size={16} />}
              />
              <SidebarItem
                text="قائمة التقارير"
                to="/admin/reports"
                active={location.pathname === "/admin/reports"}
                icon={<FileStack size={16} />}
              />
              <SidebarItem
                text="تقرير سير العمل"
                to="/admin/reports/workflow"
                active={location.pathname === "/admin/reports/workflow"}
                icon={<GitFork size={16} />}
              />
              <SidebarItem
                text="تقرير المتابعة"
                to="/admin/reports/tracking"
                active={location.pathname === "/admin/reports/tracking"}
                icon={<ClipboardList size={16} />}
              />
              <SidebarItem
                text="تقرير الصلاحيات"
                to="/admin/reports/permissions"
                active={location.pathname === "/admin/reports/permissions"}
                icon={<ShieldCheck size={16} />}
              />
            </SidebarDropdown>
            <SidebarItem
              icon={<Users size={20} />}
              text="إدارة المستخدمين"
              to="/admin/users"
              active={location.pathname.startsWith("/admin/users")}
            />
            <SidebarItem
              icon={<Settings size={20} />}
              text="الإعدادات"
              to="/admin/settings"
              active={location.pathname === "/admin/settings"}
            />
          </ul>
        </SidebarContext.Provider>

        <div className="border-t flex flex-col p-3">
          <div
            className={`
              flex flex-col items-center justify-center
              overflow-hidden transition-all ${
                expanded ? "w-52 mx-3" : "w-0"
              }
          `}
          >
            <div className="leading-4 text-center">
              <h4 className="font-semibold">نظام الأرشفة الإلكترونية</h4>
              <span className="text-xs text-gray-600">الإصدار 1.0.0</span>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, active, alert, to }) {
  const { expanded } = useContext(SidebarContext)
  
  return (
    <Link to={to || "#"} className="">
      <li
        className={`
          relative flex items-center my-1
          font-medium rounded-md cursor-pointer
          transition-colors group
          ${active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
          }
          ${expanded ? "py-2 px-3" : "py-2 px-1 justify-center"}
          h-12
        `}
        style={{
          minHeight: expanded ? "48px" : "48px",
          height: "48px",
        }}
      >
        {icon}
        <span
          className={`overflow-hidden transition-all ${
            expanded ? "w-52 mx-3" : "w-0"
          }`}
        >
          {text}
        </span>
        {alert && (
          <div
            className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
              expanded ? "" : "top-2"
            }`}
          />
        )}

        {!expanded && (
          <div
            className={`
              absolute left-full rounded-md px-2 py-1 ml-6
              bg-indigo-100 text-indigo-800 text-sm
              invisible opacity-20 -translate-x-3 transition-all
              group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
            `}
          >
            {text}
          </div>
        )}
      </li>
    </Link>
  )
}
<ul>
  {/* ...existing links... */}
  <li>
   
  </li>
  {/* ...existing links... */}
</ul>