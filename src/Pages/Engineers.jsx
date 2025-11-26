import React, { useEffect, useState } from 'react';
import fetchData from '../Api/FetchApi';

export default function Engineers() {
  const [engineers, setEngineers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchData('engineers?per_page=90', 'GET');
        setEngineers(Array.isArray(data) ? data : data?.data || []);
      } catch (e) {
        setError(e?.message || 'فشل في جلب قائمة المهندسين');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <div className="p-4" dir="rtl">
      <div className="bg-white rounded-xl p-4 shadow border">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold text-[#2446ed]">قائمة المهندسين</h1>
          <button
            onClick={() => window.location.reload()}
            className="px-3 py-1 rounded border bg-gray-50 hover:bg-gray-100"
          >
            تحديث
          </button>
        </div>
        {loading && <div>جارٍ التحميل...</div>}
        {error && <div className="text-red-600 text-sm mb-2">{error}</div>}
        {!loading && !error && (
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-gray-600">
                  <th className="px-3 py-2 text-right">#</th>
                  <th className="px-3 py-2 text-right">الاسم</th>
                  <th className="px-3 py-2 text-right">البريد/الهاتف</th>
                  <th className="px-3 py-2 text-right">القسم</th>
                </tr>
              </thead>
              <tbody>
                {engineers.map((e) => (
                  <tr key={e.id} className="border-b hover:bg-gray-50">
                    <td className="px-3 py-2">{e.id}</td>
                    <td className="px-3 py-2">{e.name || e.full_name || '-'}</td>
                    <td className="px-3 py-2">{e.email || e.phone || '-'}</td>
                    <td className="px-3 py-2">{e.department?.name || '-'}</td>
                  </tr>
                ))}
                {engineers.length === 0 && (
                  <tr>
                    <td colSpan={4} className="px-3 py-6 text-center text-gray-500">لا توجد بيانات</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
