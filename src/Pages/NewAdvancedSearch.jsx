import React from 'react';
import { FiSearch, FiCalendar, FiRefreshCw, FiArrowRight } from 'react-icons/fi';

const NewAdvancedSearch = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen" dir="rtl">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <nav className="flex items-center text-sm text-gray-500 mb-2">
            <a href="#" className="hover:text-gray-700">الرئيسية</a>
            <span className="mx-2 text-gray-400">&rsaquo;</span>
            <a href="#" className="hover:text-gray-700">البحث المتقدم</a>
            <span className="mx-2 text-gray-400">&rsaquo;</span>
            <span className="font-semibold text-gray-800">نموذج البحث</span>
          </nav>
          <h1 className="text-3xl font-bold text-gray-900">نموذج البحث المتقدم</h1>
          <p className="text-gray-600 mt-1">ابحث عن المستندات باستخدام معايير متعددة مثل رقم المستند والتاريخ والموضوع والمرسل ونوع المستند.</p>
        </div>

        {/* Search Form */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center text-lg font-semibold text-gray-900 mb-6">
            <FiSearch className="ml-2 text-gray-500" />
            <h3>معايير البحث</h3>
          </div>
          <p className="text-sm text-gray-600 -mt-4 mb-6">أدخل معايير البحث المطلوبة للعثور على المستندات.</p>

          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
              <div>
                <label htmlFor="doc-number" className="block text-sm font-medium text-gray-700 mb-1">رقم المستند</label>
                <input type="text" id="doc-number" className="w-full border-gray-300 rounded-lg shadow-sm    px-3 py-2   focus:ring-blue-500 focus:border-blue-500" placeholder="مثال: DOC-2024-001" />
              </div>
              <div>
                <label htmlFor="ref-number" className="block text-sm font-medium text-gray-700 mb-1">الرقم الإشاري</label>
                <input type="text" id="ref-number" className="w-full border-gray-300 rounded-lg shadow-sm  px-3 py-2  focus:ring-blue-500 focus:border-blue-500" placeholder="مثال: REF-2024-001" />
              </div>
              <div>
                <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">السنة</label>
                <input type="text" id="year" className="w-full border-gray-300 rounded-lg shadow-sm  px-3 py-2  focus:ring-blue-500 focus:border-blue-500" defaultValue="2025" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">الموضوع</label>
                <input type="text" id="subject" className="w-full border-gray-300 rounded-lg shadow-sm  px-3 py-2  focus:ring-blue-500 focus:border-blue-500" placeholder="ابحث عن موضوع المستند" />
              </div>
              <div>
                <label htmlFor="sender" className="block text-sm font-medium text-gray-700 mb-1">المرسل</label>
                <select id="sender" className="w-full border-gray-300 rounded-lg shadow-sm  px-3 py-2  focus:ring-blue-500 focus:border-blue-500">
                  <option>اختر المرسل</option>
                </select>
              </div>
              <div>
                <label htmlFor="recipient" className="block text-sm font-medium text-gray-700 mb-1">المرسل إليه</label>
                <select id="recipient" className="w-full border-gray-300 rounded-lg shadow-sm  px-3 py-2  focus:ring-blue-500 focus:border-blue-500">
                  <option>اختر المرسل إليه</option>
                </select>
              </div>
              <div>
                <label htmlFor="doc-type" className="block text-sm font-medium text-gray-700 mb-1">نوع المستند</label>
                <select id="doc-type" className="w-full border-gray-300 rounded-lg shadow-sm  px-3 py-2  focus:ring-blue-500 focus:border-blue-500">
                  <option>اختر نوع المستند</option>
                </select>
              </div>
              <div>
                <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">الحالة</label>
                <select id="status" className="w-full border-gray-300 rounded-lg shadow-sm  px-3 py-2  focus:ring-blue-500 focus:border-blue-500">
                  <option>اختر الحالة</option>
                </select>
              </div>
              <div className="relative">
                <label htmlFor="from-date" className="block text-sm font-medium text-gray-700 mb-1">من التاريخ</label>
                <input type="text" id="from-date" className="w-full border-gray-300 rounded-lg shadow-sm  px-3 py-2  focus:ring-blue-500 focus:border-blue-500 pl-10" placeholder="mm/dd/yyyy" />
                <FiCalendar className="absolute left-3 top-9 text-gray-400" />
              </div>
              <div className="relative">
                <label htmlFor="to-date" className="block text-sm font-medium text-gray-700 mb-1">إلى التاريخ</label>
                <input type="text" id="to-date" className="w-full border-gray-300 rounded-lg shadow-sm  px-3 py-2  focus:ring-blue-500 focus:border-blue-500 pl-10" placeholder="mm/dd/yyyy" />
                <FiCalendar className="absolute left-3 top-9 text-gray-400" />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">ملاحظات إضافية</label>
                <textarea id="notes" rows="4" className="w-full border-gray-300 rounded-lg shadow-sm  px-3 py-2  focus:ring-blue-500 focus:border-blue-500" placeholder="أضف أي ملاحظات إضافية للبحث"></textarea>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-end space-x-4 space-x-reverse">
              <button type="button" className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                <FiRefreshCw className="ml-2" />
                إعادة تعيين
              </button>
              <button type="button" className="flex items-center justify-center px-4 py-2 border border-transparent rounded-lg bg-white text-sm font-medium text-gray-700 hover:bg-gray-100">
                <FiArrowRight className="ml-2" />
                العودة
              </button>
              <button type="submit" className="flex items-center justify-center px-6 py-2 border border-transparent rounded-lg shadow-sm  px-3 py-2  text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
                <FiSearch className="ml-2" />
                بحث
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewAdvancedSearch;
