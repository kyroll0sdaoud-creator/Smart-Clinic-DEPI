// src/components/PatientForm.jsx
import React, { useState } from "react";
import { SPECIALTIES, DOCTORS, INITIAL_FORM } from "../data";
import FormField from "./FormField";

const VISIT_TYPES = [
  { value: "new", label: "كشف جديد" },
  { value: "repeat", label: "إعادة كشف" },
  { value: "followup", label: "متابعة" },
];

const GENDERS = [
  { value: "male", label: "ذكر" },
  { value: "female", label: "أنثى" },
];

export default function PatientForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (field) => (e) => {
    const value = e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!form["patient-name"].trim()) newErrors["patient-name"] = "اسم المريض مطلوب";

    if (!form["patient-email"].trim()) {
      newErrors["patient-email"] = "البريد الإلكتروني مطلوب";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form["patient-email"])) {
      newErrors["patient-email"] = "صيغة البريد الإلكتروني غير صحيحة";
    }

    if (!form["patient-age"]) {
      newErrors["patient-age"] = "العمر مطلوب";
    } else if (Number(form["patient-age"]) <= 0 || Number(form["patient-age"]) > 120) {
      newErrors["patient-age"] = "الرجاء إدخال عمر صحيح";
    }

    if (!form["patient-gender"]) newErrors["patient-gender"] = "الرجاء اختيار الجنس";

    if (!form["patient-condition"].trim()) newErrors["patient-condition"] = "الحالة المرضية مطلوبة";
    if (!form["visit-reason"].trim()) newErrors["visit-reason"] = "سبب الزيارة مطلوب";
    if (!form.specialty) newErrors.specialty = "الرجاء اختيار التخصص";
    if (!form.doctor) newErrors.doctor = "الرجاء اختيار الدكتور";
    if (!form["visit-type"]) newErrors["visit-type"] = "الرجاء اختيار نوع الزيارة";
    if (!form["visit-datetime"]) newErrors["visit-datetime"] = "موعد الزيارة مطلوب";
    if (!form["visit-price"] || Number(form["visit-price"]) <= 0) {
      newErrors["visit-price"] = "الرجاء إدخال سعر صحيح";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(false);
    if (validate()) {
      setShowSuccess(true);
      setForm(INITIAL_FORM);
      setTimeout(() => setShowSuccess(false), 4000);
    }
  };

  return (
    <div className="card patient-form-card">
      <h3 className="form-title">
        <i className="fas fa-user-plus"></i> تسجيل مريض جديد
      </h3>
      <p className="form-subtitle">قم بإضافة بيانات المريض بسرعة للبدء في جدولة المواعيد</p>

      <form onSubmit={handleSubmit} noValidate>
        <FormField
          id="patient-name"
          label="اسم المريض"
          required
          placeholder="أدخل اسم المريض الرباعي"
          value={form["patient-name"]}
          onChange={handleChange("patient-name")}
          error={errors["patient-name"]}
        />

        <FormField
          id="patient-email"
          type="email"
          label="البريد الإلكتروني"
          required
          placeholder="example@email.com"
          value={form["patient-email"]}
          onChange={handleChange("patient-email")}
          error={errors["patient-email"]}
        />

        <FormField
          id="patient-phone"
          type="tel"
          label="رقم الهاتف"
          placeholder="02xxxxxxxx"
          value={form["patient-phone"]}
          onChange={handleChange("patient-phone")}
          error={errors["patient-phone"]}
        />

        {/* صف العمر والجنس جنب بعض */}
        <div className="form-row">
          <FormField
            id="patient-age"
            type="number"
            label="العمر"
            required
            placeholder="مثال: 35"
            min="0"
            step="1"
            value={form["patient-age"]}
            onChange={handleChange("patient-age")}
            error={errors["patient-age"]}
          />

          <div className={`form-group${errors["patient-gender"] ? " has-error" : ""}`}>
            <label htmlFor="patient-gender">
              الجنس <span className="required-mark">*</span>
            </label>
            <select
              id="patient-gender"
              value={form["patient-gender"]}
              onChange={handleChange("patient-gender")}
            >
              <option value="" disabled>
                اختر الجنس
              </option>
              {GENDERS.map((g) => (
                <option key={g.value} value={g.value}>
                  {g.label}
                </option>
              ))}
            </select>
            <p className={`field-error${errors["patient-gender"] ? " visible" : ""}`}>
              {errors["patient-gender"]}
            </p>
          </div>
        </div>

        <FormField
          id="patient-condition"
          label="المرض / الحالة المرضية"
          required
          placeholder="مثال: ارتفاع ضغط الدم"
          value={form["patient-condition"]}
          onChange={handleChange("patient-condition")}
          error={errors["patient-condition"]}
        />

        <div className={`form-group${errors["visit-reason"] ? " has-error" : ""}`}>
          <label htmlFor="visit-reason">
            سبب الزيارة <span className="required-mark">*</span>
          </label>
          <textarea
            id="visit-reason"
            rows={3}
            placeholder="اكتب سبب الزيارة بإيجاز"
            value={form["visit-reason"]}
            onChange={handleChange("visit-reason")}
          />
          <p className={`field-error${errors["visit-reason"] ? " visible" : ""}`}>
            {errors["visit-reason"]}
          </p>
        </div>

        <div className={`form-group${errors.specialty ? " has-error" : ""}`}>
          <label htmlFor="specialty">
            التخصص <span className="required-mark">*</span>
          </label>
          <select id="specialty" value={form.specialty} onChange={handleChange("specialty")}>
            <option value="" disabled>
              اختر التخصص
            </option>
            {SPECIALTIES.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
          <p className={`field-error${errors.specialty ? " visible" : ""}`}>{errors.specialty}</p>
        </div>

        <div className={`form-group${errors.doctor ? " has-error" : ""}`}>
          <label htmlFor="doctor">
            الدكتور <span className="required-mark">*</span>
          </label>
          <select id="doctor" value={form.doctor} onChange={handleChange("doctor")}>
            <option value="" disabled>
              اختر الدكتور
            </option>
            {DOCTORS.map((d) => (
              <option key={d.value} value={d.value}>
                {d.label}
              </option>
            ))}
          </select>
          <p className={`field-error${errors.doctor ? " visible" : ""}`}>{errors.doctor}</p>
        </div>

        <div className={`form-group${errors["visit-type"] ? " has-error" : ""}`}>
          <label>
            نوع الزيارة <span className="required-mark">*</span>
          </label>
          <div className="segmented-control" role="radiogroup" aria-label="نوع الزيارة">
            {VISIT_TYPES.map((opt) => (
              <React.Fragment key={opt.value}>
                <input
                  type="radio"
                  id={`visit-${opt.value}`}
                  name="visit-type"
                  value={opt.value}
                  checked={form["visit-type"] === opt.value}
                  onChange={handleChange("visit-type")}
                />
                <label className="segmented-option" htmlFor={`visit-${opt.value}`}>
                  {opt.label}
                </label>
              </React.Fragment>
            ))}
          </div>
          <p className={`field-error${errors["visit-type"] ? " visible" : ""}`}>
            {errors["visit-type"]}
          </p>
        </div>

        <FormField
          id="visit-datetime"
          type="datetime-local"
          label="موعد الزيارة"
          required
          value={form["visit-datetime"]}
          onChange={handleChange("visit-datetime")}
          error={errors["visit-datetime"]}
        />

        <div className={`form-group${errors["visit-price"] ? " has-error" : ""}`}>
          <label htmlFor="visit-price">
            السعر (جنيه) <span className="required-mark">*</span>
          </label>
          <div className="price-input-wrap">
            <input
              type="number"
              id="visit-price"
              placeholder="0"
              min="1"
              step="1"
              value={form["visit-price"]}
              onChange={handleChange("visit-price")}
            />
            <span className="currency-suffix">ج.م</span>
          </div>
          <p className={`field-error${errors["visit-price"] ? " visible" : ""}`}>
            {errors["visit-price"]}
          </p>
        </div>

        <button type="submit" className="btn-register">
          <i className="fas fa-calendar-check"></i> تسجيل المريض وحجز موعد
        </button>
        <p className={`form-success-msg${showSuccess ? " visible" : ""}`}>
          تم تسجيل المريض وحجز الموعد بنجاح
        </p>
      </form>
    </div>
  );
}
