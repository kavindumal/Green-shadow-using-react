export class FieldStaff {
    fieldStaffId: string;
    fieldId: string;
    staffId: string;
    assignedDate: Date;

    constructor(
        fieldStaffId: string,
        fieldId: string,
        staffId: string,
        assignedDate: Date
    ) {
        this.fieldStaffId = fieldStaffId;
        this.fieldId = fieldId;
        this.staffId = staffId;
        this.assignedDate = assignedDate;
    }
}
