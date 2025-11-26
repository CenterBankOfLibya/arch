import React from 'react';
import { Link } from 'react-router-dom';

const AdvancedDocumentSearch = () => {
  return (
    <main className="w-full flex-1  flex flex-col min-h-[calc(100vh-var(--header-height))]" >
      {/* Header */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-8">
          <nav className="flex  items-center gap-2 text-sm text-gray-400 mb-2">
            <a href="#" className="hover:text-gray-900 transition-colors">الرئيسية</a>
            <span className="mx-1">/</span>
            <span className="text-gray-900 font-medium">البحث المتقدم</span>
          </nav>
          <h1 className="text-4xl font-bold text-gray-900 text-right mb-2">البحث المتقدم عن المستندات</h1>
          <p className="text-gray-400 text-lg text-right">ابحث عن المستندات المؤرشفة باستخدام معايير متقدمة</p>
        </div>
      </div>
      {/* Content */}
      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* Quick Access */}
        <section className="mb-12">
          <div className="flex flex-col mb-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-1">الوصول السريع</h2>
            <p className="text-gray-400">اختر أحد الخيارات أدناه للبدء</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card: إدارة المستندات */}
            <a href="#" className="rounded-xl border border-gray-200 bg-[#FFFBEA] hover:shadow-lg transition-shadow cursor-pointer flex flex-row-reverse items-center justify-between p-6 min-h-[120px]">
              <div className="flex flex-col  flex-1">
                <span className="font-bold text-xl text-gray-900 mb-1">إدارة المستندات</span>
                <span className="text-gray-500 text-base">الانتقال إلى صفحة تسجيل وإدارة المستندات</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 7a2 2 0 012-2h3.28a2 2 0 011.42.59l.71.7A2 2 0 0012.83 7H19a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" /></svg>
            </a>
            {/* Card: جميع المستندات */}
            <a href="#" className="rounded-xl border border-gray-200 bg-[#E9FBF0] hover:shadow-lg transition-shadow cursor-pointer flex flex-row-reverse items-center justify-between p-6 min-h-[120px]">
              <div className="flex flex-col  flex-1">
                <span className="font-bold text-xl text-gray-900 mb-1">جميع المستندات</span>
                <span className="text-gray-500 text-base">عرض قائمة كاملة بجميع المستندات</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect width="20" height="14" x="2" y="5" rx="2" /><path strokeLinecap="round" strokeLinejoin="round" d="M7 7h10M7 11h10M7 15h6" /></svg>
            </a>
            {/* Card: الفلاتر المحفوظة */}
            <a href="#" className="rounded-xl border border-gray-200 bg-[#F7F3FF] hover:shadow-lg transition-shadow cursor-pointer flex flex-row-reverse items-center justify-between p-6 min-h-[120px]">
              <div className="flex flex-col  flex-1">
                <span className="font-bold text-xl text-gray-900 mb-1">الفلاتر المحفوظة</span>
                <span className="text-gray-500 text-base">عرض واستخدام الفلاتر المحفوظة سابقاً</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 21v-2a4 4 0 014-4h8a4 4 0 014 4v2" /><circle cx="12" cy="7" r="4" /></svg>
            </a>
            {/* Card: إنشاء بحث جديد */}
            <Link to="/admin/advanced-search/new" className="rounded-xl border border-gray-200 bg-[#F0F6FF] hover:shadow-lg transition-shadow cursor-pointer flex flex-row-reverse items-center justify-between p-6 min-h-[120px]">
              <div className="flex flex-col  flex-1">
                <span className="font-bold text-xl text-gray-900 mb-1">إنشاء بحث جديد</span>
                <span className="text-gray-500 text-base">ابدأ بحثاً جديداً باستخدام معايير متقدمة</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="11" cy="11" r="8" /><path d="m21 21-4.34-4.34" /></svg>
            </Link>
          </div>
        </section>
   
        {/* Recent Searches */}
        <section>
          <div className="flex flex-col mb-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-1">عمليات البحث الأخيرة</h2>
            <p className="text-gray-400">انقر على أي بحث سابق لإعادة تشغيله</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card: مستندات الموارد البشرية */}
            <div className="rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-shadow p-6 flex flex-col gap-2 min-h-[180px]">
              <div className="flex items-center gap-2 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                <span className="font-bold text-base text-gray-900">مستندات الموارد البشرية</span>
              </div>
              <div className="text-xs text-gray-500 mb-1">الموضوع: موارد بشرية</div>
              <div className="flex items-center justify-between text-sm mb-1">
                <span className="text-gray-500">عدد النتائج:</span>
                <span className="font-semibold text-gray-900">156</span>
              </div>
              <div className="text-xs text-gray-500 mb-2">٢٠٢٤/٣/٥</div>
              <button className="inline-flex items-center justify-center gap-2 rounded-md border border-gray-200 bg-white shadow-sm hover:bg-gray-100 h-8 px-3 text-xs font-medium text-gray-700 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></svg>
                إعادة البحث
              </button>
            </div>
            {/* Card: مستندات من الإدارة المالية */}
            <div className="rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-shadow p-6 flex flex-col gap-2 min-h-[180px]">
              <div className="flex items-center gap-2 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                <span className="font-bold text-base text-gray-900">مستندات من الإدارة المالية</span>
              </div>
              <div className="text-xs text-gray-500 mb-1">المرسل: الإدارة المالية</div>
              <div className="flex items-center justify-between text-sm mb-1">
                <span className="text-gray-500">عدد النتائج:</span>
                <span className="font-semibold text-gray-900">89</span>
              </div>
              <div className="text-xs text-gray-500 mb-2">٢٠٢٤/٣/١٠</div>
              <button className="inline-flex items-center justify-center gap-2 rounded-md border border-gray-200 bg-white shadow-sm hover:bg-gray-100 h-8 px-3 text-xs font-medium text-gray-700 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></svg>
                إعادة البحث
              </button>
            </div>
            {/* Card: مستندات الربع الأول 2024 */}
            <div className="rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-shadow p-6 flex flex-col gap-2 min-h-[180px]">
              <div className="flex items-center gap-2 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                <span className="font-bold text-base text-gray-900">مستندات الربع الأول 2024</span>
              </div>
              <div className="text-xs text-gray-500 mb-1">التاريخ: 01/01/2024 - 31/03/2024</div>
              <div className="flex items-center justify-between text-sm mb-1">
                <span className="text-gray-500">عدد النتائج:</span>
                <span className="font-semibold text-gray-900">245</span>
              </div>
              <div className="text-xs text-gray-500 mb-2">٢٠٢٤/٣/١٥</div>
              <button className="inline-flex items-center justify-center gap-2 rounded-md border border-gray-200 bg-white shadow-sm hover:bg-gray-100 h-8 px-3 text-xs font-medium text-gray-700 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></svg>
                إعادة البحث
              </button>
            </div>
          </div>
        </section>
             {/* Search Tips Section */}
        <section className="mb-12 mt-5">
          <h2 className="text-2xl font-bold text-gray-900 text-right mb-6">نصائح البحث</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card: استخدام المعايير المتعددة */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 flex flex-col  min-h-[140px]">
              <div className="flex items-center gap-2 mb-2">
             
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" /><path d="M9 18h6" /><path d="M10 22h4" /></svg>
               <span className="font-bold text-lg text-gray-900">استخدام المعايير المتعددة</span>  </div>
              <div className="text-gray-500 text-base text-right">يمكنك دمج عدة معايير بحث مثل التاريخ والموضوع والمرسل للحصول على نتائج أكثر دقة</div>
            </div>
            {/* Card: حفظ الفلاتر المفيدة */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 flex flex-col  min-h-[140px]">
              <div className="flex items-center gap-2 mb-2">
              
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" /><path d="M9 18h6" /><path d="M10 22h4" /></svg>
               <span className="font-bold text-lg text-gray-900">حفظ الفلاتر المفيدة</span> </div>
              <div className="text-gray-500 text-base text-right">احفظ معايير البحث التي تستخدمها بشكل متكرر لتوفير الوقت في عمليات البحث المستقبلية</div>
            </div>
            {/* Card: تصدير النتائج */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 flex flex-col  min-h-[140px]">
              <div className="flex items-center gap-2 mb-2">
              
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" /><path d="M9 18h6" /><path d="M10 22h4" /></svg>
               <span className="font-bold text-lg text-gray-900">تصدير النتائج</span> </div>
              <div className="text-gray-500 text-base text-right">يمكنك تصدير نتائج البحث إلى ملفات Excel أو PDF للمراجعة والمشاركة</div>
            </div>
            {/* Card: البحث المتقدم */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 flex flex-col  min-h-[140px]">
              <div className="flex items-center gap-2 mb-2">

                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" /><path d="M9 18h6" /><path d="M10 22h4" /></svg>
                              <span className="font-bold text-lg text-gray-900">البحث المتقدم</span></div>
              <div className="text-gray-500 text-base text-right">استخدم خيارات البحث المتقدمة للبحث عن كلمات محددة أو نطاقات تاريخية معينة</div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AdvancedDocumentSearch;
