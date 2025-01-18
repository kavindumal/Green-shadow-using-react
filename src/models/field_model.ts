export class FieldDTO {
    fieldId: string;
    fieldName: string;
    location: { x: number; y: number };
    size: string;
    fieldImg1: string;
    fieldImg2: string;
    staffs: string[];

    constructor(
        fieldId: string,
        fieldName: string,
        location: { x: number; y: number },
        size: string,
        fieldImg1: string,
        fieldImg2: string,
        staffs: string[]
    ) {
        this.fieldId = fieldId;
        this.fieldName = fieldName;
        this.location = location;
        this.size = size;
        this.fieldImg1 = fieldImg1;
        this.fieldImg2 = fieldImg2;
        this.staffs = staffs;
    }
}
