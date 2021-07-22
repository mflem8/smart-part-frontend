class Appointment {
    constructor(appointmentJSON) {
        this.id = appointmentJSON.id
        this.day = appointmentJSON.day
    }

    renderLi() {
        return `<li>${this.day}</li>`
    }
}