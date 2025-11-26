import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { ArrowDownIcon, CheckCircleIcon } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import {

  EllipsisVerticalIcon,

  EyeIcon,
  PencilIcon,
  ArrowTrendingUpIcon,
  TrashIcon,
 
} from "@heroicons/react/24/outline";
import { FiAlertTriangle, FiCheckCircle, FiChevronLeft, FiChevronRight, FiClock, FiDownload, FiFilter, FiPlus, FiRefreshCw, FiXCircle } from 'react-icons/fi';
const DailyTracking = () => {
  const [activeTab, setActiveTab] = useState('الكل');

  const documents = [
    { id: '00123', subject: 'طلب اعتماد موازنة تشغيلية للعام 2025', responsible: 'علي محمد الصالح', lastAction: '٢٠٢٥/١١/١٣', priority: 'عالية', status: 'مفتوح' },
    { id: '00124', subject: 'تقرير فحص أنظمة الدفع الإلكتروني للربع الثالث', responsible: 'فاطمة ناصر عبد الله', lastAction: '٢٠٢٥/١١/١٢', priority: 'متوسطة', status: 'مستلم' },
    { id: '00125', subject: 'مناقشة إجراءات مكافحة غسيل الأموال', responsible: 'خالد سعيد الصالح', lastAction: '٢٠٢٥/١١/١٠', priority: 'عالية', status: 'مفتوح' },
    { id: '00126', subject: 'مسودة قرار بشأن تنظيم عملية الاكتتاب', responsible: 'نورهان علي محمود', lastAction: '٢٠٢٥/١١/١٣', priority: 'منخفضة', status: 'مغلق' },
    { id: '00127', subject: 'تعديل سياسات الإقراض للمصارف التجارية', responsible: 'محمود أحمد الزاوي', lastAction: '٢٠٢٥/١١/١١', priority: 'متوسطة', status: 'مفتوح' },
    { id: '00128', subject: 'إجراءات تحديث قاعدة البيانات المركزية', responsible: 'سارة محمد الشريف', lastAction: '٢٠٢٥/١١/١٣', priority: 'عالية', status: 'مفتوح' },
    { id: '00129', subject: 'تقرير الامتثال التنظيمي للربع الثالث', responsible: 'عائشة علي الحسن', lastAction: '٢٠٢٥/١١/٠٩', priority: 'متوسطة', status: 'مستلم' },
    { id: '00130', subject: 'اتفاقية تعاون مع البنك الأوروبي للاستثمار', responsible: 'إبراهيم محمد الفيتوري', lastAction: '٢٠٢٥/١١/٠٨', priority: 'منخفضة', status: 'مغلق' },
    { id: '00131', subject: 'طلب تدريب موظفي الأقسام على الأنظمة الجديدة', responsible: 'ليلى محمود الجبالي', lastAction: '٢٠٢٥/١١/١٣', priority: 'عالية', status: 'مفتوح' },
    { id: '00132', subject: 'تقييم أداء الموظفين للسنة المالية 2024', responsible: 'محمد علي الرميحي', lastAction: '٧/١١/٢٠٢٥', priority: 'متوسطة', status: 'مستلم' },
  ];

  const getPriorityClass = (priority) => {
    switch (priority) {
      case 'عالية': return 'text-red-500';
      case 'متوسطة': return 'text-yellow-500';
      case 'منخفضة': return 'text-green-500';
      default: return 'text-gray-500';
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'مفdتوح':
        return 'bg-sky-500 hover:bg-sky-600 text-white';
      case 'مفتوح':
        return 'bg-teal-500 hover:bg-teal-600 text-white';
      case 'مغلق':
        return 'bg-gray-500 hover:bg-gray-600 text-white';
      default:
        return 'bg-gray-200 text-gray-800';
    }
  };
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
  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen" dir="rtl">
      <div className="max-w-screen-2xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">المتابعة اليومية</h1>
          <p className="text-gray-600 mt-1">عرض وتتبع المستندات اليومية</p>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-xl p-4 flex justify-between items-center">
                <div>
                    <p className="text-gray-600 text-sm">إجمالي المستندات المفتوحة</p>
                    <p className="text-3xl font-bold text-gray-900">7</p>
                </div>
                <div className="p-3 rounded-full bg-blue-100"><FiClock className="w-6 h-6 text-blue-600" /></div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4 flex justify-between items-center">
                <div>
                    <p className="text-gray-600 text-sm">المتابعات المستلمة</p>
                    <p className="text-3xl font-bold text-gray-900">4</p>
                </div>
                <div className="p-3 rounded-full bg-green-100"><FiCheckCircle className="w-6 h-6 text-green-600" /></div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4 flex justify-between items-center">
                <div>
                    <p className="text-gray-600 text-sm">المتابعات المغلقة</p>
                    <p className="text-3xl font-bold text-gray-900">4</p>
                </div>
                <div className="p-3 rounded-full bg-gray-200"><FiXCircle className="w-6 h-6 text-gray-600" /></div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4 flex justify-between items-center">
                <div>
                    <p className="text-gray-600 text-sm">ذات أولوية عالية</p>
                    <p className="text-3xl font-bold text-gray-900">5</p>
                </div>
                <div className="p-3 rounded-full bg-red-100"><FiAlertTriangle className="w-6 h-6 text-red-600" /></div>
            </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters */}
          <aside className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-xl p-6 sticky top-20">
              <h3 className="text-lg font-semibold mb-4">تصفية النتائج</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="search" className="text-sm font-medium text-gray-700">البحث</label>
                  <input type="text" id="search" placeholder="رقم المستند أو الموضوع..." className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm" />
                </div>
                <div>
                  <label htmlFor="status" className="text-sm font-medium text-gray-700">حالة المتابعة</label>
                  <select id="status" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm">
                    <option>الكل</option>
                    <option>مفتوح</option>
                    <option>مستلم</option>
                    <option>مغلق</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="priority" className="text-sm font-medium text-gray-700">الأولوية</label>
                  <select id="priority" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm">
                    <option>الكل</option>
                    <option>عالية</option>
                    <option>متوسطة</option>
                    <option>منخفضة</option>
                  </select>
                </div>
                <div className="pt-4 border-t">
                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold flex items-center justify-center hover:bg-blue-700">
                      <FiFilter className="w-4 h-4 ml-2" />
                      تطبيق الفلاتر
                    </button>
                    <button className="w-full mt-2 bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg font-semibold flex items-center justify-center hover:bg-gray-50">
                      <FiRefreshCw className="w-4 h-4 ml-2" />
                      إعادة تعيين
                    </button>
                </div>
              </div>
            </div>
          </aside>

          {/* Table */}
          <main className="lg:col-span-3">
            <div className="bg-white border border-gray-200 rounded-xl">
              <div className="p-6">
                <div className="mb-4">
                    <h3 className="text-lg font-bold text-gray-900">قائمة المتابعات</h3>
                    <p className="text-sm text-gray-500">إجمالي المتابعات: 15</p>
                </div>
                <div className="flex items-center justify-center bg-gray-100 rounded-lg p-1">
                    {['الكل (15)', 'مفتوح (7)', 'مستلم (4)', 'مغلق (4)'].map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab.split(' ')[0])}
                            className={`flex-1 px-4 py-1.5 text-sm font-semibold rounded-md ${activeTab === tab.split(' ')[0] ? 'bg-white shadow-sm text-gray-800' : 'text-gray-600 hover:bg-white/50'}`}
                        >
                            {tab}
                        </button>
                    ))}
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
                           {
                            getStatusClass(doc.status) && doc.status
                           }
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
              {/* Pagination */}
              <div className="p-4 flex justify-between items-center text-sm border-t">
                <div>
                  <span className="text-gray-600">الصفحة 1 من 2</span>
                </div>
                <div className="flex items-center gap-2">
                    <button className="p-2 rounded-md hover:bg-gray-100 flex items-center border border-gray-300 disabled:opacity-50" disabled>
                        <FiChevronLeft className="w-4 h-4" />
                        <span className="ml-1">السابق</span>
                    </button>
                    <button className="px-3 py-1 rounded-md bg-blue-600 text-white font-semibold border border-blue-600">1</button>
                    <button className="px-3 py-1 rounded-md hover:bg-gray-100 border border-gray-300">2</button>
                    <button className="p-2 rounded-md hover:bg-gray-100 flex items-center border border-gray-300">
                        <span className="mr-1">التالي</span>
                        <FiChevronRight className="w-4 h-4" />
                    </button>
                </div>
              </div>
            </div>
          </main>
        </div>
        
        {/* Footer Actions */}
        <footer className="mt-8 bg-white border border-gray-200 rounded-xl p-4 flex justify-between items-center">
          <div className="flex space-x-2 space-x-reverse">
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold flex items-center">
              <FiPlus className="w-4 h-4 ml-2" />
              إضافة متابعة
            </button>
            <button className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg font-semibold flex items-center">
              <FiDownload className="w-4 h-4 ml-2" />
              تصدير
            </button>
          </div>
          <div className="text-sm text-gray-500">
            يتم عرض 10 من 15 متابعة
          </div>
        </footer>

      </div>
    </div>
  );
};

export default DailyTracking;