import React, { useState } from 'react';
import { FiEdit, FiCheckCircle, FiShare2, FiPrinter, FiBarChart2, FiEye, FiPaperclip, FiGitCommit, FiChevronsRight, FiFile, FiHash, FiCalendar, FiTag, FiSend, FiClock, FiInfo, FiMessageSquare, FiFileText, FiImage, FiDownload, FiUser, FiHardDrive } from 'react-icons/fi';

const TABS = [
  { key: 'overview', label: 'نظرة عامة', icon: <FiEye className="inline ml-2" /> },
  { key: 'attachments', label: 'المرفقات', icon: <FiPaperclip className="inline ml-2" /> },
  { key: 'workflow', label: 'سير العمل', icon: <FiGitCommit className="inline ml-2" /> },
  { key: 'distribution', label: 'التوزيع', icon: <FiShare2 className="inline ml-2" /> },
];

const ACTIONS = [
    { label: 'تعديل', icon: <FiEdit className="ml-2" />, color: 'gray' },
    { label: 'إنهاء المستند', icon: <FiCheckCircle className="ml-2" />, color: 'gray' },
    { label: 'تعيين للتوزيع', icon: <FiShare2 className="ml-2" />, color: 'gray' },
    { label: 'طباعة', icon: <FiPrinter className="ml-2" />, color: 'gray' },
    { label: 'متابعة يومية', icon: <FiBarChart2 className="ml-2" />, color: 'gray' },
];

const ATTACHMENTS = [
    {
        name: '2025_الموازنة_المقترحة.pdf',
        size: '1.5 MB',
        user: 'أحمد علي',
        date: '2025/11/12',
        type: 'PDF',
        icon: <FiFileText />,
        iconBg: 'bg-red-100 text-red-600',
    },
    {
        name: 'تفاصيل_البنود_المرفقة.docx',
        size: '0.8 MB',
        user: 'أحمد علي',
        date: '2025/11/12',
        type: 'Word',
        icon: <FiFileText />,
        iconBg: 'bg-blue-100 text-blue-600',
    },
    {
        name: 'ملاحظات_المراجعة.jpg',
        size: '0.3 MB',
        user: 'نورة خالد',
        date: '2025/11/12',
        type: 'صورة',
        icon: <FiImage />,
        iconBg: 'bg-green-100 text-green-600',
    }
];

const WORKFLOW_STEPS = [
    {
        title: 'تسجيل المستند (مسجل)',
        user: 'سالم محمد',
        date: '2025/11/12',
        status: 'completed',
    },
    {
        title: 'إحالة إلى مكتب المحافظ',
        user: 'نورهان علي',
        date: '2025/11/13',
        note: 'تم إرسال نسخة ورقية وإلكترونية للمراجعة',
        status: 'completed',
    },
    {
        title: 'قيد المراجعة (قيد المتابعة)',
        user: 'فاطمة أحمد (سكرتارية)',
        date: '2025/11/15',
        status: 'in-progress',
    }
];

const DISTRIBUTION_LIST = [
    {
        name: 'مكتب المحافظ',
        id: 'user-101',
        status: 'مراجعة',
        statusColor: 'bg-yellow-100 text-yellow-800',
        date: '2025/11/13',
    },
    {
        name: 'الشؤون المالية',
        id: 'dept-45',
        status: 'قراءة',
        statusColor: 'bg-blue-100 text-blue-800',
        date: '2025/11/13',
    }
];

const AttachmentsTab = () => (
    <div className="bg-white border border-gray-200 rounded-xl">
        <div className="p-6">
            <h3 className="flex items-center text-lg font-semibold text-gray-900">
                <FiPaperclip className="ml-2 text-gray-500" />
                المرفقات ({ATTACHMENTS.length})
            </h3>
        </div>
        <div className="space-y-4 p-6 pt-0">
            {ATTACHMENTS.map((file, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                    <div className="flex items-center">
                        <div className={`p-3 rounded-lg ${file.iconBg} ml-4`}>
                            {React.cloneElement(file.icon, { size: 20 })}
                        </div>
                        <div>
                            <p className="font-semibold text-gray-800">{file.name}</p>
                            <div className="flex items-center text-sm text-gray-500 mt-1 space-x-4 space-x-reverse">
                                <span className="flex items-center"><FiHardDrive className="ml-1" size={14} /> {file.size}</span>
                                <span className="flex items-center"><FiUser className="ml-1" size={14} /> {file.user}</span>
                                <span className="flex items-center"><FiCalendar className="ml-1" size={14} /> {file.date}</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 space-x-reverse">
                        <span className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-md">{file.type}</span>
                        <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg bg-white text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none">
                            <FiDownload className="ml-2" />
                            <span>تحميل</span>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const DistributionTab = () => (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h3 className="flex items-center text-lg font-semibold text-gray-900 mb-6">
            <FiShare2 className="ml-2 text-gray-500" />
            قائمة التوزيع ({DISTRIBUTION_LIST.length})
        </h3>
        <div className="space-y-4">
            {DISTRIBUTION_LIST.map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                    <div className="flex items-center">
                        <div className="bg-gray-100 p-3 rounded-lg ml-4">
                            <FiUser size={20} className="text-gray-500" />
                        </div>
                        <div>
                            <p className="font-semibold text-gray-800">{item.name}</p>
                            <p className="text-sm text-gray-500">معرّف: {item.id}</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 space-x-reverse">
                        <span className={`text-sm font-medium px-3 py-1 rounded-full ${item.statusColor}`}>{item.status}</span>
                        <p className="text-sm text-gray-500">{item.date}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const WorkflowTab = () => (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h3 className="flex items-center text-lg font-semibold text-gray-900 mb-6">
            <FiGitCommit className="ml-2 text-gray-500" />
            سير العمل ({WORKFLOW_STEPS.length} خطوات)
        </h3>
        <div className="relative">
            {WORKFLOW_STEPS.map((step, index) => (
                <div key={index} className="flex items-start mb-8">
                    <div className="flex flex-col items-center mr-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-blue-600`}>
                            <div className="w-6 h-6 rounded-full border-2 border-white bg-blue-600"></div>
                        </div>
                     
                    </div>
                    <div className="flex-1 pt-1">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="font-bold text-gray-800">{step.title}</p>
                                <p className="text-sm text-gray-500">بواسطة: {step.user}</p>
                            </div>
                            <p className="text-sm text-gray-500">{step.date}</p>
                        </div>
                        {step.note && (
                            <div className="mt-2 p-3 bg-gray-50 rounded-lg text-sm text-gray-600">
                                {step.note}
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const DocumentDetails = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="bg-[#F9FAFB] p-4 sm:p-6 lg:p-8 font-sans" dir="rtl">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-6">
          <div className="flex justify-between items-center">
            <div>
              <nav className="flex items-center text-sm text-gray-500 mb-2">
                <a href="#" className="hover:text-gray-700">الرئيسية</a>
                <FiChevronsRight className="mx-1 transform -rotate-180" />
                <a href="#" className="hover:text-gray-700">المستندات</a>
                <FiChevronsRight className="mx-1 transform -rotate-180" />
                <span className="font-semibold text-gray-800">تفاصيل المستند</span>
              </nav>
              <h1 className="text-3xl font-bold text-gray-900">المستند رقم 00123</h1>
              <p className="text-gray-600 mt-1">طلب اعتماد موازنة تشغيلية للعام 2025</p>
            </div>
            <div className="flex items-center space-x-2 space-x-reverse">
                {ACTIONS.map((action) => (
                    <button key={action.label} className={`flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none`}>
                        {action.icon}
                        <span>{action.label}</span>
                    </button>
                ))}
            </div>
          </div>
        </header>

        {/* Document Title Card */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
            <div className="flex justify-between items-start">
                <div>
                    <h2 className="text-xl font-bold text-gray-900">طلب اعتماد موازنة تشغيلية للعام 2025</h2>
                    <p className="text-sm text-gray-500 mt-1">رقم المستند: 00123 | الرقم الإشاري: L-25/456</p>
                </div>
                <span className="bg-orange-100 text-orange-600 text-sm font-medium px-3 py-1 rounded-full">قيد المتابعة</span>
            </div>
        </div>

        {/* Tabs */}
        <div className="mb-6">
          <div role="tablist" className="bg-gray-100 h-10 items-center justify-center rounded-lg p-1 grid w-full grid-cols-4">
            {TABS.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                role="tab"
                aria-selected={activeTab === tab.key}
                className={`flex items-center justify-center gap-2 rounded-md px-2 py-1 text-sm font-medium whitespace-nowrap transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
                  activeTab === tab.key
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-500 hover:bg-gray-200/50'
                }`}
              >
                {tab.icon}
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
            <div className="space-y-6">
                {/* Basic Info */}
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="flex items-center text-lg font-semibold text-gray-900 mb-4">
                        <FiInfo className="ml-2 text-gray-400" />
                        البيانات الأساسية
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
                        <div className="flex items-start">
                            <FiFile className="text-gray-400 mt-1 ml-3 flex-shrink-0" />
                            <div>
                                <p className="text-sm text-gray-500">رقم المستند</p>
                                <p className="font-semibold text-gray-800">00123</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <FiHash className="text-gray-400 mt-1 ml-3 flex-shrink-0" />
                            <div>
                                <p className="text-sm text-gray-500">الرقم الإشاري</p>
                                <p className="font-semibold text-gray-800">L-25/456</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <FiCalendar className="text-gray-400 mt-1 ml-3 flex-shrink-0" />
                            <div>
                                <p className="text-sm text-gray-500">السنة</p>
                                <p className="font-semibold text-gray-800">2025</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <FiTag className="text-gray-400 mt-1 ml-3 flex-shrink-0" />
                            <div>
                                <p className="text-sm text-gray-500">نوع المستند</p>
                                <p className="font-semibold text-gray-800">مذكرة داخلية</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <FiSend className="text-gray-400 mt-1 ml-3 flex-shrink-0" />
                            <div>
                                <p className="text-sm text-gray-500">المرسل</p>
                                <p className="font-semibold text-gray-800">الإدارة القانونية</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <FiClock className="text-gray-400 mt-1 ml-3 flex-shrink-0" />
                            <div>
                                <p className="text-sm text-gray-500">تاريخ التسجيل</p>
                                <p className="font-semibold text-gray-800">2025/11/12</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Subject */}
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="flex items-center text-lg font-semibold text-gray-900 mb-2">
                        <FiMessageSquare className="ml-2 text-gray-400" />
                        الموضوع
                    </h3>
                    <p className="text-gray-800">طلب اعتماد موازنة تشغيلية للعام 2025</p>
                </div>

                {/* Notes */}
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                    <h3 className="flex items-center text-lg font-semibold text-gray-900 mb-2">
                        <FiMessageSquare className="ml-2 text-blue-500" />
                        الملاحظات
                    </h3>
                    <p className="text-blue-900">المستند يتطلب موافقة عاجلة من مكتب المحافظ. تم إرفاق جميع المستندات الداعمة.</p>
                </div>
            </div>
        )}

        {activeTab === 'attachments' && <AttachmentsTab />}
        {activeTab === 'workflow' && <WorkflowTab />}
        {activeTab === 'distribution' && <DistributionTab />}

        {/* Other Tabs Placeholder */}
        {activeTab !== 'overview' && activeTab !== 'attachments' && activeTab !== 'workflow' && activeTab !== 'distribution' && (
            <div className="bg-white rounded-xl border border-gray-200 p-6 min-h-[300px]">
                <h3 className="font-bold text-lg mb-4">{TABS.find(t => t.key === activeTab)?.label}</h3>
                <p>محتوى قسم {TABS.find(t => t.key === activeTab)?.label}.</p>
            </div>
        )}
      </div>
    </div>
  );
};

export default DocumentDetails;
