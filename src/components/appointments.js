class Appointments {
    constructor() {
        this.appointments = []
        this.adapter = new AppointmentsAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadAppointments()
    }

    initBindingsAndEventListeners() {
        this.appointmentsContainer = document.getElementById('appointments-container')
        this.newAppointmentValue = document.getElementById('new-appointment-value')
        this.appointmentForm = document.getElementById('new-appointment-form')
        this.appointmentForm.addEventListener('submit', this.createAppointment.bind(this))
    }

    createAppointment(e) {
        
        e.preventDefault()
        const apptValue = this.newAppointmentValue.value
        this.adapter.createAppointment(apptValue).then(appt => {
            this.appointments.push(new Appointment(appt))
            this.render()
        })
    }

    fetchAndLoadAppointments() {
        this.adapter
        .getAppointments()
        .then(appointments => {
            appointments.forEach(appointment => this.appointments.push(new Appointment(appointment)))
        })
        .then(() => {
            this.render()
        })
    }

    render() {
        const appointmentsContainer = document.getElementById('appointments-container')
        this.appointmentsContainer.innerHTML = this.appointments.map(appointment => appointment.renderLi()).join('')

    }
}