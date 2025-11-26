import React from 'react';
import { ChevronLeftIcon, PlusIcon } from '@heroicons/react/24/outline';


const DraftDocuments = () => {
  const documents = [
    {
      id: '00126',
      ref: 'D-25/005',
      date: '2025/11/13',
      subject: 'مسودة قرار بشأن تنظيم عملية الاكتتاب',
      sender: 'إدارة العمليات',
      type: 'قرار',
    },
  ];
  return (
    <div className="min-h-screen bg-[#F8FAFC] " dir="rtl">
      <div className="max-w-7xl mx-auto px-6 pt-10">
        {/* Breadcrumb and Title */}
        <div className="mb-8">
          <nav className="flex items-center text-[#98A2B3] text-sm mb-2">
            <span>الرئيسية</span>
            <span className="mx-1">/</span>
            <span>الأرشفة والتوزيع</span>
            <span className="mx-1">/</span>
            <span className="text-[#101828] font-bold">مسودات المستندات</span>
          </nav>
          <h1 className="text-4xl font-bold text-[#101828] mb-2">مسودات المستندات</h1>
          <div className="text-[#667085] text-base">قائمة المسودات المحفوظة - استئناف التحرير أو حذف المسودات</div>
        </div>

        {/* Actions and Filters */}
        <div className="bg-white border border-gray-200 rounded-xl px-6 py-5 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search input */}
            <div className="flex-1">
              <input
                placeholder="ابحث برقم المستند أو الموضوع أو المرسل..."
                className="h-9 rounded-md border border-gray-300 bg-white px-3 py-1 text-base shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
                type="text"
              />
            </div>
            {/* Custom select button (combobox style) */}
            <button type="button" role="combobox" aria-controls="radix-:r2R15:" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" className="flex h-9 items-center justify-between whitespace-nowrap rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-48">
              <span className="truncate pointer-events-none"></span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-4 w-4 opacity-50">
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
            {/* Hidden select for accessibility */}
            <select aria-hidden="true" tabIndex="-1" className="absolute w-px h-px p-0 m-[-1px] overflow-hidden clip-rect border-0 whitespace-nowrap"></select>
            {/* Action buttons */}
            <div className="flex gap-2">
              <a href="#" className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium border border-gray-300 bg-white shadow-sm hover:bg-gray-100 hover:text-blue-700 h-9 px-4 py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="ml-2 h-4 w-4">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
                العودة
              </a>
              <a href="#" className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium bg-blue-700 text-white shadow hover:bg-blue-800 h-9 px-4 py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="ml-2 h-4 w-4">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                مستند جديد
              </a>
            </div>
          </div>
          <div className="text-sm text-gray-500 mt-4">
            عدد النتائج: <span className="font-semibold text-gray-900">1</span> من <span className="font-semibold text-gray-900">1</span> مسودة
          </div>
        </div>

        {/* Table */}
        <div className="bg-white border border-[#EAECF0] rounded-xl overflow-hidden mb-8">
          <table className="min-w-full divide-y divide-[#EAECF0]">
            <thead className="bg-[#F9FAFB]">
              <tr>
                <th className="px-6 py-3 text-right text-xs font-medium text-[#667085]">رقم المستند</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-[#667085]">الرقم الإشاري</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-[#667085]">التاريخ</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-[#667085]">الموضوع</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-[#667085]">المرسل</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-[#667085]">النوع</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-[#667085]">الإجراءات</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-[#EAECF0]">
              {documents.map((doc) => (
                <tr key={doc.id}>
                  <td className="px-6 py-4 text-[#1976D2] font-medium text-sm">
                    {doc.id}
                  </td>
                  <td className="px-6 py-4 text-[#667085] text-sm">{doc.ref}</td>
                  <td className="px-6 py-4 text-[#667085] text-sm">{doc.date}</td>
                  <td className="px-6 py-4 text-[#101828] font-medium text-sm">{doc.subject}</td>
                  <td className="px-6 py-4 text-[#667085] text-sm">{doc.sender}</td>
                  <td className="px-6 py-4 text-[#667085] text-sm">{doc.type}</td>
                  <td className="px-6 py-4 text-sm">
                    <button className="text-gray-500 hover:text-gray-700">
                      <span className="sr-only">إجراءات</span>
                      <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="4" r="1.5" fill="currentColor"/><circle cx="10" cy="10" r="1.5" fill="currentColor"/><circle cx="10" cy="16" r="1.5" fill="currentColor"/></svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Quick Tip */}
        <div className="bg-gradient-to-r from-blue-100/40 to-blue-50/40 rounded-lg border border-blue-200 p-6 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-right">
              <h3 className="font-semibold text-gray-900 mb-1">نصيحة سريعة</h3>
              <p className="text-sm text-gray-500">يمكنك استئناف تحرير أي مسودة بالنقر على زر "تحرير" أو حذف المسودات التي لم تعد بحاجة إليها.</p>
            </div>
            <a href="#" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-300 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-white shadow-sm hover:bg-blue-100 hover:text-blue-700 h-9 px-4 py-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-4 w-4" aria-hidden="true">
                <rect width="20" height="5" x="2" y="3" rx="1"></rect>
                <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"></path>
                <path d="M10 12h4"></path>
              </svg>
              الأرشفة والتوزيع
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DraftDocuments;
