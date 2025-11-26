import React from 'react';
import { FiArrowLeft, FiBarChart2, FiCalendar, FiCheckCircle, FiClock, FiFileText, FiXCircle, FiTrendingUp, FiTrendingDown, FiActivity, FiUser, FiFilter, FiArchive } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const StatCard = ({ icon, value, title, trend, trendValue, iconBgColor }) => (
  <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col justify-between">
    <div className="flex justify-between items-start">
      <div className={`p-3 rounded-full ${iconBgColor}`}>
        {icon}
      </div>
      <div className={`flex items-center text-sm font-medium ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
        <span>{trendValue}</span>
        {trend === 'up' ? <FiTrendingUp className="mr-1" /> : <FiTrendingDown className="mr-1" />}
      </div>
    </div>
    <div>
      <p className="text-3xl font-bold text-gray-900 mt-4">{value}</p>
      <p className="text-sm text-gray-600">{title}</p>
    </div>
  </div>
);



const RecentActivityItem = ({ docId, title, user, time, status, statusColor, actionText }) => (
    <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center justify-between">
        <div className="flex items-center">
            <div>
                <div className="flex items-center mb-1">
                    <span className="font-bold text-gray-800 ml-2">{docId}</span>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${statusColor}`}>{status}</span>
                </div>
                <p className="text-sm text-gray-600">{title}</p>
                <div className="flex items-center text-xs text-gray-500 mt-1">
                    <FiUser className="ml-1" />
                    <span>{user}</span>
                    <FiClock className="ml-1 mr-2" />
                    <span>{time}</span>
                </div>
            </div>
        </div>
        <button className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-md hover:bg-gray-200">
            {actionText}
        </button>
    </div>
);

const TrackingDashboard = () => {
   
  const stats = [
    {
      icon: <FiClock size={24} className="text-orange-600" />,
      value: 7,
      title: 'المستندات قيد الانتظار',
      trend: 'up',
      trendValue: '1%',
      iconBgColor: 'bg-orange-100',
    },
    {
      icon: <FiXCircle size={24} className="text-gray-600" />,
      value: 42,
      title: 'المستندات المغلقة',
      trend: 'up',
      trendValue: '5%',
      iconBgColor: 'bg-gray-200',
    },
    {
      icon: <FiCheckCircle size={24} className="text-green-600" />,
      value: 18,
      title: 'المستندات المستلمة',
      trend: 'down',
      trendValue: '2%',
      iconBgColor: 'bg-green-100',
    },
    {
      icon: <div className="w-6 h-6 border-2 border-blue-600 rounded-full"></div>,
      value: 24,
      title: 'المستندات المفتوحة',
      trend: 'up',
      trendValue: '3%',
      iconBgColor: 'bg-blue-100',
    },
  ];

  const activities = [
      { docId: 'DOC-2024-001', title: 'طلب معلومات مالية', user: 'أحمد محمد', time: 'منذ ساعة', status: 'مفتوح', statusColor: 'bg-blue-100 text-blue-800', actionText: 'تم فتح المستند' },
      { docId: 'DOC-2024-002', title: 'تقرير شهري', user: 'فاطمة علي', time: 'منذ ساعتين', status: 'مستلم', statusColor: 'bg-green-100 text-green-800', actionText: 'تم استلام المستند' },
      { docId: 'DOC-2024-003', title: 'موافقة على الميزانية', user: 'محمود حسن', time: 'منذ 3 ساعات', status: 'مغلق', statusColor: 'bg-gray-200 text-gray-800', actionText: 'تم إغلاق المستند' },
      { docId: 'DOC-2024-004', title: 'طلب إجازة', user: 'سارة حمد', time: 'منذ 5 ساعات', status: 'مفتوح', statusColor: 'bg-blue-100 text-blue-800', actionText: 'تم فتح المستند' },
      { docId: 'DOC-2024-005', title: 'تقرير الأداء', user: 'علي محمود', time: 'منذ يوم', status: 'مستلم', statusColor: 'bg-green-100 text-green-800', actionText: 'تم استلام المستند' },
  ];
const navigate = useNavigate();
const QuickAccessCard = ({ icon, title, description, bgColor, buttonText = 'الوصول', link }) => (
  <div className={`rounded-xl p-6 flex flex-col justify-between ${bgColor}`}>
    <div className="flex items-center text-gray-700 mb-4">
      {icon}
      <h3 className="text-lg font-semibold mr-3">{title}</h3>
    </div>
    <p className="text-gray-600 mb-6">{description}</p>
    <button     onClick={() => navigate(link)} className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
      {buttonText}
      <FiArrowLeft className="mr-2" />
    </button>
  </div>
);
  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen" dir="rtl">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <nav className="flex items-center text-sm text-gray-500 mb-2">
            <a href="#" className="hover:text-gray-700">الرئيسية</a>
            <span className="mx-2 text-gray-400">&rsaquo;</span>
            <a href="#" className="hover:text-gray-700">المتابعة</a>
            <span className="mx-2 text-gray-400">&rsaquo;</span>
            <span className="font-semibold text-gray-800">لوحة المتابعة</span>
          </nav>
          <h1 className="text-3xl font-bold text-gray-900">لوحة متابعة المستندات</h1>
          <p className="text-gray-600 mt-1">مركز المتابعة المركزي للمستندات والبريد الوارد والصادر</p>
        </div>

        {/* Welcome Banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8 flex items-center">
          <div className="w-16 h-16 flex items-center justify-center">
            <FiActivity size={40} className="text-blue-500" />
          </div>
          <div className="mr-4">
            <h2 className="text-xl font-bold text-gray-900">مرحباً بك في لوحة المتابعة</h2>
            <p className="text-gray-600 mt-1">تابع حالة المستندات والبريد الوارد والصادر بسهولة من خلال الملخصات اليومية والأسبوعية.</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
    {/* Quick Access */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">الوصول السريع</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <QuickAccessCard
              icon={<FiCalendar size={24} />}
              title="الملخص اليومي"
              description="عرض ملخص المستندات والبريد لليوم الحالي"
              bgColor="bg-purple-50 border border-purple-200"
              link="/admin/tracking/daily"
            />
            <QuickAccessCard
              icon={<FiCalendar size={24} />}
              title="الملخص الأسبوعي"
              description="عرض ملخص المستندات والبريد للأسبوع الحالي"
              bgColor="bg-blue-50 border border-blue-200"
                link="/admin/tracking/weekly"   
            />
            <QuickAccessCard
              icon={<FiBarChart2 size={24} />}
          
              title="تقارير المتابعة"
              description="إنشاء تقارير مخصصة باستخدام فلاتر التاريخ"
              bgColor="bg-yellow-50 border border-yellow-200"
                link="/admin/tracking/reports"
            />
            <QuickAccessCard
              icon={<FiFileText size={24} />}
              title="تفاصيل التتبع"
              description="عرض تفاصيل تتبع مستند معين مع الملاحظات والتعليقات"
              bgColor="bg-green-50 border border-green-200"
                link="/admin/tracking/details"
            />
          </div>
        </div>

        {/* Reports and Analysis */}
        <div className="mt-8">
            <div className="flex items-center mb-4">
                <FiBarChart2 className="w-6 h-6 text-gray-500 ml-3" />
                <div>
                    <h2 className="text-xl font-bold text-gray-900">التقارير والتحليلات</h2>
                    <p className="text-sm text-gray-500">عرض التقارير المفصلة والتحليلات الشاملة للمتابعة</p>
                </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 rounded-lg p-4 flex justify-between items-center hover:bg-gray-50 cursor-pointer">
                        <div>
                            <h3 className="font-semibold text-gray-800">تقرير المتابعة</h3>
                            <p className="text-sm text-gray-500">تقرير شامل عن أنشطة المتابعة</p>
                        </div>
                        <FiArrowLeft className="text-gray-400" />
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4 flex justify-between items-center hover:bg-gray-50 cursor-pointer">
                        <div>
                            <h3 className="font-semibold text-gray-800">تقارير المتابعة</h3>
                            <p className="text-sm text-gray-500">إنشاء تقارير مخصصة بفلاتر التاريخ</p>
                        </div>
                        <FiArrowLeft className="text-gray-400" />
                    </div>
                </div>
            </div>
        </div>

        {/* Other Attachments */}
        <div className="mt-8">
            <div className="flex items-center mb-4">
                <FiFilter className="w-6 h-6 text-gray-500 ml-3" />
                <div>
                    <h2 className="text-xl font-bold text-gray-900">الملاحات الأخرى</h2>
                </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="border border-gray-200 rounded-lg p-4 flex items-center justify-center flex-col hover:bg-gray-50 cursor-pointer">
                        <FiFileText className="w-6 h-6 text-gray-500 mb-2" />
                        <h3 className="font-semibold text-gray-800">إدارة المستندات</h3>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4 flex items-center justify-center flex-col hover:bg-gray-50 cursor-pointer">
                        <FiArchive className="w-6 h-6 text-gray-500 mb-2" />
                        <h3 className="font-semibold text-gray-800">الأرشفة والتوزيع</h3>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4 flex items-center justify-center flex-col hover:bg-gray-50 cursor-pointer">
                        <FiBarChart2 className="w-6 h-6 text-gray-500 mb-2" />
                        <h3 className="font-semibold text-gray-800">التقارير والإشراف</h3>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default TrackingDashboard;
