import React from 'react';
import { FiFileText, FiBarChart2, FiUsers, FiClock, FiUserCheck, FiArchive, FiSettings, FiChevronLeft, FiArrowLeft, FiCheckCircle, FiRefreshCw, FiActivity, FiTrash, FiPrinter } from 'react-icons/fi';

const StatCard = ({ icon, value, label, color }) => (
    <div className="bg-white p-5 rounded-xl border border-gray-200 flex items-center justify-between">
      <div className="text-right">
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-3xl font-bold text-gray-800">{value}</p>
      </div>
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-${color}-100`}>
        {React.cloneElement(icon, { className: `w-6 h-6 text-${color}-600` })}
      </div>
    </div>
);

const UnitCard = ({ icon, title, description, link, color }) => (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden group">
        <div className={`bg-${color}-500 p-5`}>
            <h3 className="font-bold text-lg text-white">{title}</h3>
        </div>
        <div className="p-5">
            <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-white border shadow-sm">
                    {React.cloneElement(icon, { className: `w-7 h-7 text-${color}-500` })}
                </div>
                <p className="text-sm text-gray-500">{description}</p>
            </div>
            <a href={link} className="flex items-center justify-end gap-2 text-sm font-semibold text-gray-500 hover:text-blue-600 mt-4">
                <span>الدخول</span>
                <FiArrowLeft className="transition-transform group-hover:-translate-x-1" />
            </a>
        </div>
    </div>
);

const ReportLinkCard = ({ title, description, link }) => (
    <div className="bg-white p-5 rounded-xl border border-gray-200 group hover:border-blue-500 transition-colors duration-300">
        <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 text-blue-600">
                    <FiFileText />
                </div>
                <div>
                    <h4 className="font-bold text-gray-800">{title}</h4>
                    <p className="text-sm text-gray-500">{description}</p>
                </div>
            </div>
            <a href={link} className="text-gray-400 hover:text-blue-600">
                <FiChevronLeft className="w-6 h-6" />
            </a>
        </div>
        <div className="mt-4 flex justify-end">
            <a href={link} className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-blue-600">
                <span>عرض التقرير</span>
                <FiArrowLeft className="transition-transform group-hover:-translate-x-1" />
            </a>
        </div>
    </div>
);

const ActivityItem = ({ icon, text, time }) => (
    <div className="flex items-start gap-4 py-4">
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 text-gray-500">
            {icon}
        </div>
        <div>
            <p className="text-sm font-medium text-gray-800">{text}</p>
            <p className="text-xs text-gray-400">{time}</p>
        </div>
    </div>
);

const ReportsDashboard = () => {
  return (
    <div className="p-6 bg-gray-50/50 min-h-screen" dir="rtl">
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <span>الرئيسية</span>
            <FiChevronLeft className="w-4 h-4 mx-1" />
            <span className="text-gray-900 font-medium">لوحة التقارير والإشراف</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">لوحة التقارير والإشراف</h1>
          <p className="text-gray-600 mt-1">مركز التحكم الرئيسي للتقارير والإعدادات والمراقبة.</p>
        </header>

        {/* System Statistics */}
        <section className="mb-8">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800">إحصائيات النظام</h2>
                <button className="flex items-center gap-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg px-3 py-1.5 hover:bg-gray-100">
                    <FiRefreshCw className="w-4 h-4" />
                    <span>محدث الآن</span>
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard icon={<FiFileText />} value="1247" label="إجمالي المستندات" color="blue" />
                <StatCard icon={<FiClock />} value="45" label="المتابعات المفتوحة" color="orange" />
                <StatCard icon={<FiUsers />} value="28" label="المستخدمون النشطون" color="red" />
                <StatCard icon={<FiBarChart2 />} value="156" label="التقارير المنشأة" color="green" />
            </div>
        </section>

        {/* Main Units */}
        <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">الوحدات الرئيسية</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <UnitCard icon={<FiBarChart2 />} title="التقارير" description="عرض وإنشاء التقارير المختلفة" link="#" color="blue" />
                <UnitCard icon={<FiUsers />} title="إدارة المستخدمين" description="إدارة المستخدمين والأدوار والصلاحيات" link="#" color="green" />
                <UnitCard icon={<FiSettings />} title="الإعدادات" description="إعدادات النظام والأمان والنسخ الاحتياطي" link="#" color="red" />
                <UnitCard icon={<FiFileText />} title="إدارة المستندات" description="عرض وإدارة جميع المستندات" link="#" color="amber" />
            </div>
        </section>

        <div className="">
            <div className="">
                {/* Available Reports */}
                <section className="mb-8">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold text-gray-800">التقارير المتاحة</h2>
                        <a href="#" className="text-sm font-medium text-blue-600 hover:underline">عرض الكل</a>
                    </div>
                    <div className="flex space-x-0 md:space-x-4 md:space-y-0 flex-col md:flex-row">
                        <ReportLinkCard title="تقرير سير عمل المستندات" description="يعرض حركة المستندات بين الأقسام وحالتها" link="#" />
                        <ReportLinkCard title="تقرير صلاحيات المستخدمين" description="تفصيل الأدوار والصلاحيات الممنوحة لكل مستخدم في النظام" link="#" />
                        <ReportLinkCard title="تقارير المتابعة والبريد" description="ملخص للمتابعات اليومية والبريد الصادر والوارد" link="#" />
                    </div>
                </section>

                 {/* System Overview */}
                <section className="bg-blue-50 border border-blue-200/50 rounded-xl p-6">
                    <div className="flex justify-between items-start">
                        <div>
                            <h2 className="text-xl font-bold text-gray-800 mb-2">نظرة عامة على النظام</h2>
                            <p className="text-sm text-gray-600">معلومات عامة عن حالة النظام والأداء.</p>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <FiActivity className="text-green-500" />
                            <span>متصل</span>
                        </div>
                    </div>
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-right">
                            <p className="text-sm text-gray-500 mb-1">حالة النظام</p>
                            <div className="flex items-center gap-2 font-semibold text-green-600">
                                <FiCheckCircle />
                                <span>يعمل بشكل طبيعي</span>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-sm text-gray-500 mb-1">آخر نسخة احتياطية</p>
                            <p className="font-semibold text-gray-800">2025-11-13 02:00 صباحًا</p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm text-gray-500 mb-1">استخدام التخزين</p>
                            <p className="font-semibold text-gray-800">65% من السعة</p>
                        </div>
                    </div>
                    <div className="mt-6 pt-4 border-t border-blue-200/80 flex justify-end">
                        <a href="#" className="text-sm font-medium text-gray-600 hover:text-blue-600 flex items-center gap-2 bg-white border border-gray-300 rounded-lg px-3 py-1.5">
                            <FiSettings />
                            <span>الذهاب إلى الإعدادات</span>
                        </a>
                    </div>
                    
                </section>
                  <div className="bg-white mt-5 border border-gray-200 rounded-xl p-6 h-fit">
                <h2 className="text-xl font-bold text-gray-800 mb-4">آخر العمليات</h2>
                <div className="divide-y divide-gray-100">
                    <ActivityItem icon={<FiFileText />} text="تم إنشاء تقرير جديد" time="بواسطة علي أحمد - منذ 2 ساعة" />
                    <ActivityItem icon={<FiUserCheck />} text="تم تعديل صلاحيات مستخدم" time="بواسطة فاطمة ناصر - منذ 4 ساعات" />
                    <ActivityItem icon={<FiTrash />} text="تم أرشفة 15 مستند" time="بواسطة خالد سعيد - منذ 6 ساعات" />
                    <ActivityItem icon={<FiPrinter />} text="تم إنشاء نسخة احتياطية" time="بواسطة النظام - منذ 8 ساعات" />
                </div>
            </div>
            </div>

            {/* Recent Activity */}
          
        </div>
      </div>
    </div>
  );
};

export default ReportsDashboard;
