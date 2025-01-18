export class Log {
    logId: string;
    date: Date;
    details: string;
    temperature: string;
    observedImg: string;
    fieldId: string;
    cropId: string;
    staff: string[];

    constructor(
        logId: string,
        date: Date,
        details: string,
        temperature: string,
        observedImg: string,
        fieldId: string,
        cropId: string,
        staff: string[]
    ) {
        this.logId = logId;
        this.date = date;
        this.details = details;
        this.temperature = temperature;
        this.observedImg = observedImg;
        this.fieldId = fieldId;
        this.cropId = cropId;
        this.staff = staff;
    }
}
