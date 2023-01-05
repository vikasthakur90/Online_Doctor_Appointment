export interface DoctorData{
    id:number;
    docName:string;
    docEmail:string;
    docGender:string;
    docDob:string;
    specialization:string;
    docPhone:string;
    docAddress:string;
    docImage:string;
}
export interface PatientData{
    id:number;
    patientName:string;
    patientEmail:string;
    patientPhone:string;
    patientAddress:string;
    patientDob:string;
    patientGender:string;
    patientAge:number;
    patientImage:string;
}