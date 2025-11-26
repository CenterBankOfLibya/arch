import React, { useState } from 'react';
import { 
  FiFileText, FiUsers, FiBarChart2, FiActivity, FiShield, 
  FiDownload, FiChevronLeft 
} from 'react-icons/fi';

const reportsData = [
  {
    category: 'تقارير النظام',
    title: 'تقرير نشاط النظام',
    frequency: 'يومي',
    description: 'سجل شامل لجميع الأنشطة والأحداث داخل النظام، يتضمن معلومات عن تسجيل الدخول والتعديلات والتغييرات.',
    lastGenerated: '2025/11/20',
    formats: ['PDF', 'EXCEL', 'CSV'],
    icon: <FiActivity className="w-6 h-6 text-purple-600" />,
    color: 'purple'
  },
  {
    category: 'تقارير سير العمل',
    title: 'تقرير سير عمل المستندات',
    frequency: 'يومي',
    description: 'عرض تفصيلي لحالة المستندات ومراحل معالجتها. يمكن تصفية البيانات حسب التواريخ والأنواع والحالات المختلفة.',
    lastGenerated: '2025/11/20',
    formats: ['PDF', 'EXCEL'],
    icon: <FiFileText className="w-6 h-6 text-blue-600" />,
    color: 'blue'
  },
  {
    category: 'تقارير الصلاحيات',
    title: 'تقرير صلاحيات المستخدمين',
    frequency: 'أسبوعي',
    description: 'تقرير عن صلاحيات المستخدمين والأدوار المخصصة لهم. يعرض تفاصيل الوصول لكل مستخدم مع إمكانية التصدير والتدقيق.',
    lastGenerated: '2025/11/20',
    formats: ['PDF', 'EXCEL'],
    icon: <FiShield className="w-6 h-6 text-red-600" />,
    color: 'red'
  },
  {
    category: 'تقارير المتابعة',
    title: 'تقرير المتابعة',
    frequency: 'يومي',
    description: 'تقرير شامل عن أنشطة المتابعة والمستندات قيد الانتظار. يمكن تصفية البيانات حسب الفترة الزمنية وحالة المتابعة.',
    lastGenerated: '2025/11/20',
    formats: ['PDF', 'EXCEL', 'CSV'],
    icon: <FiBarChart2 className="w-6 h-6 text-yellow-600" />,
    color: 'yellow'
  },
  {
    category: 'تقارير الصلاحيات',
    title: 'تقرير نشاط المستخدمين',
    frequency: 'أسبوعي',
    description: 'تقرير عن أنشطة المستخدمين والعمليات التي قاموا بها. يساعد في مراقبة الإنتاجية والامتثال للسياسات.',
    lastGenerated: '2025/11/20',
    formats: ['PDF', 'EXCEL'],
    icon: <FiUsers className="w-6 h-6 text-green-600" />,
    color: 'green'
  },
  {
    category: 'تقارير سير العمل',
    title: 'إحصائيات المستندات',
    frequency: 'أسبوعي',
    description: 'تحليل إحصائي شامل لعدد المستندات المسجلة والمنجزة والمؤرشفة. يتضمن رسوم بيانية وجداول مفصلة.',
    lastGenerated: '2025/11/20',
    formats: ['PDF', 'EXCEL'],
    icon: <FiBarChart2 className="w-6 h-6 text-indigo-600" />,
    color: 'indigo'
  },
];

const ReportCard = ({ report }) => {
  const categoryColors = {
    blue: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
    purple: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
    red: { bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-200' },
    yellow: { bg: 'bg-yellow-50', text: 'text-yellow-700', border: 'border-yellow-200' },
    green: { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200' },
    indigo: { bg: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-200' },
  };
  const colors = categoryColors[report.color] || categoryColors.blue;

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div>
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${colors.bg}`}>
              {report.icon}
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">{report.title}</h3>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 mb-4">
          <span className={`px-3 py-1 text-xs font-medium rounded-full ${colors.bg} ${colors.text} border ${colors.border}`}>
            {report.category}
          </span>
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-600 border border-gray-200">
            {report.frequency}
          </span>
        </div>
        <p className="text-sm text-gray-600 mb-4 min-h-[60px]">{report.description}</p>
        <div className="text-xs text-gray-500 bg-gray-50 rounded-md p-2 text-center border border-gray-100 mb-6">
          آخر تقرير: <span className="font-medium text-gray-700 font-mono">{report.lastGenerated}</span>
        </div>
        <div className="mb-6">
          <h4 className="text-xs font-semibold text-gray-500 mb-2">صيغ التصدير:</h4>
          <div className="flex items-center gap-2">
            {report.formats.map(format => (
              <span key={format} className="text-xs font-mono font-medium text-gray-700 bg-gray-100 border border-gray-200 px-2 py-1 rounded">
                {format}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button className="flex-1 bg-blue-700 text-white py-3 px-4 rounded-lg hover:bg-blue-800 transition-colors flex items-center justify-center gap-2 font-medium">
          عرض التقرير
        </button>
        <button className="p-3 text-gray-500 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors border border-gray-200">
          <FiDownload className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

const ReportsList = () => {
  const [activeFilter, setActiveFilter] = useState('جميع التقارير');
  const filters = ['جميع التقارير', 'تقارير النظام', 'تقارير الصلاحيات', 'تقارير المتابعة', 'تقارير سير العمل'];

  const filteredReports = reportsData.filter(report => 
    activeFilter === 'جميع التقارير' || report.category === activeFilter
  );

  return (
    <div className="p-6 bg-gray-50/50 min-h-screen" dir="rtl">
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <span>الرئيسية</span>
            <FiChevronLeft className="w-4 h-4 mx-1" />
            <span>التقارير والإشراف</span>
            <FiChevronLeft className="w-4 h-4 mx-1" />
            <span className="text-gray-900 font-medium">قائمة التقارير</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">قائمة التقارير</h1>
          <p className="text-gray-600 mt-1">اختر التقرير المطلوب لعرضه وتصديره</p>
        </header>

        {/* Filters */}
        <div className="mb-8">
          <div className="bg-sky-100/70 rounded-xl p-2 flex items-center justify-center gap-2 overflow-x-auto">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 text-sm font-medium rounded-lg transition-all duration-300 whitespace-nowrap ${
                  activeFilter === filter
                    ? 'bg-white text-slate-800 shadow-sm'
                    : 'text-slate-600 hover:bg-white/50'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Reports Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReports.map(report => (
            <ReportCard key={report.title} report={report} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReportsList;