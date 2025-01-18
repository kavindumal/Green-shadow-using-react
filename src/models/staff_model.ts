export class StaffDTO {
    staffId: string;
    firstName: string;
    lastName: string;
    designation: string;
    gender: Gender;
    joinedDate: Date;
    dateOfBirth: Date;
    addressLine1: string;
    addressLine2: string;
    addressLine3?: string;
    addressLine4?: string;
    addressLine5?: string;
    mobile: string;
    email: string;
    role: Role;
    vehicleId?: string;

    constructor(
        staffId: string,
        firstName: string,
        lastName: string,
        designation: string,
        gender: Gender,
        joinedDate: Date,
        dateOfBirth: Date,
        addressLine1: string,
        addressLine2: string,
        mobile: string,
        email: string,
        role: Role,
        vehicleId?: string,
        addressLine3?: string,
        addressLine4?: string,
        addressLine5?: string
    ) {
        this.staffId = staffId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;
        this.gender = gender;
        this.joinedDate = joinedDate;
        this.dateOfBirth = dateOfBirth;
        this.addressLine1 = addressLine1;
        this.addressLine2 = addressLine2;
        this.addressLine3 = addressLine3;
        this.addressLine4 = addressLine4;
        this.addressLine5 = addressLine5;
        this.mobile = mobile;
        this.email = email;
        this.role = role;
        this.vehicleId = vehicleId;
    }
}

export enum Gender {
    MALE = "MALE",
    FEMALE = "FEMALE",
    OTHER = "OTHER"
}

export enum Role {
    MANAGER = "MANAGER",
    ADMINISTRATIVE = "ADMINISTRATIVE",
    SCIENTIST = "SCIENTIST",
    OTHER = "OTHER"
}
