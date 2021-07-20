class Appointments {
    constructor() {
        this.appointments = []
        this.adapter = new AppointmentsAdapter()
        // this.bindEventListeners()
        this.fetchAndLoadNotes()
    }


    fetchAndLoadNotes() {
        this.adapter.getAppointments().then(appointments => {
            console.log(appointments)
        })
    }
}