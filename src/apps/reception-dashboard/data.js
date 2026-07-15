// src/data.js
// بيانات ثابتة يعاد استخدامها في أكثر من مكوّن

export const NAV_ITEMS = [
  { icon: "fa-tv", label: "لوحة الاستقبال" },
  { icon: "fa-home", label: "الصفحة الرئيسية" },
];

export const SPECIALTIES = [
  { value: "general", label: "طب عام" },
  { value: "internal", label: "باطنة" },
  { value: "cardiology", label: "قلب وأوعية دموية" },
  { value: "orthopedic", label: "عظام" },
  { value: "neurology", label: "مخ وأعصاب" },
  { value: "pediatrics", label: "أطفال" },
  { value: "ent", label: "أنف وأذن وحنجرة" },
  { value: "ophthalmology", label: "عيون" },
  { value: "dermatology", label: "جلدية" },
  { value: "dentistry", label: "أسنان" },
  { value: "urology", label: "مسالك بولية" },
  { value: "gynecology", label: "نساء وتوليد" },
  { value: "psychiatry", label: "طب نفسي" },
  { value: "surgery", label: "جراحة عامة" },
];

export const DOCTORS = [
  { value: "dr-khaled-hassan", label: "د. خالد حسن" },
  { value: "dr-ibrahim-sayed", label: "د. إبراهيم سيد" },
  { value: "dr-ahmed-ali", label: "د. أحمد علي" },
  { value: "dr-mohamed-ibrahim", label: "د. محمد إبراهيم" },
  { value: "dr-mahmoud-hassan", label: "د. محمود حسن" },
  { value: "dr-karim-abdallah", label: "د. كريم عبدالله" },
  { value: "dr-samer-mahmoud", label: "د. سامر محمود" },
  { value: "dr-yasser-mohamed", label: "د. ياسر محمد" },
  { value: "dr-nourhan-ahmed", label: "د. نورهان أحمد" },
  { value: "dr-mostafa-saeed", label: "د. مصطفى سعيد" },
];

// كل الحجوزات هنا مؤكدة، لا يوجد حالة "قيد الانتظار"
export const APPOINTMENTS = [
  { id: 1, patient: "أحمد محمد علي", doctor: "د. إبراهيم (الأسنان) - فحص دوري", time: "10:30" },
  { id: 2, patient: "ليلى عبدالله", doctor: "د. خالد حسن - استشارة", time: "11:15" },
  { id: 3, patient: "ياسر محمد", doctor: "د. خالد العطام - مراجعة أشعة", time: "12:00" },
];

export const DOCTOR_TABS = ["د. خالد حسن", "د. في خالد", "د. إبراهيم سيد"];

// جدول مبسّط: صف لكل موعد بدل الشبكة القديمة بخانات فارغة
export const SCHEDULE_ROWS = [
  { time: "10:00 - 10:30", patient: "أحمد محمد" },
  { time: "11:30 - 12:00", patient: "ليلى عبدالله" },
  { time: "12:00 - 12:30", patient: "ياسر محمد" },
];

export const DAYS = ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];
export const MONTHS = [
  "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو",
  "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر",
];

export const INITIAL_FORM = {
  "patient-name": "",
  "patient-email": "",
  "patient-phone": "",
  "patient-age": "",
  "patient-gender": "",
  "patient-condition": "",
  "visit-reason": "",
  specialty: "",
  doctor: "",
  "visit-type": "",
  "visit-datetime": "",
  "visit-price": "",
};
