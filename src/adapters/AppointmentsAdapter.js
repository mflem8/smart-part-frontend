class AppointmentsAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/appointments'
    }

    getAppointments() {
        return fetch(this.baseUrl).then(res => res.json()
        )
    }
}

adapter = new AppointmentsAdapter()
