export class FieldCrop {
    fieldCropId: string;
    cropId: string;
    fieldId: string;
    assignedDate: Date;

    constructor(
        fieldCropId: string,
        cropId: string,
        fieldId: string,
        assignedDate: Date
    ) {
        this.fieldCropId = fieldCropId;
        this.cropId = cropId;
        this.fieldId = fieldId;
        this.assignedDate = assignedDate;
    }
}
