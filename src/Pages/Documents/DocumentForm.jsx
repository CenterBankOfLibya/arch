
import React from "react";
import{ useState } from "react";
import { PlusIcon, PaperClipIcon } from "@heroicons/react/24/outline";

export default function DocumentForm() {
  const [tab, setTab] = useState("main");
  return (
    <div className="min-h-screen bg-[#F8FAFC] p-0 " dir="rtl">
      <div className="container mx-auto px-8 pt-8">
        {/* Breadcrumbs and Title */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div className="space-y-1">
            <nav className="flex items-center gap-2 text-sm text-[#98A2B3]">
              <span>الرئيسية</span>
              <span className="mx-1">/</span>
              <span>المستندات</span>
              <span className="mx-1">/</span>
              <span>نموذج المستند</span>
            </nav>
            <h1 className="text-3xl font-bold text-[#101828]">نموذج المستند</h1>
            <p className="text-[#667085] text-base">إدخال بيانات المستندات الجديدة أو تعديل المستندات الحالية</p>
          </div>
        </div>
        {/* Tabs */}
        <div className="flex w-full bg-[#F2F4F7] rounded-lg p-1 mb-8">
          <button
            className={`flex-1 py-2 text-center text-base font-medium transition-colors rounded-md ${tab === "main" ? "bg-white shadow-sm text-[#101828]" : "text-[#667085]"}`}
            onClick={() => setTab("main")}
          >
            البيانات الأساسية
          </button>
          <button
            className={`flex-1 py-2 text-center text-base font-medium transition-colors rounded-md ${tab === "attachments" ? "bg-white shadow-sm text-[#101828]" : "text-[#667085]"}`}
            onClick={() => setTab("attachments")}
          >
            المرفقات
          </button>
        </div>
        {/* Tab Content */}
        {tab === "main" ? <MainForm /> : <AttachmentsForm />}
        {/* Footer Buttons */}
        <div className="flex flex-row-reverse items-center gap-2 border-t border-[#EAECF0] pt-6 mt-8 pb-4">
          <button className="inline-flex items-center gap-2 bg-[#1976D2] text-white font-medium rounded-md px-6 py-2 hover:bg-[#1565C0] focus:outline-none focus:ring-2 focus:ring-[#1976D2]">
            حفظ المستند
          </button>
          <button className="inline-flex items-center gap-2 border border-[#D0D5DD] bg-white text-[#344054] font-medium rounded-md px-6 py-2 hover:bg-[#F2F4F7]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v2.25A2.25 2.25 0 0 1 17.25 18.75H6.75A2.25 2.25 0 0 1 4.5 16.5v-2.25m15 0L12 21m7.5-6.75L12 21m0 0L4.5 14.25" />
            </svg>
            حفظ كمسودة
          </button>
          <button className="inline-flex items-center gap-2 border border-[#D0D5DD] bg-white text-[#344054] font-medium rounded-md px-6 py-2 hover:bg-[#F2F4F7]">
            إلغاء
          </button>
        </div>
      
      </div>
    </div>
  );
}

function MainForm() {
  return (
    <form className="bg-white rounded-xl border border-[#EAECF0] p-8 mb-8">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-[#101828] mb-1">معلومات المستند</h2>
        <p className="text-sm text-[#98A2B3]">أدخل البيانات الأساسية للمستند</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-[#344054] mb-1">رقم المستند <span className="text-red-500">*</span></label>
          <input type="text" className="w-full rounded-md border border-[#D0D5DD] bg-[#F9FAFB] px-3 py-2 text-base focus:outline-none focus:ring-1 focus:ring-[#1976D2]" placeholder="مثال: 00123" />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#344054] mb-1">الرقم الإشاري</label>
          <input type="text" className="w-full rounded-md border border-[#D0D5DD] bg-[#F9FAFB] px-3 py-2 text-base focus:outline-none focus:ring-1 focus:ring-[#1976D2]" placeholder="مثال: L-25/456" />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#344054] mb-1">تاريخ التسجيل <span className="text-red-500">*</span></label>
          <input type="date" className="w-full rounded-md border border-[#D0D5DD] bg-[#F9FAFB] px-3 py-2 text-base focus:outline-none focus:ring-1 focus:ring-[#1976D2]" />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#344054] mb-1">السنة</label>
          <input type="text" className="w-full rounded-md border border-[#D0D5DD] bg-[#F9FAFB] px-3 py-2 text-base focus:outline-none focus:ring-1 focus:ring-[#1976D2]" placeholder="2025" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-[#344054] mb-1">الموضوع <span className="text-red-500">*</span></label>
          <input type="text" className="w-full rounded-md border border-[#D0D5DD] bg-[#F9FAFB] px-3 py-2 text-base focus:outline-none focus:ring-1 focus:ring-[#1976D2]" placeholder="أكمل موضوع المستند" />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#344054] mb-1">المرسل <span className="text-red-500">*</span></label>
          <select className="w-full rounded-md border border-[#D0D5DD] bg-[#F9FAFB] px-3 py-2 text-base focus:outline-none focus:ring-1 focus:ring-[#1976D2] text-[#667085]">
            <option value="">اختر المرسل</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-[#344054] mb-1">المرسل إليه</label>
          <select className="w-full rounded-md border border-[#D0D5DD] bg-[#F9FAFB] px-3 py-2 text-base focus:outline-none focus:ring-1 focus:ring-[#1976D2] text-[#667085]">
            <option value="">اختر المرسل إليه</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-[#344054] mb-1">نوع المستند <span className="text-red-500">*</span></label>
          <select className="w-full rounded-md border border-[#D0D5DD] bg-[#F9FAFB] px-3 py-2 text-base focus:outline-none focus:ring-1 focus:ring-[#1976D2] text-[#667085]">
            <option value="">اختر نوع المستند</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-[#344054] mb-1">الملاحظات</label>
          <textarea className="w-full rounded-md border border-[#D0D5DD] bg-[#F9FAFB] px-3 py-2 text-base focus:outline-none focus:ring-1 focus:ring-[#1976D2] min-h-[60px]" placeholder="أضف أي ملاحظات إضافية عن المستند"></textarea>
        </div>
      </div>
    </form>
  );
}

function AttachmentsForm() {
  return (
    <form className="bg-white rounded-xl border border-[#EAECF0] p-8 mb-8">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-[#101828] mb-1">المرفقات</h2>
        <p className="text-sm text-[#98A2B3]">أضف الملفات والمستندات المرتبطة بهذا المستند</p>
      </div>
      <div className="border-2 border-dashed border-[#D0D5DD] rounded-lg bg-[#F9FAFB] flex flex-col items-center justify-center py-16 mb-8">
        <PaperClipIcon className="w-12 h-12 text-[#98A2B3] mb-4" />
        <div className="text-[#101828] font-medium mb-1">اسحب الملفات هنا أو انقر للاختيار</div>
        <div className="text-xs text-[#98A2B3] mb-4">الملفات المدعومة: PDF, Word, الصور (JPG, PNG, GIF) الحد الأقصى للحجم: 10 ميجابايت</div>
        <button type="button" className="inline-flex items-center gap-2 bg-[#1976D2] text-white font-medium rounded-md px-4 py-2 hover:bg-[#1565C0] focus:outline-none focus:ring-2 focus:ring-[#1976D2]">
          <PlusIcon className="w-5 h-5 ml-2" />اختر الملفات
        </button>
        <div className="text-[#98A2B3] text-sm mt-8">لم يتم إضافة أي ملفات حتى الآن</div>
      </div>
    </form>
  );
}