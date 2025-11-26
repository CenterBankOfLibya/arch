import React, { useState } from 'react';
import { 
  FiCalendar, FiFilter, FiDownload, FiFileText, FiSave, 
  FiPlay, FiArrowLeft, FiSearch, FiPrinter
} from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const TrackingReports = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('new'); // 'new' or 'templates'

  // Mock data for the table
  const reportResults = [
    { id: '00123', subject: 'طلب اعتماد موازنة تشغيلية للعام 2025', status: 'مفتوح', priority: 'عالية', date: '2025-11-12', responsible: 'م. المحافظ' },
    { id: '00127', subject: 'مذكرة بخصوص تعديل اللائحة الداخلية', status: 'مستلم', priority: 'متوسطة', date: '2025-11-13', responsible: 'الإدارة القانونية' },
    { id: '00128', subject: 'استفسار حول أذونات صرف سابقة', status: 'قيد الانتظار', priority: 'عالية', date: '2025-11-09', responsible: 'الشؤون المالية' },
    { id: '00129', subject: 'ترشيح لحضور مؤتمر تطوير العمليات المصرفية', status: 'مفتوح', priority: 'منخفضة', date: '2025-11-13', responsible: 'إدارة العمليات' },
  ];

  // Mock data for templates
  const templates = [
    { id: 1, title: 'تقرير المتابعة الأسبوعي', created: '2025-11-10', range: 'آخر 7 أيام', filters: ['الحالة: مفتوح', 'الأولوية: عالية'] },
    { id: 2, title: 'تقرير المتابعة الشهري', created: '2025-11-05', range: 'آخر 30 يوم', filters: ['جميع الحالات'] },
    { id: 3, title: 'المتابعات المتأخرة', created: '2025-11-01', range: 'آخر 60 يوم', filters: ['الحالة: متأخر', 'الأولوية: عالية'] },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'مفتوح': return 'bg-[#0EA5E9] text-white';
      case 'مستلم': return 'bg-[#10B981] text-white';
      case 'قيد الانتظار': return 'bg-[#F97316] text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case 'عالية': return 'bg-[#EF4444] text-white';
      case 'متوسطة': return 'bg-[#1E3A8A] text-white';
      case 'منخفضة': return 'bg-[#F3F4F6] text-gray-800';
      default: return 'bg-gray-200 text-gray-800';
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen" dir="rtl">
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <span>لوحة القيادة</span>
            <span className="mx-2">/</span>
            <span>المتابعة</span>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">تقارير المتابعة</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">تقارير المتابعة</h1>
          <p className="text-gray-600">إنشاء تقارير متابعة مخصصة مع خيارات التصفية والتصدير</p>
        </div>
        <button 
          onClick={() => navigate('/admin/tracking/dashboard')}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
        >
          <FiArrowLeft className="w-4 h-4" />
          <span>العودة إلى لوحة المتابعة</span>
        </button>
      </div>

      {/* Main Tabs */}
      <div className="bg-white p-1 rounded-xl border border-gray-200 inline-flex w-full mb-6">
        <button 
          onClick={() => setActiveTab('new')}
          className={`flex-1 py-3 text-sm font-medium rounded-lg transition-all ${
            activeTab === 'new' ? 'bg-gray-100 text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          إنشاء تقرير جديد
        </button>
        <button 
          onClick={() => setActiveTab('templates')}
          className={`flex-1 py-3 text-sm font-medium rounded-lg transition-all ${
            activeTab === 'templates' ? 'bg-gray-100 text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          القوالب المحفوظة
        </button>
      </div>

      {/* Content */}
      {activeTab === 'new' ? (
        <div className="space-y-6">
          {/* Criteria Card */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-1">معايير التقرير</h3>
            <p className="text-sm text-gray-500 mb-6">حدد معايير البحث والتصفية للتقرير</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">تاريخ البداية</label>
                <div className="relative">
                  <input type="date" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" defaultValue="2025-01-11" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">تاريخ النهاية</label>
                <div className="relative">
                  <input type="date" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" defaultValue="2025-11-13" />
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">حالة المتابعة</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white">
                  <option>جميع الحالات</option>
                  <option>مفتوح</option>
                  <option>مغلق</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">مستوى الأولوية</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white">
                  <option>جميع الأولويات</option>
                  <option>عالية</option>
                  <option>متوسطة</option>
                  <option>منخفضة</option>
                </select>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 bg-blue-700 text-white py-3 px-4 rounded-lg hover:bg-blue-800 transition-colors flex items-center justify-center gap-2 font-medium">
                <FiFileText className="w-5 h-5" />
                إنشاء التقرير
              </button>
              <button className="flex-1 bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 font-medium">
                <FiSave className="w-5 h-5" />
                حفظ كقالب
              </button>
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900">نتائج التقرير</h3>
                <p className="text-sm text-gray-500 mt-1">عدد المتابعات: 4</p>
              </div>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 text-sm font-medium">
                  <FiFileText className="w-4 h-4" />
                  PDF تصدير
                </button>
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 text-sm font-medium">
                  <FiDownload className="w-4 h-4" />
                  Excel تصدير
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-right py-4 px-4 text-sm font-medium text-gray-500">المسؤول</th>
                    <th className="text-right py-4 px-4 text-sm font-medium text-gray-500">آخر إجراء</th>
                    <th className="text-right py-4 px-4 text-sm font-medium text-gray-500">الأولوية</th>
                    <th className="text-right py-4 px-4 text-sm font-medium text-gray-500">الحالة</th>
                    <th className="text-right py-4 px-4 text-sm font-medium text-gray-500">الموضوع</th>
                    <th className="text-right py-4 px-4 text-sm font-medium text-gray-500">رقم المستند</th>
                  </tr>
                </thead>
                <tbody>
                  {reportResults.map((item) => (
                    <tr key={item.id} className="border-b border-gray-50 last:border-0 hover:bg-gray-50">
                      <td className="py-4 px-4 text-sm text-gray-900">{item.responsible}</td>
                      <td className="py-4 px-4 text-sm text-gray-900 font-mono">{item.date}</td>
                      <td className="py-4 px-4">
                        <span className={`px-3 py-1 rounded text-xs font-medium ${getPriorityBadge(item.priority)}`}>
                          {item.priority}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <span className={`px-3 py-1 rounded text-xs font-medium ${getStatusBadge(item.status)}`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-900">{item.subject}</td>
                      <td className="py-4 px-4 text-sm text-gray-900 font-mono">{item.id}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <div key={template.id} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{template.title}</h3>
                <p className="text-sm text-gray-500">تم الإنشاء: {template.created}</p>
              </div>
              
              <div className="space-y-3 mb-8 flex-1">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="font-medium">نطاق التاريخ:</span>
                  <span>{template.range}</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="font-medium whitespace-nowrap">المرشحات:</span>
                  <div className="flex flex-wrap gap-2">
                    {template.filters.map((filter, idx) => (
                      <span key={idx} className="bg-gray-100 px-2 py-0.5 rounded text-xs border border-gray-200">
                        {filter}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <button className="w-full bg-blue-700 text-white py-2.5 rounded-lg hover:bg-blue-800 transition-colors flex items-center justify-center gap-2 font-medium">
                <FiPlay className="w-4 h-4" />
                تطبيق القالب
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TrackingReports;
