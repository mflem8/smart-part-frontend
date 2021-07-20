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
            return console.log(appointments)
        })
        .then(() => {
            this.render()
        })
    }
    render() {
        const appointmentsContainer = document.getElementById('appointments-container');
        appointmentsContainer.innerHTML = "my appointments"
    }
}