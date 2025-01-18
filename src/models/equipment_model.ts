export class EquipmentDTO {
    equipmentId: string;
    category: string;
    type: string;
    status: string;
    eqStaff: string;
    eqField: string;

    constructor(
        equipmentId: string,
        category: string,
        type: string,
        status: string,
        eqStaff: string,
        eqField: string
    ) {
        this.equipmentId = equipmentId;
        this.category = category;
        this.type = type;
        this.status = status;
        this.eqStaff = eqStaff;
        this.eqField = eqField;
    }
}
