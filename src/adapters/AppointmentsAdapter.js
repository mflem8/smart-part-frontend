class AppointmentsAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/appointments'
    }

    getAppointments() {
        return fetch(this.baseUrl).then(res => res.json())
    }

    createAppointment(apptValue) {
        const appointment = {
            day: apptValue,
        }
        return fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            day: JSON.stringify({ appointment }),
        })
       // .then(res => res.json())
    }
}

// adapter = new AppointmentsAdapter()
