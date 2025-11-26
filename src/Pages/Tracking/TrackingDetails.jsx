import React, { useState } from 'react';
import { 
  FiArrowRight, FiCalendar, FiClock, FiFileText, FiPaperclip, 
  FiMessageSquare, FiCheckCircle, FiUser, FiDownload, FiEye,
  FiPlus, FiActivity, FiUpload
} from 'react-icons/fi';

const TrackingDetails = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const documentInfo = {
    id: '00123',
    trackingId: 'TRK-2025-00123-001',
    subject: 'طلب اعتماد موازنة تشغيلية للعام 2025',
    status: 'مفتوح',
    priority: 'عالية',
    assignedTo: 'مكتب المحافظ',
    assignedDate: '2025-11-02',
    dueDate: '2025-11-20',
    lastUpdate: '2025-11-13 14:30',
    notesCount: 4,
    attachmentsCount: 2,
    docId: 'DOC-2025-00123'
  };

  const notes = [
    {
      id: 1,
      user: 'فاطمة أحمد',
      role: 'سكرتارية',
      date: '2025-11-05 10:15',
      content: 'تم استقبال المستند وإحالته للمراجعة. جميع المرفقات موجودة وكاملة.',
      attachments: []
    },
    {
      id: 2,
      user: 'علي محمود',
      role: 'مراجع',
      date: '2025-11-08 09:45',
      content: 'تمت المراجعة الأولية. هناك بعض الملاحظات على البنود المالية تحتاج توضيح من الإدارة القانونية.',
      attachments: [{ name: 'مرفق 1', type: 'file' }]
    },
    {
      id: 3,
      user: 'نورهان علي',
      role: 'مسؤول المتابعة',
      date: '2025-11-10 16:20',
      content: 'تم إرسال الملاحظات للإدارة القانونية للرد عليها. في انتظار الرد.',
      attachments: []
    },
    {
      id: 4,
      user: 'سالم محمد',
      role: 'الإدارة القانونية',
      date: '2025-11-13 11:00',
      content: 'تم الرد على الملاحظات وإرسال النسخة المعدلة. يرجى المراجعة والموافقة النهائية.',
      attachments: [{ name: 'مرفق 1', type: 'file' }]
    }
  ];

  const timeline = [
    {
      id: 1,
      title: 'تعيين للمتابعة',
      user: 'نورهان علي',
      role: 'مكتب المحافظ للمراجعة والموافقة',
      description: 'تم تعيين المستند لمكتب المحافظ للمراجعة والموافقة',
      date: '2025-11-02',
      status: 'completed'
    },
    {
      id: 2,
      title: 'استقبال المستند',
      user: 'فاطمة أحمد',
      description: 'تم استقبال المستند وتسجيل الملاحظات الأولية',
      date: '2025-11-05',
      status: 'completed'
    },
    {
      id: 3,
      title: 'مراجعة أولية',
      user: 'علي محمود',
      description: 'تمت المراجعة الأولية وتحديد النقاط التي تحتاج توضيح',
      date: '2025-11-08',
      status: 'completed'
    },
    {
      id: 4,
      title: 'إحالة للتوضيح',
      user: 'نورهان علي',
      description: 'تم إرسال الملاحظات للإدارة القانونية',
      date: '2025-11-10',
      status: 'completed'
    },
    {
      id: 5,
      title: 'رد من الإدارة القانونية',
      user: 'سالم محمد',
      description: 'تم الرد على الملاحظات وإرسال النسخة المعدلة',
      date: '2025-11-13',
      status: 'current'
    }
  ];

  const attachments = [
    {
      id: 1,
      name: 'ملاحظات_المراجعة_الأولية.pdf',
      size: '0.8 MB',
      user: 'علي محمود',
      date: '2025-11-08 09:50',
      type: 'pdf'
    },
    {
      id: 2,
      name: 'الموازنة_المعدلة_v2.docx',
      size: '1.2 MB',
      user: 'سالم محمد',
      date: '2025-11-13 11:05',
      type: 'docx'
    }
  ];

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case 'عالية': return 'bg-red-100 text-red-700 border-red-200';
      case 'متوسطة': return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'منخفضة': return 'bg-green-100 text-green-700 border-green-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'مفتوح': return 'bg-sky-500 text-white';
      case 'مغلق': return 'bg-gray-500 text-white';
      default: return 'bg-blue-500 text-white';
    }
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen" dir="rtl">
      <div className="max-w-screen-2xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <span>الرئيسية</span>
            <span className="mx-2">/</span>
            <span>المتابعة</span>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">تفاصيل التتبع</span>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-1">تفاصيل تتبع المستند</h1>
              <p className="text-gray-600">متابعة المستند رقم {documentInfo.id}</p>
            </div>
          </div>
        </header>

        {/* Top Info Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
       

          {/* Main Document Info Card */}
          <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm p-6 relative">
            <div className="absolute top-6 left-6">
              <span className={`px-3 py-1 rounded-md text-sm font-medium ${getStatusBadge(documentInfo.status)}`}>
                {documentInfo.status}
              </span>
            </div>
            
            <div className="mb-8 pr-0 sm:pr-4">
              <h2 className="text-xl font-bold text-gray-900 mb-2">{documentInfo.subject}</h2>
              <p className="text-gray-500">رقم المستند: {documentInfo.id}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
              <div>
                <p className="text-sm text-gray-500 mb-1">الأولوية</p>
                <span className={`inline-block px-3 py-1 rounded-md text-sm font-medium border ${getPriorityBadge(documentInfo.priority)}`}>
                  أولوية {documentInfo.priority}
                </span>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">معرف التتبع</p>
                <p className="font-medium text-gray-900 font-mono">{documentInfo.trackingId}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">تاريخ التعيين</p>
                <p className="font-medium text-gray-900 font-mono">{documentInfo.assignedDate}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">معين إلى</p>
                <p className="font-medium text-gray-900">{documentInfo.assignedTo}</p>
              </div>
            </div>
          </div>
             {/* Quick Info Card */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-6">معلومات سريعة</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
                <span className="text-gray-500">تاريخ الاستحقاق</span>
                <span className="font-medium text-gray-900">{documentInfo.dueDate}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
                <span className="text-gray-500">آخر تحديث</span>
                <span className="font-medium text-gray-900" dir="ltr">{documentInfo.lastUpdate}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
                <span className="text-gray-500">الملاحظات</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm font-medium">{documentInfo.notesCount}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
                <span className="text-gray-500">المرفقات</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm font-medium">{documentInfo.attachmentsCount}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-6 overflow-hidden">
          <div className="p-4 border-b border-gray-100">
            <div className="flex p-1 bg-gray-100 rounded-lg overflow-x-auto">
              <button
                onClick={() => setActiveTab('overview')}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium rounded-md transition-all duration-200 whitespace-nowrap ${
                  activeTab === 'overview'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200/50'
                }`}
              >
                <FiEye className="w-4 h-4" />
                نظرة عامة
              </button>
              <button
                onClick={() => setActiveTab('notes')}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium rounded-md transition-all duration-200 whitespace-nowrap ${
                  activeTab === 'notes'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200/50'
                }`}
              >
                <FiMessageSquare className="w-4 h-4" />
                الملاحظات
              </button>
              <button
                onClick={() => setActiveTab('timeline')}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium rounded-md transition-all duration-200 whitespace-nowrap ${
                  activeTab === 'timeline'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200/50'
                }`}
              >
                <FiClock className="w-4 h-4" />
                المسار الزمني
              </button>
              <button
                onClick={() => setActiveTab('attachments')}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium rounded-md transition-all duration-200 whitespace-nowrap ${
                  activeTab === 'attachments'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200/50'
                }`}
              >
                <FiPaperclip className="w-4 h-4" />
                المرفقات
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">معلومات المستند</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between py-3 border-b border-gray-100">
                        <span className="text-gray-500">رقم المستند:</span>
                        <span className="font-medium text-gray-900">{documentInfo.id}</span>
                      </div>
                      <div className="flex justify-between py-3 border-b border-gray-100">
                        <span className="text-gray-500">معرف المستند:</span>
                        <span className="font-medium text-gray-900">{documentInfo.docId}</span>
                      </div>
                      <div className="flex justify-between py-3 border-b border-gray-100">
                        <span className="text-gray-500">الموضوع:</span>
                        <span className="font-medium text-gray-900">{documentInfo.subject}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">معلومات المتابعة</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between py-3 border-b border-gray-100">
                        <span className="text-gray-500">الحالة:</span>
                        <span className={`px-2 py-0.5 rounded text-xs font-medium ${getStatusBadge(documentInfo.status)}`}>{documentInfo.status}</span>
                      </div>
                      <div className="flex justify-between py-3 border-b border-gray-100">
                        <span className="text-gray-500">الأولوية:</span>
                        <span className={`px-2 py-0.5 rounded text-xs font-medium border ${getPriorityBadge(documentInfo.priority)}`}>أولوية {documentInfo.priority}</span>
                      </div>
                      <div className="flex justify-between py-3 border-b border-gray-100">
                        <span className="text-gray-500">معين إلى:</span>
                        <span className="font-medium text-gray-900">{documentInfo.assignedTo}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">الجدول الزمني</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="text-gray-500">تاريخ التعيين:</span>
                      <span className="font-medium text-gray-900 font-mono">{documentInfo.assignedDate}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="text-gray-500">تاريخ الاستحقاق:</span>
                      <span className="font-medium text-gray-900 font-mono">{documentInfo.dueDate}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="text-gray-500">آخر تحديث:</span>
                      <span className="font-medium text-gray-900 font-mono" dir="ltr">{documentInfo.lastUpdate}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Notes Tab */}
            {activeTab === 'notes' && (
              <div className="space-y-6">
                {notes.map((note) => (
                  <div key={note.id} className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                          <FiUser className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-bold text-gray-900">{note.user}</h4>
                            <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full border border-gray-200">{note.role}</span>
                          </div>
                          <p className="text-xs text-gray-500 mt-1 font-mono">{note.date}</p>
                        </div>
                      </div>
                      {note.attachments.length > 0 && (
                        <span className="flex items-center text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded border border-gray-200">
                          <FiPaperclip className="ml-1 w-3 h-3" />
                          {note.attachments.length}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">{note.content}</p>
                    {note.attachments.length > 0 && (
                      <div className="flex items-center gap-2">
                        {note.attachments.map((att, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-blue-600 bg-blue-50 px-3 py-1.5 rounded-md hover:bg-blue-100 cursor-pointer transition-colors">
                            <FiPaperclip className="w-4 h-4" />
                            <span>{att.name}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                <button className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all flex items-center justify-center gap-2 font-medium">
                  <FiPlus className="w-5 h-5" />
                  إضافة ملاحظة جديدة
                </button>
              </div>
            )}

            {/* Timeline Tab */}
            {activeTab === 'timeline' && (
              <div className="relative pr-4">
                <div className="absolute top-0 right-[7px] bottom-0 w-0.5 bg-gray-200"></div>
                <div className="space-y-8">
                  {timeline.map((event) => (
                    <div key={event.id} className="relative flex gap-6">
                      <div className={`absolute right-0 w-4 h-4 rounded-full border-2 z-10 mt-1.5 ${
                        event.status === 'completed' ? 'bg-blue-600 border-blue-600' : 'bg-white border-blue-600'
                      }`}></div>
                      <div className="mr-8 flex-1">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-1">
                          <h4 className="text-lg font-bold text-gray-900">{event.title}</h4>
                          <span className="text-sm text-gray-500 font-mono">{event.date}</span>
                        </div>
                        <div className="text-sm text-gray-600 mb-2">
                          بواسطة: <span className="font-medium text-gray-900">{event.user}</span>
                        </div>
                        <p className="text-gray-600">{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Attachments Tab */}
            {activeTab === 'attachments' && (
              <div className="space-y-4">
                {attachments.map((file) => (
                  <div key={file.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500">
                        <FiFileText className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1" dir="ltr">{file.name}</h4>
                        <div className="flex items-center gap-3 text-xs text-gray-500">
                          <span dir="ltr">{file.size}</span>
                          <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                          <span>رفع بواسطة: {file.user}</span>
                          <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                          <span className="font-mono">{file.date}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
                        <FiEye className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors">
                        <FiDownload className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
                
                <button className="w-full py-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all flex flex-col items-center justify-center gap-2">
                  <FiUpload className="w-6 h-6" />
                  <span className="font-medium">رفع مرفق جديد</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackingDetails;
