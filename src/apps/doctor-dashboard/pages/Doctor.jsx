import { useState, useEffect } from 'react';
import {
  BsLightningChargeFill,
  BsSun,
  BsMoonStars,
  BsSearch,
  BsGenderMale,
  BsCalendarEvent,
  BsEye,
  BsActivity,
  BsCapsulePill,
  BsJournalText,
  BsPrinterFill,
} from 'react-icons/bs';
import { FaPaperPlane } from 'react-icons/fa6';
import doctorAvatar from '../assets/images/doctor-avatar.svg';


const DOCTOR_PROFILE = {
  id: 'DOC-101',
  firstName: 'كيرلس',
  fullName: 'د. كيرلس',
  clinicName: 'عيادة الشفاء',
  specialty: 'باطنة عامة',
};

const NAV_ITEMS = [
  { id: 'appointments', label: 'المواعيد', target: 'appointments' },
  { id: 'patients', label: 'سجل المرضى', target: 'patients' },
  { id: 'prescription', label: 'الوصف الطبي', target: 'prescription' },
  { id: 'logout', label: 'تسجيل الخروج', target: 'logout' },
];

// Today's appointments list.
const APPOINTMENTS_DATA = [
  { id: 'AP-001', patientName: 'زياد عبدالله', time: '09:30 ص', reason: 'فحص دوري', status: 'active' },
  { id: 'AP-002', patientName: 'منى إبراهيم', time: '10:15 ص', reason: 'متابعة ضغط الدم', status: 'normal' },
  { id: 'AP-003', patientName: 'أحمد سامي', time: '11:00 ص', reason: 'ألم في الحلق', status: 'delayed' },
  { id: 'AP-004', patientName: 'سارة محمود', time: '11:45 ص', reason: 'نتائج تحاليل', status: 'normal' },
  { id: 'AP-005', patientName: 'يوسف طارق', time: '12:30 م', reason: 'تطعيم', status: 'active' },
  { id: 'AP-006', patientName: 'هبة الله كمال', time: '01:15 م', reason: 'استشارة عامة', status: 'normal' },
];

const STATUS_LABELS = {
  active: 'جاري الآن',
  delayed: 'متأخر',
  normal: 'مجدول',
};

const VISIBLE_APPOINTMENTS_COUNT = 3;

const PATIENTS_DATA = [
  { id: 'MR-2044', name: 'زياد عبدالله', gender: 'ذكر', age: 28, allergy: true, lastVisit: '23 أبريل 2026' },
  { id: 'MR-1987', name: 'منى إبراهيم', gender: 'أنثى', age: 34, allergy: false, lastVisit: '02 مارس 2026' },
  { id: 'MR-1622', name: 'أحمد سامي', gender: 'ذكر', age: 41, allergy: false, lastVisit: '19 يناير 2026' },
];

const FAKE_DELAY_MS = 400;


function getInitials(fullName) {
  return fullName
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0))
    .join(' ');
}


const Doctor = () => {

  const [doctor, setDoctor] = useState(null); // null until "loaded"
  const [appointments, setAppointments] = useState([]);
  const [appointmentsLoading, setAppointmentsLoading] = useState(true);
  const [showAllAppointments, setShowAllAppointments] = useState(false);

  const [activeSection, setActiveSection] = useState('appointments');


  const [morningShift, setMorningShift] = useState(true);
  const [eveningShift, setEveningShift] = useState(false);
  const [isSavingAvailability, setIsSavingAvailability] = useState(false);


  const [messageEmail, setMessageEmail] = useState('');
  const [messageNotes, setMessageNotes] = useState('');
  const [messageEmailError, setMessageEmailError] = useState('');
  const [isSendingMessage, setIsSendingMessage] = useState(false);

  /* ---------------------------------------------------------------
     STATE: patient search + selected patient record
     --------------------------------------------------------------- */
  const [patientQuery, setPatientQuery] = useState('');
  const [selectedPatient, setSelectedPatient] = useState(null);

  /* ---------------------------------------------------------------
     STATE: prescription form
     --------------------------------------------------------------- */
  const [rxDiagnosis, setRxDiagnosis] = useState('');
  const [rxMedications, setRxMedications] = useState('');
  const [rxInstructions, setRxInstructions] = useState('');
  const [rxDiagnosisError, setRxDiagnosisError] = useState('');
  const [rxMedicationsError, setRxMedicationsError] = useState('');
  const [isSubmittingRx, setIsSubmittingRx] = useState(false);

  /* ---------------------------------------------------------------
     EFFECT: load the "initial" dashboard data once, when the page
     first mounts. We fake a short delay with setTimeout to imitate
     a real network request (and to keep the loading text visible).
     --------------------------------------------------------------- */
  useEffect(() => {
    const timer = setTimeout(() => {
      setDoctor(DOCTOR_PROFILE);
      setAppointments(APPOINTMENTS_DATA);
      setAppointmentsLoading(false);
      setSelectedPatient(PATIENTS_DATA[0]); // auto-select the first patient
    }, FAKE_DELAY_MS);

    // Cleanup: cancel the timer if the page unmounts before it fires.
    return () => clearTimeout(timer);
  }, []);

  /* ---------------------------------------------------------------
     DERIVED VALUES (calculated on every render, no state needed)
     --------------------------------------------------------------- */

  // Only show the first 3 appointments unless "show more" was clicked.
  const visibleAppointments = showAllAppointments
    ? appointments
    : appointments.slice(0, VISIBLE_APPOINTMENTS_COUNT);

  // Filter the patients list by the search box text.
  const normalizedQuery = patientQuery.trim().toLowerCase();
  const patientResults = normalizedQuery
    ? PATIENTS_DATA.filter(
        (patient) =>
          patient.name.toLowerCase().includes(normalizedQuery) ||
          patient.id.toLowerCase().includes(normalizedQuery)
      )
    : PATIENTS_DATA;

  /* ---------------------------------------------------------------
     EVENT HANDLERS
     --------------------------------------------------------------- */

  // Sidebar navigation: highlight the clicked link and scroll to it.
  const handleNavigate = (target) => {
    if (target === 'logout') {
      // Placeholder — a real logout would clear auth state and redirect.
      window.alert('تم تسجيل الخروج');
      return;
    }
    setActiveSection(target);
    const section = document.getElementById(target);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Save the working-hours toggles (fake network request).
  const handleSaveAvailability = () => {
    setIsSavingAvailability(true);
    setTimeout(() => {
      setIsSavingAvailability(false);
    }, FAKE_DELAY_MS);
  };

  // Submit the "send message to reception" form.
  const handleSendMessage = (event) => {
    event.preventDefault();

    // Simple validation, same rules the old form used.
    const emailIsValid = /^\S+@\S+\.\S+$/.test(messageEmail);
    if (!messageEmail) {
      setMessageEmailError('البريد الإلكتروني مطلوب');
      return;
    }
    if (!emailIsValid) {
      setMessageEmailError('صيغة البريد غير صحيحة');
      return;
    }
    setMessageEmailError('');

    setIsSendingMessage(true);
    setTimeout(() => {
      setIsSendingMessage(false);
      setMessageEmail('');
      setMessageNotes('');
    }, FAKE_DELAY_MS);
  };

  // Submit the prescription form.
  const handleSubmitPrescription = (event) => {
    event.preventDefault();

    let hasError = false;

    if (!rxDiagnosis.trim()) {
      setRxDiagnosisError('التشخيص مطلوب');
      hasError = true;
    } else {
      setRxDiagnosisError('');
    }

    if (!rxMedications.trim()) {
      setRxMedicationsError('الأدوية مطلوبة');
      hasError = true;
    } else {
      setRxMedicationsError('');
    }

    if (hasError) return;

    setIsSubmittingRx(true);
    setTimeout(() => {
      setIsSubmittingRx(false);
      setRxDiagnosis('');
      setRxMedications('');
      setRxInstructions('');
    }, FAKE_DELAY_MS);
  };

  /* ---------------------------------------------------------------
     RENDER (the JSX for the whole page)
     --------------------------------------------------------------- */
  return (
    <>
      {/* ============ NAVBAR ============ */}
      <nav className="app-navbar" dir="ltr">
        <div className="app-navbar__blob" aria-hidden="true" />
        <div className="app-navbar__brand">
          <a className="app-navbar__link" href="#top">
            {doctor?.clinicName || 'عيادة الشفاء'}
          </a>
        </div>
      </nav>

      <div className="page-container">
        <div className="row dashboard-row" dir="rtl">
          {/* ============ SIDEBAR ============ */}
          <div className="col-lg-2 col-md-3">
            <aside className="sidebar">
              <div className="sidebar__profile mt-5">
                <img
                  src={doctorAvatar}
                  alt={doctor?.fullName?.replace('د. ', '') || '...'}
                  className="sidebar__profile-img"
                />
              </div>

              <div className="sidebar__hello">
                <h5>مرحبًا دكتور</h5>
                <span>{doctor?.fullName?.replace('د. ', '') || '...'}</span>
              </div>

              <nav className="sidebar__nav mt-5">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleNavigate(item.target)}
                    className={`sidebar__nav-item ${activeSection === item.target ? 'active' : ''}`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </aside>
          </div>

          <div className="col-lg-10 col-md-9">
            {/* ============ SECTION: APPOINTMENTS + AVAILABILITY + MESSAGE ============ */}
            <section id="appointments" className="dashboard-section row">
              <div className="col-lg-7">
                <div className="appointment-list">
                  <div className="appoint-header">
                    <h5>مواعيد اليوم</h5>
                  </div>

                  <div className="appointment-list__items">
                    {appointmentsLoading && <p className="text-muted">جاري تحميل المواعيد...</p>}

                    {!appointmentsLoading && appointments.length === 0 && (
                      <p className="text-muted">لا توجد مواعيد اليوم.</p>
                    )}

                    {!appointmentsLoading &&
                      visibleAppointments.map((appointment) => (
                        <div
                          key={appointment.id}
                          className={`appointment-card status-${appointment.status}`}
                          role="button"
                          tabIndex={0}
                        >
                          <div className="appointment-card__row">
                            <span className="time-text">{appointment.time}</span>
                            <span className="vertical-divider" />
                            <div className="avatar avatar--sm avatar--tone-primary">
                              {getInitials(appointment.patientName)}
                            </div>
                            <div className="appointment-card__info">
                              <h6>{appointment.patientName}</h6>
                              <small>{appointment.reason}</small>
                            </div>
                            <span
                              className={`appointment-card__badge appointment-card__badge--${appointment.status}`}
                            >
                              {STATUS_LABELS[appointment.status]}
                            </span>
                          </div>
                        </div>
                      ))}
                  </div>

                  {appointments.length > VISIBLE_APPOINTMENTS_COUNT && (
                    <button
                      type="button"
                      className="custom-btn custom-btn--outline custom-btn--full"
                      onClick={() => setShowAllAppointments((value) => !value)}
                    >
                      <span>{showAllAppointments ? 'عرض أقل' : 'عرض المزيد'}</span>
                    </button>
                  )}
                </div>
              </div>

              <div className="col-lg-5 mt-4 mt-lg-0">
                {/* ---- Availability panel ---- */}
                <div className="availability-panel">
                  <div className="panel-header">
                    <h5>
                      <BsLightningChargeFill className="text-warning me-2" /> فترة العمل
                    </h5>
                    <p>تحكم في ظهورك للمرضى الآن</p>
                  </div>

                  <div className="toggle-container">
                    <button
                      type="button"
                      className={`period-tab ${morningShift ? 'period-tab--checked' : ''}`}
                      onClick={() => setMorningShift((value) => !value)}
                    >
                      <div className="period-icon">
                        <BsSun />
                      </div>
                      <div className="period-info">
                        <span className="name">صباحاً</span>
                        <span className="time">9:00 - 14:00</span>
                      </div>
                      <div className="status-dot" />
                    </button>

                    <button
                      type="button"
                      className={`period-tab ${eveningShift ? 'period-tab--checked' : ''}`}
                      onClick={() => setEveningShift((value) => !value)}
                    >
                      <div className="period-icon">
                        <BsMoonStars />
                      </div>
                      <div className="period-info">
                        <span className="name">مساءً</span>
                        <span className="time">17:00 - 22:00</span>
                      </div>
                      <div className="status-dot" />
                    </button>
                  </div>

                  <button
                    className="update-pulse-btn"
                    onClick={handleSaveAvailability}
                    disabled={isSavingAvailability}
                    type="button"
                  >
                    <span>{isSavingAvailability ? 'جاري الحفظ...' : 'تثبيت الحالة'}</span>
                  </button>
                </div>

                {/* ---- Send message to reception form ---- */}
                <form className="custom-form mt-4" onSubmit={handleSendMessage} noValidate>
                  <div className="mb-4">
                    <label className="form-label" htmlFor="reception-email">
                      البريد الإلكتروني
                    </label>
                    <input
                      id="reception-email"
                      type="email"
                      className="form-control custom-input"
                      placeholder="name@example.com"
                      value={messageEmail}
                      onChange={(event) => setMessageEmail(event.target.value)}
                    />
                    {messageEmailError && <small className="text-danger">{messageEmailError}</small>}
                  </div>

                  <div className="mb-3">
                    <label className="form-label" htmlFor="reception-notes">
                      ملاحظات
                    </label>
                    <textarea
                      id="reception-notes"
                      className="form-control custom-input"
                      rows={3}
                      value={messageNotes}
                      onChange={(event) => setMessageNotes(event.target.value)}
                    />
                  </div>

                  <button className="btn-done-message" type="submit" disabled={isSendingMessage}>
                    <FaPaperPlane className="ms-2" />
                  </button>
                </form>
              </div>
            </section>

            {/* ============ SECTION: PATIENT SEARCH + RECORD ============ */}
            <section id="patients" className="dashboard-section row g-4">
              <div className="col-lg-4">
                <div className="search-sidebar p-4 shadow-sm bg-white">
                  <h5 className="mb-4 fw-bold">
                    <BsSearch className="me-2" /> بحث عن مريض
                  </h5>

                  <div className="mb-4">
                    <input
                      type="text"
                      className="form-control custom-input"
                      placeholder="اكتب اسم المريض أو رقم الملف..."
                      value={patientQuery}
                      onChange={(event) => setPatientQuery(event.target.value)}
                    />
                  </div>

                  <div className="search-results-list">
                    {patientResults.length === 0 && (
                      <p className="text-muted small">لا توجد نتائج مطابقة.</p>
                    )}

                    {patientResults.map((patient) => (
                      <div
                        key={patient.id}
                        className={`patient-search-item p-3 mb-2 border rounded-3 cursor-pointer ${
                          patient.id === selectedPatient?.id ? 'active-result' : ''
                        }`}
                        onClick={() => setSelectedPatient(patient)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(event) => event.key === 'Enter' && setSelectedPatient(patient)}
                      >
                        <div className="d-flex align-items-center gap-3">
                          <div className="avatar avatar--sm avatar--tone-primary">
                            {getInitials(patient.name)}
                          </div>
                          <div>
                            <h6 className="mb-0">{patient.name}</h6>
                            <small className="text-muted">#{patient.id}</small>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-lg-8">
                {!selectedPatient ? (
                  <div className="records-container">
                    <p className="text-muted">اختر مريضًا لعرض ملفه.</p>
                  </div>
                ) : (
                  <div className="records-container">
                    <div className="patient-record-card w-100">
                      <div className="record-header">
                        <div className="record-avatar">{getInitials(selectedPatient.name)}</div>
                        <div className="record-info">
                          <h6>{selectedPatient.name}</h6>
                          <small>رقم الملف: #{selectedPatient.id}</small>
                        </div>
                      </div>

                      <div className="record-stats">
                        <span className="stat-pill stat-pill--default">
                          <BsGenderMale />
                          {selectedPatient.gender}
                        </span>
                        <span className="stat-pill stat-pill--default">
                          <BsCalendarEvent />
                          {selectedPatient.age} سنة
                        </span>
                        {selectedPatient.allergy && (
                          <span className="stat-pill stat-pill--warning">حساسية</span>
                        )}
                      </div>

                      <div className="last-visit">
                        <div>
                          <small className="d-block text-muted">آخر زيارة</small>
                          <span className="fw-bold text-primary last-visit__date">
                            {selectedPatient.lastVisit}
                          </span>
                        </div>
                        <button className="btn btn-sm btn-light rounded-pill" type="button">
                          <BsEye /> الملف الكامل
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* ============ SECTION: PRESCRIPTION ============ */}
            <section id="prescription" className="dashboard-section">
              <div className="prescription-card mt-5">
                <div className="patient-brief">
                  <div className="d-flex align-items-center gap-3">
                    <div className="patient-brief__avatar">
                      {selectedPatient?.name ? selectedPatient.name.charAt(0) : '؟'}
                    </div>
                    <div>
                      <h5 className="mb-0 fw-bold">{selectedPatient?.name || 'اختر مريضًا أولًا'}</h5>
                      {selectedPatient && (
                        <small className="text-muted">
                          {selectedPatient.gender}، {selectedPatient.age} سنة
                        </small>
                      )}
                    </div>
                  </div>
                  <div className="text-end">
                    <div className="time-text mb-1">#RX-NEW</div>
                    <small className="text-muted">
                      {new Date().toLocaleDateString('ar-EG', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </small>
                  </div>
                </div>

                <form className="prescription-body" onSubmit={handleSubmitPrescription} noValidate>
                  <div className="mb-5">
                    <label>
                      <BsActivity className="me-2" /> التشخيص
                    </label>
                    <input
                      type="text"
                      className="form-control prescription-input"
                      placeholder="مثلاً: نزلة معوية حادة..."
                      value={rxDiagnosis}
                      onChange={(event) => setRxDiagnosis(event.target.value)}
                    />
                    {rxDiagnosisError && (
                      <small className="text-danger d-block">{rxDiagnosisError}</small>
                    )}
                  </div>

                  <div className="mb-5">
                    <label>
                      <BsCapsulePill className="me-2" /> الأدوية والعلاجات
                    </label>
                    <textarea
                      className="form-control prescription-input"
                      rows={4}
                      placeholder="1. الدواء (التركيز) - الجرعة - المدة..."
                      value={rxMedications}
                      onChange={(event) => setRxMedications(event.target.value)}
                    />
                    {rxMedicationsError && (
                      <small className="text-danger d-block">{rxMedicationsError}</small>
                    )}
                  </div>

                  <div className="mb-4">
                    <label>
                      <BsJournalText className="me-2" /> تعليمات إضافية
                    </label>
                    <textarea
                      className="form-control prescription-input"
                      rows={2}
                      placeholder="مواعيد الأكل، تعليمات الراحة..."
                      value={rxInstructions}
                      onChange={(event) => setRxInstructions(event.target.value)}
                    />
                  </div>

                  <div className="d-flex justify-content-end gap-3 mt-4">
                    <button
                      className="btn btn-primary px-5 py-3 shadow-sm prescription-submit"
                      type="submit"
                      disabled={isSubmittingRx || !selectedPatient}
                    >
                      <BsPrinterFill className="me-2" /> اعتماد وإصدار الوصفة
                    </button>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Doctor;
