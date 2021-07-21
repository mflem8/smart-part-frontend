class Appointments {
    constructor() {
        this.appointments = []
        this.adapter = new AppointmentsAdapter()
        // this.bindEventListeners()
        this.fetchAndLoadAppointments()
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
        appointmentsContainer.innerHTML = this.appointments.map(appointment => `<li>${appointment.day}</li>`).join('')
        console.log(apptsString)
        
        // appointmentsContainer.innerHTML = `${}`

    }
}