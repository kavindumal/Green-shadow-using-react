export class UserDTO {
    email: string;
    password: string;
    role: Role;

    constructor(email: string, password: string, role: Role) {
        this.email = email;
        this.password = password;
        this.role = role;
    }
}

export enum Role {
    MANAGER = "MANAGER",
    ADMINISTRATIVE = "ADMINISTRATIVE",
    SCIENTIST = "SCIENTIST",
    OTHER = "OTHER"
}
