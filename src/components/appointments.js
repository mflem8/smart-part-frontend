class Appointments {
    constructor() {
        this.appointments = []
        this.adapter = new AppointmentsAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadAppointments()
    }

    initBindingsAndEventListeners() {
        this.appointmentsContainer = document.getElementById('appointments-container')
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