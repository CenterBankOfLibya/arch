import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Eye, CheckCircle, Info, ArrowLeft } from 'lucide-react';

import {
  FiFileText,
  FiArchive,
  FiSearch,
  FiBarChart2,
  FiList,
  FiChevronsLeft,
  FiClock,
  FiFilePlus,
  FiInbox,
} from 'react-icons/fi';


// Mock data based on the image
const statsData = {
  total_registered: 580,
  pending_drafts: 12,
  in_progress: 45,
  needs_archiving: 9,
};

const quickActions = [
  {
    title: 'عرض قائمة المستندات',
    description: 'عرض جميع المستندات المسجلة والمحفوظة',
    icon: <FiList size={28} />,
    color: 'blue',
    link: '/documents',
  },

  {
    title: 'تسجيل مستند جديد',
    description: 'إضافة مستند جديد إلى النظام',
    icon: <FiFilePlus size={28} />,
    color: 'green',
    link: '/documents/add',
  },
  {
    title: 'الأرشفة والتوزيع',
    description: 'إنهاء وتوزيع المستندات على الأقسام',
    icon: <FiArchive size={28} />,
    color: 'red',
    link: '/archiving',
  },
  {
    title: 'البحث المتقدم',
    description: 'البحث الشامل في المستندات المحفوظة',
    icon: <FiSearch size={28} />,
    color: 'red',
    link: '/search',
  },
  {
    title: 'لوحة متابعة المستندات',
    description: 'متابعة سير عمل المستندات والمهام',
    icon: <FiClock size={28} />,
    color: 'teal',
    link: '/tracking',
  },
  {
    title: 'لوحة التقارير والإشراف',
    description: 'عرض التقارير والإحصائيات الشاملة',
    icon: <FiBarChart2 size={28} />,
    color: 'red',
    link: '/reports',
  },
];



const recentDocuments = [
  {
    id: '00123',
    title: 'طلب اعتماد موازنة تشغيلية للعام 2025',
    date: '2025-11-01',
    department: 'الإدارة القانونية',
    status: 'قيد المتابعة'
  },
  {
    id: '00124',
    title: 'تقرير فحص أنظمة الدفع الإلكتروني الربع الثالث',
    date: '2025-11-05',
    department: 'المراجعة الداخلية',
    status: 'محفوظ نهائياً'
  },
  {
    id: '00125',
    title: 'مناقشة إجراءات مكافحة غسل الأموال',
    date: '2025-11-10',
    department: 'المصارف التجارية',
    status: 'مسجل'
  },
  {
    id: '00126',
    title: 'مسودة قرار بشأن تنظيم عملية الاكتتاب',
    date: '2025-11-13',
    department: 'إدارة العمليات',
    status: 'مسودة'
  },
];

const getStatusBadge = (status) => {
  switch (status) {
    case 'قيد المتابعة':
      return <span className="bg-yellow-500 text-white text-xs font-semibold px-3 py-1.5 rounded-md">{status}</span>;
    case 'محفوظ نهائياً':
      return <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1.5 rounded-md">{status}</span>;
    case 'مسجل':
      return <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1.5 rounded-md">{status}</span>;
    case 'مسودة':
      return <span className="bg-white border border-gray-300 text-gray-600 text-xs font-semibold px-3 py-1.5 rounded-md">{status}</span>;
    default:
      return <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-3 py-1 rounded-md">{status}</span>;
  }
};

const DocumentItem = ({ doc }) => (
  <div className="p-4 rounded-xl border border-gray-200/80 flex items-center justify-between mb-3  hover:shadow-md transition-shadow duration-300">
    <div className="flex items-center gap-4">
      <FiFileText className="w-5 h-5 text-gray-400" />
      <div className="flex-grow">
        <h3 className="font-semibold text-gray-800 text-md">{doc.title}</h3>
        <p className="text-sm text-gray-500 mt-1 flex items-center gap-3">
          <span>رقم المستند: {doc.id}</span>
          <span className="text-gray-300">•</span>
          <span>{doc.date}</span>
          <span className="text-gray-300">•</span>
          <span>{doc.department}</span>
        </p>
      </div>
    </div>
    <div className="min-w-[120px] flex justify-end">{getStatusBadge(doc.status)}</div>
  </div>
);

const ImportantTips = () => (
  <div className="bg-blue-50 p-6 rounded-lg">
    <div className="flex items-center mb-4">
      <Info className="w-6 h-6 text-blue-600" />
      <h3 className="text-lg font-bold text-blue-800 mr-3">نصائح مهمة</h3>
    </div>
    <ul className="space-y-2 text-gray-700 text-sm list-disc list-inside">
      <li>تأكد من ملء جميع الحقول المطلوبة عند تسجيل مستند جديد</li>
      <li>يمكنك حفظ المستند كمسودة والعودة إليه لاحقاً</li>
      <li>استخدم البحث المتقدم للعثور على المستندات بسهولة</li>
      <li>تابع حالة المستندات من خلال لوحة المتابعة</li>
    </ul>
  </div>
);

const WorkSteps = () => (
  <div className="bg-green-50 p-6 rounded-lg">
    <div className="flex items-center mb-4">
      <CheckCircle className="w-6 h-6 text-green-600" />
      <h3 className="text-lg font-bold text-green-800 mr-3">خطوات العمل</h3>
    </div>
    <ol className="space-y-2 text-gray-700 text-sm list-decimal list-inside">
      <li>تسجيل المستند الجديد مع البيانات الأساسية</li>
      <li>إضافة المرفقات والملاحظات إن وجدت</li>
      <li>حفظ المستند أو حفظه كمسودة</li>
      <li>إنهاء المستند وتوزيعه على الأقسام المعنية</li>
    </ol>
  </div>
);

export default function Dashboard(

) {
  return (
    <div className="bg-gray-50/50 flex-1 p-8">
      <div className="max-w-7xl mx-auto justify-center">
        {/* Header */}
        <header className="mb-8">
          <p className="text-sm text-gray-500 mb-2">
            <Link to="/" className="hover:underline">الرئيسية</Link>
            <span className="mx-2">›</span>
            <span>إدارة المستندات</span>
          </p>
          <h1 className="text-3xl font-bold text-gray-800">
            إدارة وتسجيل المستندات
          </h1>
          <p className="text-gray-500 mt-1">
            النقطة المركزية لتسجيل المستندات الجديدة وإدارة دورة حياتها
          </p>
        </header>
        <hr className='mb-8 bg-gray-300 opacity-50 ' />
        {/* Statistics Section */}
        <section className="mb-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-700">ملخص الإحصائيات</h2>
            <span className="text-sm text-gray-500">آخر تحديث: اليوم</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <StatCard
              title="إجمالي المستندات المسجلة حديثاً"
              value={statsData.total_registered}
              subtitle="مستند مسجل حديثاً"
              color="blue"
              icon={<FiFileText size={24} />}
            />
            <StatCard
              title="المسودات في الانتظار"
              value={statsData.pending_drafts}
              subtitle="مسودة في الانتظار"
              color="yellow"
              icon={<FiInbox size={24} />}
            />
            <StatCard
              title="قيد المتابعة"
              value={statsData.in_progress}
              subtitle="مستند قيد المتابعة"
              color="orange"
              icon={<FiClock size={24} />}
            />
            <StatCard
              title="المستندات التي تحتاج أرشفة"
              value={statsData.needs_archiving}
              subtitle="مستند يحتاج أرشفة"
              color="red"
              icon={<FiArchive size={24} />}
            />
          </div>
        </section>

        {/* Quick Actions Section */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">الإجراءات السريعة</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {quickActions.map((action) => (
              <ActionCard key={action.title} {...action} />
            ))}
          </div>
        </section>
        <h2 className="text-xl p-1 font-bold text-gray-800">آخر المستندات المسجلة</h2>
        {/* Recent Documents Section */}
        <section className="mb-10 bg-white p-6 rounded-xl shadow-sm  ">
          <div className="flex justify-between items-center  mb-4">
            <div>
              <h2 className="text-xl font-bold text-gray-800"> قائمة المستندات الحديثة</h2>
              <p className="text-sm text-gray-500 mt-1">آخر 4 مستندات تم تسجيلها في النظام</p>
            </div>
            <Link to="/documents" className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
              <span>عرض الكل</span>
              <ArrowLeft size={16} />
            </Link>
          </div>
          <div>
            {recentDocuments.map((doc) => (
              <DocumentItem key={doc.id} doc={doc} />
            ))}
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <WorkSteps />
          <ImportantTips />
        </section>
      </div>
      <div className=" bg-gray-50/50 flex-1 p-8">

      </div>

    </div>
  );
}
const StatCard = ({ title, value, subtitle, color, icon }) => (
  <div className="bg-white p-5 rounded-xl shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
    <div>
      <p className="text-gray-500 text-sm">{title}</p>
      <p className="text-4xl font-bold text-gray-800 my-2">{value}</p>
      <p className="text-gray-400 text-xs">{subtitle}</p>
    </div>
    <div className={`p-3 rounded-lg bg-${color}-100 text-${color}-600`}>
      {icon}
    </div>
  </div>
);

const ActionCard = ({ title, description, icon, color, link }) => (
  <div className="bg-white p-5 rounded-xl shadow-sm flex flex-col">
    <div className="flex items-start gap-4">
      <div className={`p-3 rounded-lg bg-${color}-500 text-white`}>
        {icon}
      </div>
      <div className='flex-1'>
        <h3 className="font-bold text-gray-800 text-md">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
      </div>
    </div>
    <Link
      to={link}
      className={`mt-4 w-full text-center bg-${color}-500 text-white py-2.5 px-4 rounded-lg hover:bg-${color}-600 transition-colors flex items-center justify-center gap-2`}
    >
      <span>الذهاب إلى الصفحة</span>
      <FiChevronsLeft />
    </Link>
  </div>
);

