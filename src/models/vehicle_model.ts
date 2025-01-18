export class VehicleDTO {
    vehicleId: string;
    category: string;
    numberPlate: string;
    fuelType: string;
    status: string;
    remarks?: string;

    constructor(
        vehicleId: string,
        category: string,
        numberPlate: string,
        fuelType: string,
        status: string,
        remarks?: string
    ) {
        this.vehicleId = vehicleId;
        this.category = category;
        this.numberPlate = numberPlate;
        this.fuelType = fuelType;
        this.status = status;
        this.remarks = remarks;
    }
}