export class StaffLog {
    staffLogId: string;
    staffId: string;
    logId: string;

    constructor(staffLogId: string, staffId: string, logId: string) {
        this.staffLogId = staffLogId;
        this.staffId = staffId;
        this.logId = logId;
    }
}
