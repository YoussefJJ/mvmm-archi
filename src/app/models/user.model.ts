export enum GenderEnum {
    Male = 'MALE',
    Female = 'FEMALE'
}

export class User {
    firstname: string;
    lastname: string;
    gender: GenderEnum;
    dateOfBirth: string;
    dateOfApp: string;
    city: string;

    constructor(fn: string, ln: string, gender: GenderEnum, date: string, city: string, dateApp: string) {
        this.city = city;
        this.firstname = fn;
        this.lastname = ln;
        this.gender = gender;
        this.dateOfBirth = date;
        this.dateOfApp = dateApp;
    }
}
