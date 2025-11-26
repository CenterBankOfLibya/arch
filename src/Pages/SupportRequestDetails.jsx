import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import fetchData from "../Api/FetchApi";

export default function SupportRequestDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deptMap, setDeptMap] = useState({});
    // Status update state
    const statusOptions = [
      { value: "pending", label: "قيد الانتظار", icon: "⏳", color: "bg-yellow-100 text-yellow-700" },
      { value: "assigned", label: "مُعيّن", icon: "👨‍🔧", color: "bg-blue-100 text-blue-700" },
      { value: "in_progress", label: "قيد التنفيذ", icon: "🔄", color: "bg-indigo-100 text-indigo-700" },
      { value: "completed", label: "مكتمل", icon: "✅", color: "bg-green-100 text-green-700" },
      { value: "cancelled", label: "ملغي", icon: "❌", color: "bg-gray-200 text-gray-700" }
    ];
    const [status, setStatus] = useState("");
    const [statusLoading, setStatusLoading] = useState(false);
    const [statusError, setStatusError] = useState("");
    const [statusSuccess, setStatusSuccess] = useState("");
    const [showConfirm, setShowConfirm] = useState(false);

  const load = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchData(`support-requests/${id}`, 'GET');
      const obj = data?.data ?? data; // handle {data: {...}} or plain object
      setItem(obj);
      
    } catch (err) {
      setError(err?.message || 'فشل في جلب تفاصيل الطلب');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
    (async () => {
      try {
        const dep = await fetchData('departments', 'GET');
        const list = Array.isArray(dep) ? dep : dep?.data || [];
        const map = {};
        list.forEach(d => {
          if (d && (d.id != null)) map[d.id] = d.name || d.label || String(d.id);
        });
        setDeptMap(map);
      } catch {}
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const fmtDate = (v) => {
    if (!v) return '-';
    try {
      const d = new Date(v);
      return new Intl.DateTimeFormat('ar', { dateStyle: 'medium', timeStyle: 'short' }).format(d);
    } catch { return v; }
  };
    // Handle status update
    const handleStatusUpdate = async () => {
      if (!status) return;
      setStatusLoading(true);
      setStatusError("");
      setStatusSuccess("");
      
      try {
        await fetchData(`support-requests/${id}/status`, "PUT",  JSON.stringify({status}));
        setStatusSuccess("تم تحديث الحالة بنجاح");
        setShowConfirm(false);
        load();
      } catch (err) {
        setStatusError(err?.message || "فشل في تحديث الحالة");
      } finally {
        setStatusLoading(false);
      }
    };

  return (
    <div className="p-4 md:p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">تفاصيل طلب الدعم</h1>
        <div className="flex gap-2">
          <button onClick={() => navigate(-1)} className="px-3 py-2 rounded border bg-white hover:bg-gray-50">رجوع</button>
          <Link to="/admin/support" className="px-3 py-2 rounded border bg-white hover:bg-gray-50">قائمة الطلبات</Link>
        </div>
      </div>

      {loading && <div>جاري التحميل...</div>}
      {error && <div className="text-red-600 mb-4">{error}</div>}

      {!loading && !error && item && (
        <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="رقم الطلب" value={item.request_number} />
            <Field label="تاريخ الطلب" value={fmtDate(item.request_date)} />
            <Field label="العنوان" value={item.title || '-'} />
            <Field label="الإدارة" value={item.requesting_management?.name || deptMap[item.requesting_management] || item.requesting_management} />
            <Field label="الموظف" value={item.employee?.name ? `${item.employee.name} (${item.employee_id})` : item.employee_id} />
            <Field label="نوع المشكلة" value={item.problem_type?.name || item.problem_type_id || '-'} />
            <Field label="الإجراء المتخذ" value={item.action_taken || '-'} />
            <Field label="الأولوية" value={item.priority} type="badge-priority" />
            <Field label="الحالة" value={item.status} type="badge-status" />
            <Field label="تاريخ الإكمال" value={fmtDate(item.completed_at)} />
            <Field label="أنشئ في" value={fmtDate(item.created_at)} />
            <Field label="آخر تحديث" value={fmtDate(item.updated_at)} />
          </div>

          {/* Assigned engineers list */}
          <div className="mt-4">
            <h2 className="font-semibold mb-2">المهندسون المعيّنون</h2>
            <div className="text-sm">
              {Array.isArray(item.assigned_engineers) && item.assigned_engineers.length > 0 ? (
                <ul className="list-disc pr-5">
                  {item.assigned_engineers.map((eng, idx) => {
                    const name = typeof eng === 'object' ? (eng.name || eng.full_name || eng.email || eng.employee_id || eng.id) : eng;
                    return <li key={idx}>{name}</li>;
                  })}
                </ul>
              ) : (
                <span className="text-gray-500">-</span>
              )}
            </div>
          </div>

          {/* File attachment */}
          <div className="mt-4">
            <h2 className="font-semibold mb-2">المرفق</h2>
            {item.file?.full_url ? (
              <a
                href={item.file.full_url}
                target="_blank"
                rel="noreferrer"
                className="text-indigo-600 hover:underline break-all"
              >
                {item.file.name || item.file.base_path || 'فتح الملف'}
              </a>
            ) : (
              <div className="text-sm text-gray-500">{item.file_path || '-'}</div>
            )}
          </div>

          <div className="mt-6">
            <h2 className="font-semibold mb-2">الوصف</h2>
            <div className="p-3 border rounded bg-gray-50 whitespace-pre-wrap text-sm">
              {item.description || '-'}
            </div>
          </div>
         
          
            {/* Status update section */}
        {  localStorage.getItem("permissions") == '["admin_department"]'
         ? 
        <div className="mt-8 p-4 rounded-xl border bg-gray-50 shadow-sm">
              <h2 className="font-semibold mb-4 text-lg flex items-center gap-2">
                <span>تحديث الحالة</span>
                {statusOptions.find(opt => opt.value === status) && (
                  <span className={`px-2 py-1 rounded text-xs font-bold ${statusOptions.find(opt => opt.value === status)?.color} flex items-center gap-1`}>
                    {statusOptions.find(opt => opt.value === status)?.icon}
                    {statusOptions.find(opt => opt.value === status)?.label}
                  </span>
                )}
              </h2>
              <div className="flex flex-col md:flex-row items-center gap-3">
                <select
                  className="border rounded px-3 py-2 min-w-[160px] text-base focus:ring focus:border-indigo-400"
                  value={status}
                  onChange={e => setStatus(e.target.value)}
                  disabled={statusLoading}
                >
                  <option value="">اختر الحالة</option>
                  {statusOptions.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.icon} {opt.label}</option>
                  ))}
                </select>
                <button
                  className="px-4 py-2 rounded bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 transition"
                  onClick={() => setShowConfirm(true)}
                  disabled={statusLoading || !status}
                >
                  {statusLoading ? "جاري التحديث..." : "تحديث الحالة"}
                </button>
              </div>
              {showConfirm && (
                <div className="fixed inset-0 bg-opacity-30 flex items-center justify-center z-50">
                  <div className="bg-white rounded-lg shadow-lg p-6 min-w-[300px] text-center">
                    <div className="mb-4 text-lg">هل أنت متأكد من تحديث الحالة إلى
                      <span className={`mx-2 px-2 py-1 rounded text-xs font-bold ${statusOptions.find(opt => opt.value === status)?.color} inline-flex items-center gap-1`}>
                        {statusOptions.find(opt => opt.value === status)?.icon}
                        {statusOptions.find(opt => opt.value === status)?.label}
                      </span>؟
                    </div>
                    <div className="flex justify-center gap-4">
                      <button className="px-4 py-2 rounded bg-indigo-600 text-white font-semibold hover:bg-indigo-700" onClick={handleStatusUpdate} disabled={statusLoading}>تأكيد</button>
                      <button className="px-4 py-2 rounded bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300" onClick={() => setShowConfirm(false)} disabled={statusLoading}>إلغاء</button>
                    </div>
                  </div>
                </div>
              )}
              {statusError && <div className="text-red-600 mt-2 text-sm">{statusError}</div>}
              {statusSuccess && <div className="text-green-600 mt-2 text-sm">{statusSuccess}</div>}
            </div> : <></>}
        </div>
      )}
    </div>
  );
}

function Field({ label, value, type }) {
  if (type === 'badge-priority') {
    const color = value === 'critical' ? 'bg-red-100 text-red-700' :
      value === 'high' ? 'bg-orange-100 text-orange-700' :
      value === 'medium' ? 'bg-yellow-100 text-yellow-700' :
      value === 'low' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700';
    return (
      <div>
        <div className="text-xs text-gray-500 mb-1">{label}</div>
        <span className={`text-xs px-2 py-1 rounded ${color}`}>{value || '-'}</span>
      </div>
    );
  }
  if (type === 'badge-status') {
    const color = value === 'closed' ? 'bg-green-100 text-green-700' :
      value === 'assigned' ? 'bg-blue-100 text-blue-700' :
      value === 'pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-700';
    return (
      <div>
        <div className="text-xs text-gray-500 mb-1">{label}</div>
        <span className={`text-xs px-2 py-1 rounded ${color}`}>{value || '-'}</span>
      </div>
    );
  }
  return (
    <div>
      <div className="text-xs text-gray-500 mb-1">{label}</div>
      <div className="text-sm">{value ?? '-'}</div>
    </div>
  );
}
