const patients = [
    { name: "سارة محمود", time: "09:00 ص", status: "normal", note: "مراجعة دورية - جراحة" },
    { name: "ادهم عبد االله", time: "10:30 ص", status: "active", note: "ألم مزمن في المعدة" },
    { name: "فاطمة الزهراء", time: "11:15 ص", status: "delayed", note: "استشارة طارئة" }
];


function renderAppointments() {
    const list = document.getElementById('appointments-list');
    list.innerHTML = '';

    patients.forEach(patient => {

        let statusClass = '';
        const card = `
            <div class="appointment-card p-3 mb-3 ${statusClass}">
                <div class="d-flex align-items-center gap-3">

                    <div class="time-text">${patient.time}</div>

                    <div class="vertical-divider"></div>

                    <div class="avatar-sm">${patient.name.charAt(0)}</div>

                    <div class="flex-grow-1">
                        <div class="fw-bold">${patient.name}</div>
                        <small>${patient.note}</small>
                    </div>

                </div>
            </div>
        `;

        list.innerHTML += card;
    });
}
renderAppointments();

const textareas = document.querySelectorAll('.prescription-input');

textareas.forEach(textarea => {
    textarea.addEventListener('input', function() {
        this.style.height = 'auto'; 
        this.style.height = (this.scrollHeight) + 'px'; 
    });
});


