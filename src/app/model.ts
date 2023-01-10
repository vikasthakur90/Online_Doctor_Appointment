export interface DoctorData {
    id: number;
    docName: string;
    docEmail: string;
    docGender: string;
    docDob: string;
    specialization: string;
    docPhone: string;
    docAddress: string;
    docImage: string;
}
export interface PatientData {
    id: number;
    patientName: string;
    patientPassword: string;
    patientEmail: string;
    patientPhone: string;
    patientAddress: string;
    patientDob: string;
    patientGender: string;
    patientAge: number;
    patientImage: string;
}
export interface Appointment {
    id: number;
    doa: string;
    patientEmail: string;
    patientName: string;
    Disease: string;
    docEmail: string;
    docName: string;
}
export interface pappointment {
    id: number;
    doa: string;
    patientName: string;
    patientEmail: string;
    patientPhone: string;
    patientAddress: string;
    patientDob: string;
    patientGender: string;
    patientAge: number;
    patientImage: string;
}
export interface prescription {
    id: number;
    medicine: string;
    test: string;
    additional: string;
}
export class EmployeeForm {
    id: number;
    patientName: string;
    LastName: string;
    patientEmail: string;
    password: string;
    patientGender: string;
    patientDob: string;
    patientPhone: string;
    patientAge: string;
    patientAddress: string;
    patientImage: string;

    constructor(id: number, patientName: string, LastName: string, patientEmail: string, password: string, patientGender: string, patientDob: string, patientPhone: string, patientAge: string, patientAddress: string, patientImage: string) {
        this.id = id;
        this.patientName = patientName;
        this.LastName = LastName;
        this.patientEmail = patientEmail;
        this.password = password;
        this.patientGender = patientGender;
        this.patientDob = patientDob;
        this.patientPhone = patientPhone;
        this.patientAge = patientAge;
        this.patientAddress = patientAddress;
        this.patientImage = patientImage;

    }
}

export class LoginForm {
    email: string;
    password: string;
    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }
}

export class DoctorProfileForm {
    docName: string;
    docEmail: string;
    docPassword: string;
    docGender: string;
    docDob: string;
    specialization: string;
    docPhone: string;
    docAddress: string;
    docImage: string;

    constructor(docName: string, docEmail: string, docPassword: string, docGender: string, docDob: string, specialization: string, docPhone: string, docAddress: string, docImage: string) {
        this.docName = docName;
        this.docEmail = docEmail;
        this.docPassword = docPassword;
        this.docGender = docGender;
        this.docDob = docDob;
        this.specialization = specialization;
        this.docPhone = docPhone;
        this.docAddress = docAddress;
        this.docImage = docImage;
    }
}

export interface PatientForm {
    patientName: string;

    patientEmail: string;

    patientPhone: string;

    patientAddress: string;

    patientDob: string;

    patientGender: string;

    patientAge: number;

    patientImage: string;
}

export class LoginDoctorForm {
    docEmail: string;
    docPassword: string;
    constructor(docEmail: string, docPassword: string) {
        this.docEmail = docEmail;
        this.docPassword = docPassword;
    }
}