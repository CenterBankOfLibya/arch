import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fetchData from "../Api/FetchApi";

export default function SupportRequests() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [meta, setMeta] = useState(null);
  const [deptMap, setDeptMap] = useState({});

  const loadRequests = async (pageNum = 1) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchData(`support-requests?page=${pageNum}`, "GET");
      const list = Array.isArray(data) ? data : data?.data || [];
      setRequests(list);
      setMeta(data?.meta || null);
      setPage(pageNum);
    } catch (err) {
      setError(err?.message || "فشل في جلب طلبات الدعم");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRequests(1);
    // load departments to map ID -> name
    (async () => {
      try {
        const dep = await fetchData("departments", "GET");
        const list = Array.isArray(dep) ? dep : dep?.data || [];
        const map = {};
        list.forEach(d => {
          if (d && (d.id != null)) map[d.id] = d.name || d.label || String(d.id);
        });
        setDeptMap(map);
      } catch {}
    })();
  }, []);

  const fmtDate = (iso) => {
    if (!iso) return "-";
    try {
      const d = new Date(iso);
      return new Intl.DateTimeFormat('ar', { dateStyle: 'medium', timeStyle: 'short' }).format(d);
    } catch {
      return iso;
    }
  };

  return (
    <div className="p-4 md:p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">طلبات الدعم</h1>
        <div className="flex gap-2">
          <button
            onClick={() => loadRequests(page)}
            className="px-3 py-2 rounded border bg-white hover:bg-gray-50"
          >
            تحديث
          </button>
          <Link
            to="/admin/support/add"
            className="px-3 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700"
          >
            إضافة طلب جديد
          </Link>
        </div>
      </div>

      {loading && <div>جاري التحميل...</div>}
      {error && <div className="text-red-600 mb-4">{error}</div>}

      {!loading && !error && (
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-right text-sm font-semibold">#</th>
                  <th className="px-4 py-2 text-right text-sm font-semibold">رقم الطلب</th>
                  <th className="px-4 py-2 text-right text-sm font-semibold">الوصف</th>
                  <th className="px-4 py-2 text-right text-sm font-semibold">الإدارة</th>
                  <th className="px-4 py-2 text-right text-sm font-semibold">الموظف</th>
                  <th className="px-4 py-2 text-right text-sm font-semibold">الأولوية</th>
                  <th className="px-4 py-2 text-right text-sm font-semibold">الحالة</th>
                  <th className="px-4 py-2 text-right text-sm font-semibold">تاريخ الطلب</th>
                </tr>
              </thead>
              <tbody>
                {requests.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="text-center py-6 text-gray-500">
                      لا توجد بيانات.
                    </td>
                  </tr>
                ) : (
          requests.map((r, idx) => {
                    const deptName = deptMap[r.requesting_management] || r?.requesting_management?.name || r?.requesting_management?.name  || r?.requesting_management || "-";
                    const status = r?.status || "-"; // pending, assigned, closed
                    const priority = r?.priority || "-";
                    const date = r?.request_date || r?.created_at || r?.createdAt || r?.date || "-";
                    return (
            <tr key={r.id ?? idx} className="border-t hover:bg-gray-50 cursor-pointer" onClick={() => window.location.hash = `#/admin/support/${r.id}` }>
                        <td className="px-4 py-2 text-sm">{r.id ?? idx + 1}</td>
                        <td className="px-4 py-2 text-sm">{r.request_number || '-'}</td>
                        <td className="px-4 py-2 text-sm">{r.description || '-'}</td>
                        <td className="px-4 py-2 text-sm">{deptName}</td>
                        <td className="px-4 py-2 text-sm">{r.employee_id ?? '-'}</td>
                        <td className="px-4 py-2 text-sm">
                          <span className={`px-2 py-1 rounded text-xs ${
                            priority === "critical" ? "bg-red-100 text-red-700" :
                            priority === "high" ? "bg-orange-100 text-orange-700" :
                            priority === "medium" ? "bg-yellow-100 text-yellow-700" :
                            priority === "low" ? "bg-green-100 text-green-700" :
                            "bg-gray-100 text-gray-700"
                          }`}>
                            {priority}
                          </span>
                        </td>
                        <td className="px-4 py-2 text-sm">
                          <span className={`px-2 py-1 rounded text-xs ${
                            status === "closed" || status === "مغلق" ? "bg-green-100 text-green-700" :
                            status === "assigned" ? "bg-blue-100 text-blue-700" :
                            status === "pending" ? "bg-yellow-100 text-yellow-700" :
                            "bg-gray-100 text-gray-700"
                          }`}>
                            {status}
                          </span>
                        </td>
                        <td className="px-4 py-2 text-sm">{fmtDate(date)}</td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
          {meta && (
            <div className="flex items-center justify-between p-3 border-t bg-gray-50 text-sm">
              <div>
                الصفحة {meta.current_page} من {meta.last_page} • إجمالي {meta.total}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => loadRequests(Math.max(1, page - 1))}
                  disabled={page <= 1}
                  className={`px-3 py-1 rounded border ${page <= 1 ? 'opacity-50 cursor-not-allowed' : 'bg-white hover:bg-gray-50'}`}
                >
                  السابق
                </button>
                <button
                  onClick={() => loadRequests(Math.min(meta.last_page || page + 1, page + 1))}
                  disabled={page >= (meta.last_page || page)}
                  className={`px-3 py-1 rounded border ${page >= (meta.last_page || page) ? 'opacity-50 cursor-not-allowed' : 'bg-white hover:bg-gray-50'}`}
                >
                  التالي
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
