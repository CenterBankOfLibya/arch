import React, { useState, useRef, useEffect } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  FunnelIcon,
  PrinterIcon,
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  EllipsisVerticalIcon,
  ArrowDownIcon,
  ArrowPathIcon,
  EyeIcon,
  PencilIcon,
  CheckCircleIcon,
  ArrowTrendingUpIcon,
  TrashIcon,
 
} from "@heroicons/react/24/outline";

const documents = [
  {
    id: "00123",
    subject: "طلب اعتماد موازنة تشغيلية للعام 2025",
    sender: "الإدارة القانونية",
    date: "2025/11/1",
    status: "قيد المتابعة",
    statusColor: "bg-[#FFA726] text-white",
    dotColor: "bg-[#FFA726]",
  },
  {
    id: "00124",
    subject: "تقرير فحص أنظمة الدفع الإلكتروني الربع الثالث",
    sender: "المراجعة الداخلية",
    date: "2025/11/5",
    status: "محفوظ نهائياً",
    statusColor: "bg-[#43A047] text-white",
    dotColor: "bg-[#43A047]",
  },
  {
    id: "00125",
    subject: "مناقشة إجراءات مكافحة غسل الأموال",
    sender: "المصارف التجارية",
    date: "2025/11/10",
    status: "مسجل",
    statusColor: "bg-[#1976D2] text-white",
    dotColor: "bg-[#1976D2]",
  },
  {
    id: "00126",
    subject: "مسودة قرار بشأن تنظيم عملية الاكتتاب",
    sender: "إدارة العمليات",
    date: "2025/11/13",
    status: "مسودة",
    statusColor: "bg-[#E0E0E0] text-[#616161]",
    dotColor: "bg-[#E0E0E0]",
  },
];

const statuses = [
  "مسودة",
  "مسجل",
  "قيد المتابعة",
  "محفوظ نهائياً",
  "مؤرشف",
];

const ActionMenu = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  useEffect(() => {
    if (!open) return;
    function handleClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);
  return (
    <div className="relative" ref={menuRef}>
      <button
        className="flex items-center justify-center w-8 h-8 rounded hover:bg-gray-100"
        onClick={() => setOpen((v) => !v)}
        tabIndex={0}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <EllipsisVerticalIcon className="w-5 h-5 text-gray-500" />
      </button>
      {open && (
        <div className="absolute left-0 top-10 z-20 min-w-[180px] bg-white rounded-xl shadow-lg border border-[#EAECF0] py-2 px-0 text-right animate-fade-in" style={{boxShadow:'0 4px 24px 0 rgba(16,24,40,0.08)'}}>
          <ul className="space-y-1">
            <li>
              <button className="flex items-center w-full px-4 py-2 text-[#101828] text-sm hover:bg-[#F9FAFB] gap-2">
                <EyeIcon className="w-5 h-5 ml-2" />عرض التفاصيل
              </button>
            </li>
            <li>
              <button className="flex items-center w-full px-4 py-2 text-[#101828] text-sm hover:bg-[#F9FAFB] gap-2">
                <PencilIcon className="w-5 h-5 ml-2" />تعديل
              </button>
            </li>
            <li>
              <button className="flex items-center w-full px-4 py-2 text-[#101828] text-sm hover:bg-[#F9FAFB] gap-2">
                <CheckCircleIcon className="w-5 h-5 ml-2" />إنهاء المستند
              </button>
            </li>
            <li>
              <button className="flex items-center w-full px-4 py-2 text-[#101828] text-sm hover:bg-[#F9FAFB] gap-2">
                <ArrowTrendingUpIcon className="w-5 h-5 ml-2" />متابعة
              </button>
            </li>
            <li>
              <button className="flex items-center w-full px-4 py-2 text-[#101828] text-sm hover:bg-[#F9FAFB] gap-2">
                <ArrowDownTrayIcon className="w-5 h-5 ml-2" />تحميل
              </button>
            </li>
            <li>
              <button className="flex items-center w-full px-4 py-2 text-[#F04438] text-sm hover:bg-[#F9FAFB] gap-2">
                <TrashIcon className="w-5 h-5 ml-2 text-[#F04438]" />حذف
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
// Collapsible Sidebar as a separate component
function CollapsibleSidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <aside className="lg:col-span-1 bg-white rounded-xl border border-[#EAECF0] h-fit transition-all duration-300" style={{minWidth: sidebarOpen ? undefined : 0, width: sidebarOpen ? undefined : 0, padding: sidebarOpen ? '1.5rem' : '0', overflow: 'hidden'}}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-semibold tracking-tight text-lg text-[#101828]">الفلاتر</h2>
        <button
          className="rounded-full p-1 hover:bg-[#F2F4F7] focus:outline-none border border-[#EAECF0]"
          onClick={() => setSidebarOpen((v) => !v)}
          aria-label={sidebarOpen ? 'إغلاق الفلاتر' : 'فتح الفلاتر'}
        >
          <span className={sidebarOpen ? '' : 'rotate-180'} style={{display:'inline-block', transition:'transform 0.2s'}}>
            <ChevronLeftIcon className="w-5 h-5 text-[#1976D2]" />
          </span>
        </button>
      </div>
      {sidebarOpen && (
        <>
          <div className="space-y-6">
            <div>
              <label htmlFor="docNumber" className="text-sm font-medium text-[#344054] block mb-2">رقم المستند</label>
              <input type="text" id="docNumber" placeholder="ابحث برقم المستند..." className="flex h-9 w-full rounded-md border border-[#D0D5DD] bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-[#98A2B3] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1976D2] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm text-right" />
            </div>
            <div>
              <label className="text-sm font-medium text-[#344054] block mb-2">الحالة</label>
              <div className="space-y-2">
                {statuses.map((status) => (
                  <div key={status} className="flex items-center gap-2">
                    <input id={`status-${status}`} type="checkbox" className="h-4 w-4 rounded-sm border border-[#1976D2] shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1976D2]" />
                    <label htmlFor={`status-${status}`} className="text-sm font-normal text-[#344054] cursor-pointer">{status}</label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-[#344054] block mb-2">نطاق التاريخ</label>
              <div className="space-y-2">
                <div>
                  <label htmlFor="dateFrom" className="font-medium text-xs text-[#98A2B3] block mb-1">من</label>
                  <input type="date" id="dateFrom" className="flex h-9 w-full rounded-md border border-[#D0D5DD] bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-[#98A2B3] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1976D2] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" placeholder="mm/dd/yyyy" />
                </div>
                <div>
                  <label htmlFor="dateTo" className="font-medium text-xs text-[#98A2B3] block mb-1">إلى</label>
                  <input type="date" id="dateTo" className="flex h-9 w-full rounded-md border border-[#D0D5DD] bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-[#98A2B3] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1976D2] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" placeholder="mm/dd/yyyy" />
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-2 pt-4 border-t border-[#EAECF0] mt-6">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1976D2] disabled:pointer-events-none disabled:opacity-50 bg-[#1976D2] text-white shadow hover:bg-[#1565C0] h-9 px-4 py-2 w-full">
              <FunnelIcon className="w-4 h-4 ml-2" />تطبيق الفلاتر
            </button>
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1976D2] disabled:pointer-events-none disabled:opacity-50 border border-[#D0D5DD] bg-transparent shadow-sm hover:bg-[#F2F4F7] hover:text-[#1976D2] h-9 px-4 py-2 w-full">
              <ArrowPathIcon className="w-4 h-4 ml-2" />إعادة تعيين
            </button>
          </div>
        </>
      )}
    </aside>
  );
}
export default function DocumentList() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <div className="min-h-screen bg-[#F8FAFC] p-0 " dir="rtl">
      <div className="container mx-auto px-8 pt-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div className="space-y-1">
            <nav className="flex items-center gap-2 text-sm text-[#98A2B3]">
              <span>الرئيسية</span>
              <span className="mx-1">/</span>
              <span>قائمة المستندات</span>
            </nav>
            <h1 className="text-3xl font-bold text-[#101828]">قائمة المستندات</h1>
            <p className="text-[#667085] text-base">عرض وإدارة جميع المستندات المسجلة في النظام</p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          {sidebarOpen && <CollapsibleSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />}
          <main className={`${sidebarOpen ? 'lg:col-span-3' : 'lg:col-span-4'} space-y-6`}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-2">
                <div className="relative w-72">
                  <input type="text" placeholder="ابحث عن المستندات..." className="flex h-9 w-full rounded-md border border-[#D0D5DD] bg-transparent pr-10 pl-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-[#98A2B3] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1976D2] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm text-right" />
                  <MagnifyingGlassIcon className="w-4 h-4 text-[#98A2B3] absolute left-3 top-1/2 -translate-y-1/2" />
                </div>
               
                    <button
                onClick={()=>
               setSidebarOpen((v) => true)
                }
                 className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1976D2] disabled:pointer-events-none disabled:opacity-50 border border-[#D0D5DD] bg-transparent shadow-sm hover:bg-[#F2F4F7] hover:text-[#1976D2] h-9 px-4 py-2">
                  بحث 
                </button>
                {sidebarOpen ? null : (
                 <button
                onClick={()=>
               setSidebarOpen((v) => true)
                }
                 className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1976D2] disabled:pointer-events-none disabled:opacity-50 border border-[#D0D5DD] bg-transparent shadow-sm hover:bg-[#F2F4F7] hover:text-[#1976D2] h-9 px-4 py-2">
                  بحث متقدم
                </button>
                )}
              </div>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1976D2] disabled:pointer-events-none disabled:opacity-50 bg-[#1976D2] text-white shadow hover:bg-[#1565C0] h-9 px-4 py-2">
                <PlusIcon className="w-4 h-4 ml-2" />تسجيل مستند جديد
              </button>
            </div>
            <div className="bg-white rounded-xl border border-[#EAECF0] shadow-soft">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-4 border-b border-[#EAECF0]">
                <div className="text-sm text-[#667085]">إجمالي المستندات: <span className="font-semibold text-[#101828]">4</span></div>
                <div className="flex items-center gap-2">
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1976D2] disabled:pointer-events-none disabled:opacity-50 border border-[#D0D5DD] bg-transparent shadow-sm hover:bg-[#F2F4F7] hover:text-[#1976D2] h-8 rounded-md px-3 text-xs">
                    <ArrowDownTrayIcon className="w-4 h-4 ml-2" />تصدير
                  </button>
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1976D2] disabled:pointer-events-none disabled:opacity-50 border border-[#D0D5DD] bg-transparent shadow-sm hover:bg-[#F2F4F7] hover:text-[#1976D2] h-8 rounded-md px-3 text-xs">
                    <PrinterIcon className="w-4 h-4 ml-2" />طباعة
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full caption-bottom text-sm rtl text-[#344054]">
                  <thead className="bg-[#F9FAFB]">
                    <tr className="border-b border-[#EAECF0]">
                      <th className="h-10 px-2 align-middle font-medium text-[#98A2B3] w-12 text-center">
                        <input type="checkbox" className="h-4 w-4 rounded-sm border border-[#1976D2] shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1976D2]" />
                      </th>
                      <th className="h-10 px-2 align-middle font-medium text-[#98A2B3] text-right">
                        <div className="flex items-center gap-2">
                          رقم المستند
                          
                        </div>
                      </th>
                      <th className="h-10 px-2 align-middle font-medium text-[#98A2B3] text-right">الموضوع</th>
                      <th className="h-10 px-2 align-middle font-medium text-[#98A2B3] text-right">المرسل</th>
                      <th className="h-10 px-2 align-middle font-medium text-[#98A2B3] text-right">
                        <div className="flex items-center gap-2">
                          التاريخ
                          <ArrowDownIcon className="w-4 h-4" />
                        </div>
                      </th>
                      <th className="h-10 px-2 align-middle font-medium text-[#98A2B3] text-right">
                        <div className="flex items-center gap-2">
                          الحالة
                       
                        </div>
                      </th>
                      <th className="h-10 px-2 align-middle font-medium text-[#98A2B3] text-center w-12">الإجراءات</th>
                    </tr>
                  </thead>
                  <tbody>
                    {documents.map((doc) => (
                      <tr key={doc.id} className="border-b border-[#EAECF0] hover:bg-[#F9FAFB]">
                        <td className="p-2 align-middle text-center">
                          <input type="checkbox" className="h-4 w-4 rounded-sm border border-[#1976D2] shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1976D2]" />
                        </td>
                        <td className="p-2 align-middle font-medium text-[#101828] text-right">{doc.id}</td>
                        <td className="p-2 align-middle text-right max-w-xs truncate">{doc.subject}</td>
                        <td className="p-2 align-middle text-right text-sm text-[#667085]">{doc.sender}</td>
                        <td className="p-2 align-middle text-right text-sm">{doc.date}</td>
                        <td className="p-2 align-middle text-right">
                          <span className={`inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none border-transparent shadow ${doc.statusColor}`}> 
                            <span className={`inline-block w-2 h-2 rounded-full mr-2 ${doc.dotColor}`}></span>
                            {doc.status}
                          </span>
                        </td>
                        <td className="p-2 align-middle text-center">
                          <ActionMenu />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-4">
                <div className="text-sm text-[#667085]">
                  عرض <span className="font-semibold text-[#101828]">4</span> إلى <span className="font-semibold text-[#101828]">4</span> من <span className="font-semibold text-[#101828]">4</span> مستند
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <label htmlFor="pageSize" className="text-sm text-[#667085]">عدد الصفوف:</label>
                    <select id="pageSize" className="px-3 py-1 border border-[#EAECF0] rounded-md bg-white text-[#101828] text-sm">
                      <option value="10" selected>10</option>
                      <option value="25">25</option>
                      <option value="50">50</option>
                    </select>
                  </div>
                  <nav role="navigation" aria-label="pagination" className="mx-auto flex w-full justify-center">
                    <ul className="flex flex-row items-center gap-1">
                      <li>
                        <a className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1976D2] disabled:pointer-events-none disabled:opacity-50 border border-[#EAECF0] bg-transparent shadow-sm hover:bg-[#F2F4F7] hover:text-[#1976D2] h-9 px-4 py-2 gap-1 pl-2.5 pointer-events-none opacity-50" aria-label="Go to previous page">
                          <ChevronLeftIcon className="h-4 w-4" />
                          <span>Previous</span>
                        </a>
                      </li>
                      <li>
                        <a aria-current="page" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1976D2] disabled:pointer-events-none disabled:opacity-50 border border-[#D0D5DD] bg-transparent shadow-sm hover:bg-[#F2F4F7] hover:text-[#1976D2] h-9 w-9 cursor-pointer">1</a>
                      </li>
                      <li>
                        <a className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1976D2] disabled:pointer-events-none disabled:opacity-50 border border-[#EAECF0] bg-transparent shadow-sm hover:bg-[#F2F4F7] hover:text-[#1976D2] h-9 px-4 py-2 gap-1 pr-2.5 pointer-events-none opacity-50" aria-label="Go to next page">
                          <span>Next</span>
                          <ChevronRightIcon className="h-4 w-4" />
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
// ...existing code...
}