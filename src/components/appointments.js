class Appointments {
    constructor() {
        this.appointments = []
        this.adapter = new AppointmentsAdapter()
        // this.bindEventListeners()
        this.fetchAndLoadNotes()
    }

    fetchAndLoadNotes() {
        this.adapter
        .getAppointments()
        .then(appointments => {
            appointments.forEach(appt => this.appointments.push(appt))
        })
        .then(() => {
            this.render()
        })
    }
    render() {
        const appointmentsContainer = document.getElementById('appointments-container');
        
    }
}