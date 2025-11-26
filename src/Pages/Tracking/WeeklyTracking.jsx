import React from 'react';
import { FiFileText, FiClock, FiCheckCircle, FiXCircle, FiDownload, FiRefreshCw, FiEye } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const WeeklyTracking = () => {
  const navigator = useNavigate(); 
  const stats = [
    { title: 'إجمالي المتابعات', value: 47, period: 'للأسبوع الحالي', icon: FiFileText, color: 'blue' },
    { title: 'متابعات مفتوحة', value: 23, period: 'قيد الانتظار', icon: FiClock, color: 'orange' },
    { title: 'متابعات مستلمة', value: 18, period: 'تم استلامها', icon: FiCheckCircle, color: 'green' },
    { title: 'متابعات مغلقة', value: 6, period: 'منتهية', icon: FiXCircle, color: 'gray' },
  ];

  const documents = [
    { id: '00123', subject: 'طلب اعتماد موازنة تشغيلية للعام 2025', responsible: 'علي أحمد المحمود', lastAction: '2025-11-13', priority: 'عالية', status: 'مفتوح' },
    { id: '00124', subject: 'تقرير فحص أنظمة الدفع الإلكتروني الربع الثالث', responsible: 'فاطمة ناصر عبد الله', lastAction: '2025-11-12', priority: 'متوسطة', status: 'مستلم' },
    { id: '00125', subject: 'مناقشة إجراءات مكافحة غسل الأموال', responsible: 'خالد سعيد الصالح', lastAction: '2025-11-11', priority: 'عالية', status: 'مفتوح' },
    { id: '00126', subject: 'مسودة قرار بشأن تنظيم عملية الاكتتاب', responsible: 'نورهان علي', lastAction: '2025-11-10', priority: 'منخفضة', status: 'مغلق' },
    { id: '00127', subject: 'تحديث سياسات الإقراض للمصارف التجارية', responsible: 'سارة محمد', lastAction: '2025-11-09', priority: 'متوسطة', status: 'مستلم' },
    { id: '00128', subject: 'اجتماع مجلس الإدارة الشهري', responsible: 'محمود علي', lastAction: '2025-11-08', priority: 'عالية', status: 'مفتوح' },
    { id: '00129', subject: 'تقرير الامتثال التنظيمي', responsible: 'ليلى أحمد', lastAction: '2025-11-07', priority: 'منخفضة', status: 'مغلق' },
    { id: '00130', subject: 'طلب تجديد الترخيص للفروع الجديدة', responsible: 'عمر حسن', lastAction: '2025-11-06', priority: 'متوسطة', status: 'مفتوح' },
  ];

  const getPriorityClass = (priority) => {
    switch (priority) {
      case 'عالية': return 'text-red-600 bg-red-50';
      case 'متوسطة': return 'text-orange-600 bg-orange-50';
      case 'منخفضة': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'مفتوح': return 'bg-sky-500 text-white';
      case 'مستلم': return 'bg-emerald-500 text-white';
      case 'مغلق': return 'bg-slate-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const StatCard = ({ title, value, period, icon: Icon, color }) => {
    const colorVariants = {
        blue: 'bg-blue-100 text-blue-600',
        orange: 'bg-orange-100 text-orange-600',
        green: 'bg-green-100 text-green-600',
        gray: 'bg-gray-200 text-gray-600',
    }
    return (
        <div className="bg-white p-6 rounded-xl border border-gray-200 flex items-start justify-between">
            <div>
                <p className="text-sm text-gray-500">{title}</p>
                <p className="text-4xl font-bold text-gray-900 mt-2">{value}</p>
                <p className="text-sm text-gray-500 mt-1">{period}</p>
            </div>
            <div className={`p-3 rounded-full ${colorVariants[color] || colorVariants.gray}`}>
                <Icon className="w-6 h-6" />
            </div>
        </div>
    );
  }


  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen" dir="rtl">
      <div className="max-w-screen-2xl mx-auto">
        <header className="mb-8">
          <div className="text-sm text-gray-500 mb-2">
            <span>الرئيسية</span> &gt; <span>المتابعة</span> &gt; <span className="font-semibold text-gray-700">الملخص الأسبوعي</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">الملخص الأسبوعي للمتابعة</h1>
          <p className="text-gray-600 mt-1">عرض البريد الوارد والصادر للأسبوع الحالي مع حالات المتابعة</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map(stat => <StatCard key={stat.title} {...stat} />)}
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-gray-900">تصفية النتائج</h2>
            <button className="text-gray-600 hover:text-gray-900 flex items-center gap-2 text-sm font-medium transition-colors">
              <FiRefreshCw className="w-4 h-4" />
              إعادة تعيين
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end mb-6">
            <div className="md:col-span-4">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">البحث</label>
              <input
                type="text"
                placeholder="ابحث عن رقم المستند..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-right"
              />
            </div>
            <div className="md:col-span-3">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">حالة المتابعة</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-right bg-white">
                <option>جميع الحالات</option>
                <option>مفتوح</option>
                <option>مستلم</option>
                <option>مغلق</option>
              </select>
            </div>
            <div className="md:col-span-3">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">الأولوية</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-right bg-white">
                <option>جميع الأولويات</option>
                <option>عالية</option>
                <option>متوسطة</option>
                <option>منخفضة</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <button className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium transition-colors">
                <FiDownload className="w-4 h-4" />
                <span>تصدير</span>
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50/50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-right font-medium text-gray-500">رقم المستند</th>
                  <th className="px-6 py-4 text-right font-medium text-gray-500 w-1/3">الموضوع</th>
                  <th className="px-6 py-4 text-right font-medium text-gray-500">المسؤول</th>
                  <th className="px-6 py-4 text-right font-medium text-gray-500">آخر إجراء</th>
                  <th className="px-6 py-4 text-right font-medium text-gray-500">الأولوية</th>
                  <th className="px-6 py-4 text-right font-medium text-gray-500">الحالة</th>
                  <th className="px-6 py-4 text-center font-medium text-gray-500">التفاصيل</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {documents.map((doc) => (
                  <tr key={doc.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">{doc.id}</td>
                    <td className="px-6 py-4 text-gray-900">{doc.subject}</td>
                    <td className="px-6 py-4 text-gray-500">{doc.responsible}</td>
                    <td className="px-6 py-4 text-gray-500 font-mono text-xs">{doc.lastAction}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${getPriorityClass(doc.priority)}`}>
                        {doc.priority}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${getStatusClass(doc.status)}`}>
                        {doc.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button className="text-gray-400 hover:text-gray-600 transition-colors">
                        <FiEye className="w-5 h-5"  onClick={
                          ()=>navigator(`/admin/tracking/details/${doc.id}`)
                        }/>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyTracking;