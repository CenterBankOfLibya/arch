import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import fetchData from "../Api/FetchApi";
import "scanner-js"; // side-effect import attaches window.scanner
import { useDropzone } from "react-dropzone";
import Select from 'react-select';
const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const focusedStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

export default function AddSupportRequest() {
  const navigate = useNavigate();
  // Current user (if stored in localStorage)
  const currentUser = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem("user") || "null");
    } catch {
      return null;
    }
  }, []);
  const [departments, setDepartments] = useState([]);
  const [departmentsLoading, setDepartmentsLoading] = useState(false);
  const [departmentsError, setDepartmentsError] = useState(null);
  const [employees, setEmployees] = useState([]);
  const [employeesLoading, setEmployeesLoading] = useState(false);
  const [employeesError, setEmployeesError] = useState(null);
  const [engineers, setEngineers] = useState([]);
  const [engineersLoading, setEngineersLoading] = useState(false);
  const [engineersError, setEngineersError] = useState(null);
  const [selectedEngineerIds, setSelectedEngineerIds] = useState([]);
  const engineerOptions = useMemo(() =>
    (engineers || []).map((eng) => {
      const val = eng?.employee_id ?? eng?.id;
      const label = eng?.name || eng?.full_name || eng?.email || `#${val ?? ''}`;
      return { value: val, label };
    }),
  [engineers]);
  const selectedEngineerNames = useMemo(() => {
    const ids = new Set((selectedEngineerIds || []).map((v) => String(v)));
    return engineerOptions.filter((o) => ids.has(String(o.value))).map((o) => o.label);
  }, [engineerOptions, selectedEngineerIds]);
  const employeeOptions = useMemo(() =>
    (employees || []).map((emp) => {
      const val = emp?.employee_id ?? emp?.id;
      const label = emp?.name || emp?.email || `#${val ?? ''}`;
      return { value: val, label };
    }),
  [employees]);
    const [files, setFiles] = React.useState([]);
  const onDrop = React.useCallback((acceptedFiles) => {
    setFiles((prev) => [...prev, ...acceptedFiles]);
  }, []);
  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: "application/pdf",
    maxFiles: 1,
    maxSize: 19548576,

    onDrop,
  });

   const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );
  const fileList = acceptedFiles.map((file) => (
    <li key={file.name}>
      {file.name} - {file.size} bytes
    </li>
  ));
  const handleUploadFile = async () => {
    try {
      if (!acceptedFiles || !acceptedFiles.length) return;
      const fd = new FormData();
      fd.append('file', acceptedFiles[0]);
      // Append any additional fields your backend expects, e.g., request_id
      await fetchData('support-requests/upload-file', 'POST', fd);
    } catch (e) {
      // fetchData toasts errors
    }
  };

  const [form, setForm] = useState({
    title: "",
    description: "",
    requesting_department_id: "",
    action_taken: "",
    priority: "medium",
    request_type: "",
    employee_id: "", // Default to current user
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [scanResultUrl, setScanResultUrl] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
 
    setForm((f) => ({ ...f, [name]: value }));
  };
  const handleEmployeeChange = (option) => {
    setForm((f) => ({ ...f, employee_id: option ? option.value : '' }));
  };

  // Load departments and employees on mount
  useEffect(() => {
    const loadDepartments = async () => {
      setDepartmentsLoading(true);
      setDepartmentsError(null);
      try {
        const data = await fetchData("departments?list", "GET");
        const list = Array.isArray(data) ? data : data?.data || [];
        setDepartments(list);
      } catch (err) {
        setDepartmentsError(err?.message || "فشل في جلب الإدارات");
      } finally {
        setDepartmentsLoading(false);
      }
    };

    const loadEmployees = async () => {
      setEmployeesLoading(true);
      setEmployeesError(null);
      try {
        const data = await fetchData("employees?list", "GET");
        const list = Array.isArray(data) ? data : data?.data || [];
        setEmployees(list);
      } catch (err) {
        setEmployeesError(err?.message || "فشل في جلب الموظفين");
      } finally {
        setEmployeesLoading(false);
      }
    };

    const loadEngineers = async () => {
      setEngineersLoading(true);
      setEngineersError(null);
      try {
        const data = await fetchData("engineers?list", "GET");
        const list = Array.isArray(data) ? data : data?.data || [];
        setEngineers(list);
      } catch (err) {
        setEngineersError(err?.message || "فشل في جلب المهندسين");
      } finally {
        setEngineersLoading(false);
      }
    };

    loadDepartments();
    loadEmployees();
    loadEngineers();
  }, []);

  const formatTimestamp = (date) => {
    const pad = (n) => String(n).padStart(2, '0');
    const y = date.getFullYear();
    const m = pad(date.getMonth() + 1);
    const d = pad(date.getDate());
    let h = date.getHours();
    const min = pad(date.getMinutes());
    const s = pad(date.getSeconds());
    const ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12;
    if (h === 0) h = 12;
    const hh = pad(h);
    return `${y}-${m}-${d} ${hh}:${min}:${s} ${ampm}`;
  };

  const mapProblemTypeId = (type) => {
    // Map request_type string to numeric problem_type_id
    if (String(type).toLowerCase() === 'development') return 2;
    return 1; // default maintenance
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const now = new Date();
      const payload = {
        title: form.title || null,
        requesting_department_id: form.requesting_department_id ? Number(form.requesting_department_id) : undefined,
        description: form.description,
        employee_id: form.employee_id,
        problem_type_id: form.request_type,
        action_taken: form.action_taken || '',
        status: 'assigned',
        priority: form.priority,
        engineer_ids: (selectedEngineerIds || []).map((id) => Number(id)),
  request_date: formatTimestamp(now),
        // Optional timestamp fields (server may override)
        created_at: formatTimestamp(now),
        updated_at: formatTimestamp(now),
      };

      // Include file or file_path if available
      if (scanResultUrl) {
        payload.file_path = scanResultUrl;
      }

      if (acceptedFiles && acceptedFiles.length) {
        const fd = new FormData();
        Object.entries(payload).forEach(([k, v]) => {
          if (v === undefined || v === null) return;
          if (Array.isArray(v)) {
            v.forEach((item) => fd.append(`${k}[]`, String(item)));
          } else {
            fd.append(k, String(v));
          }
        });
        fd.append('file', acceptedFiles[0]);
        // Also pass a simple file_path using file name if none provided
        if (!payload.file_path) {
          fd.append('file_path', acceptedFiles[0].name);
        }
        await fetchData('support-requests', 'POST', fd);
      } else {
        await fetchData('support-requests', 'POST', JSON.stringify(payload));
      }
  
    } catch (err) {
      setError(err?.message || "فشل حفظ الطلب");
    } finally {
      setSubmitting(false);
    }
  };
  const handleEngineersChange = (options) => {
    setSelectedEngineerIds((options || []).map((o) => String(o.value)));
  };
  const scanAndUploadDirectly = () => {
    if (!window || !window.scanner) {
      const el = document.getElementById("response");
      if (el) el.innerText = "المسّاح غير متاح في هذا المتصفح.";
      return;
    }
    window.scanner.scan(displayResponseOnPage, {
      output_settings: [
        {
          type: "save",
          format: "pdf",
          save_path: "${USERPROFILE}\\Desktop\\${TMS}${EXT}",
        },
      ],
    });
  };
  function displayResponseOnPage(successful, mesg, response) {
    if (!successful) {
      // On error
      document.getElementById("response").innerHTML = "Failed: " + mesg;
      return;
    }

    if (
      successful &&
      mesg != null &&
      mesg.toLowerCase().indexOf("user cancel") >= 0
    ) {
      // User cancelled.
      document.getElementById("response").innerHTML = "User cancelled";
      return;
    }

    if (window && window.scanner) {
      const path = window.scanner.getSaveResponse(response).replace(/[\[\]"]/g, "");
      setScanResultUrl(path);
    }
  }

  return (
    <div className="p-4 ">
      <h1 className="text-2xl font-bold mb-4">إضافة طلب دعم</h1>
      <form onSubmit={handleSubmit} className="bg-white rounded-xl  p-4 md:p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="title">عنوان الطلب</label>
          <input
            id="title"
            name="title"
            type="text"
            value={form.title}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="مثال: إصلاح طابعة الطابق الثاني"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="description">وصف المشكلة</label>
          <textarea
            id="description"
            name="description"
            value={form.description}
            onChange={handleChange}
            required
            rows={5}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="اشرح المشكلة أو الطلب بالتفصيل"
          />
        </div>
         <div>
          <label className="block text-sm font-medium mb-1" htmlFor="action_taken">
            الاجراء تم استخدامه  
          </label>
          <input
            id="action_taken"
            name="action_taken"
            type="text"
            value={form.action_taken}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="مثال: تم استبدال الطابعة"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="priority">الأولوية</label>
            <select
              id="priority"
              name="priority"
              value={form.priority}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
            >

              <option value="urgent">حرج</option>
              <option value="high">عالي</option>
              <option value="medium">متوسط</option>
              <option value="low">منخفض</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="employee_id">الموظف</label>
            <div className="w-full">
              <Select
                inputId="employee_id"
                isClearable
                isRtl
                isDisabled={employeesLoading}
                options={employeeOptions}
                placeholder={employeesLoading ? "جاري التحميل..." : "ابحث واختر الموظف..."}
                value={employeeOptions.find((o) => String(o.value) === String(form.employee_id)) || null}
                onChange={handleEmployeeChange}
                classNamePrefix="rs"
              />
            </div>
            {employeesError && (
              <div className="text-xs text-red-600 mt-1">{employeesError}</div>
            )}
            {selectedEngineerNames.length > 0 && (
              <div className="text-xs text-gray-500 mt-1">
                المهندسون المساعدون المختارون: {selectedEngineerNames.join(', ')}
              </div>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="engineers">المهندسون المساعدون</label>
            <div className="w-full">
              <Select
                inputId="engineer_ids"
                isMulti
                isRtl
                isDisabled={engineersLoading}
                options={engineerOptions}
                placeholder="اختر المهندسين..."
                value={engineerOptions.filter((o) => selectedEngineerIds.some((id) => String(id) === String(o.value)))}
                onChange={handleEngineersChange}
                classNamePrefix="rs"
              />
            </div>
            {engineersError && (
              <div className="text-xs text-red-600 mt-1">{engineersError}</div>
            )}
            <p className="text-xs text-gray-500 mt-1">يمكنك البحث واختيار أكثر من مهندس بسهولة.</p>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="request_type">نوع المشكلة</label>
            <select
              id="request_type"
              name="request_type"
              value={form.request_type}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
            >
               <option value=""></option>
              <option value="4">Access Request</option>
              <option value="2">Hardware Failure</option>
              <option value="1">Network Issue</option>
              <option value="3">Software Bug</option>
               <option value="5">Other</option>
            </select>
          </div>
           
        </div>
       
        <h1
         
        >
          إرفاق ملفات (اختياري)
        </h1>
        <>
          {fileList}
          <div className="container my-4">
            <div {...getRootProps({ style })}>
              <input {...getInputProps()} />
              <p>قم بسحب وإفلات بعض الملفات هنا، أو انقر لتحديد الملفات</p>
            </div>
          </div>
          <div className="flex gap-2">
          
          </div>
        </>
        
       <button
              type="button"
              onClick={handleUploadFile}
              disabled={!acceptedFiles || !acceptedFiles.length}
              className="px-3 py-2 rounded bg-indigo-600 text-white disabled:opacity-50"
            >
              رفع الملف
            </button>
        <button
          className="px-4 mx-2 py-2 rounded border  text-blue-50 bg-green-500 hover:bg-green-600"
          onClick={() => scanAndUploadDirectly()}
        >
        مسح
        </button>
        {error && <div className="text-red-600 text-sm">{error}</div>}

        <div className="flex justify-end gap-2">
          <button
            type="button"
            className="px-4 py-2 rounded border border-gray-300 bg-white hover:bg-gray-50"
            onClick={() => navigate(-1)}
          >
            إلغاء
          </button>
          <button
            type="submit"
            disabled={submitting}
            className="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50"
          >
            {submitting ? "جاري الحفظ..." : "حفظ الطلب"}
          </button>
        </div>
      </form>
      {/* Scanner response output (optional) */}
      <div id="response" className="text-xs text-gray-500 mt-2">
        {scanResultUrl && (
          <div className="mt-1">تم الحفظ في: {scanResultUrl}</div>
        )}
      </div>
    </div>
  );
}
